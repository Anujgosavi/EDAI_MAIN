"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Mic,
  MicOff,
  VideoIcon,
  VideoOff,
  PhoneOff,
  MessageSquare,
  Users,
  ScreenShare,
  Maximize,
  Minimize,
  Clock,
  FileText,
  PenLine,
} from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { Separator } from "../../../../components/ui/separator"
import { Textarea } from "../../../../components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"

export default function TherapistVideoCallPage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hello! How are you doing today?", time: "3:01 PM" },
    { sender: "Client", text: "I'm doing well, thank you for asking!", time: "3:02 PM" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [elapsedTime, setElapsedTime] = useState(0)
  const [notes, setNotes] = useState("")
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Format elapsed time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const now = new Date()
      const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

      setMessages([...messages, { sender: "You", text: newMessage, time: timeString }])
      setNewMessage("")
    }
  }

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`)
        })
        setIsFullScreen(true)
      }
    } else {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }

  // Initialize local video stream
  useEffect(() => {
    // Start timer for call duration
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1)
    }, 1000)

    // Get user media for video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream
          }

          // In a real app, you would connect to a remote peer here
          // For demo purposes, we're just showing the local video in both places
          if (remoteVideoRef.current) {
            // In a real implementation, this would be the remote stream
            // For demo, we're using the same stream
            remoteVideoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error("Error accessing media devices:", err)
        })
    }

    return () => {
      clearInterval(timer)
      // Clean up video streams
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        const stream = localVideoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  // Toggle microphone
  const toggleMic = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      const audioTrack = stream.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled
        setIsMuted(!audioTrack.enabled)
      }
    }
  }

  // Toggle video
  const toggleVideo = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      const videoTrack = stream.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled
        setIsVideoOn(videoTrack.enabled)
      }
    }
  }

  // Toggle screen sharing (simplified for demo)
  const toggleScreenSharing = () => {
    setIsScreenSharing(!isScreenSharing)
    // In a real implementation, you would use navigator.mediaDevices.getDisplayMedia()
  }

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            Therreto
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-emerald-500 mr-2" />
              <span>{formatTime(elapsedTime)}</span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/therapist-dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit Session
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 bg-gray-900 relative">
          {/* Main video area */}
          <div className="relative h-full">
            {/* Remote video (client) */}
            <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover"></video>

            {/* Local video (therapist) - small overlay */}
            <div className="absolute bottom-4 right-4 w-1/4 max-w-[200px] aspect-video rounded-lg overflow-hidden border-2 border-white shadow-lg">
              <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
              {!isVideoOn && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/images/therapist-1.jpg" alt="Dr. Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>

            {/* Participant info */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Client" />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <span>Alex Johnson (Client)</span>
              </div>
            </div>

            {/* Controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${isMuted ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-gray-900"}`}
                  onClick={toggleMic}
                >
                  {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${!isVideoOn ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-gray-900"}`}
                  onClick={toggleVideo}
                >
                  {isVideoOn ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${isScreenSharing ? "bg-emerald-500 text-white hover:bg-emerald-600" : "bg-white text-gray-900"}`}
                  onClick={toggleScreenSharing}
                >
                  <ScreenShare className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white text-gray-900"
                  onClick={toggleFullScreen}
                >
                  {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-red-500 text-white hover:bg-red-600"
                  onClick={() => (window.location.href = "/therapist-dashboard")}
                >
                  <PhoneOff className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-96 bg-white border-l">
          <Tabs defaultValue="chat" onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="chat" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="participants" className="flex-1">
                <Users className="h-4 w-4 mr-2" />
                Participants
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex-1">
                <PenLine className="h-4 w-4 mr-2" />
                Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="p-0">
              <div className="flex flex-col h-[calc(100vh-12rem)]">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${message.sender === "You" ? "items-end" : "items-start"}`}
                    >
                      <div className="flex items-center mb-1">
                        <span className="text-xs text-gray-500">
                          {message.sender} • {message.time}
                        </span>
                      </div>
                      <div
                        className={`px-3 py-2 rounded-lg max-w-[80%] ${
                          message.sender === "You" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <form onSubmit={handleSendMessage} className="p-4">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type a message..."
                      className="min-h-[60px]"
                      value={newMessage}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit">Send</Button>
                  </div>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/images/therapist-1.jpg" alt="Dr. Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">You (Dr. Sarah Johnson)</p>
                      <p className="text-sm text-gray-500">Therapist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!isMuted && <Mic className="h-4 w-4 text-emerald-500" />}
                    {isVideoOn && <VideoIcon className="h-4 w-4 text-emerald-500" />}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Client" />
                      <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Alex Johnson</p>
                      <p className="text-sm text-gray-500">Client</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-emerald-500" />
                    <VideoIcon className="h-4 w-4 text-emerald-500" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Session Notes</CardTitle>
                  <CardDescription>These notes will be saved to the client's record</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter your session notes here..."
                    className="min-h-[300px]"
                    value={notes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
                  />
                  <div className="flex justify-end mt-4">
                    <Button>Save Notes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Client Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Name:</span>
                      <span>Alex Johnson</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Age:</span>
                      <span>9 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Primary Concern:</span>
                      <span>ADHD, Executive Function</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Session Type:</span>
                      <span>Initial Consultation</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="#">
                      <FileText className="h-4 w-4 mr-2" />
                      View Full Records
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
