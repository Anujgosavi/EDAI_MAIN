"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react"

export default function VideoCallPage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const videoRef = useRef(null)

  // Initialize camera
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err)
        })
    }

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  // Toggle microphone
  const toggleMic = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const audioTrack = videoRef.current.srcObject.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled
        setIsMuted(!audioTrack.enabled)
      }
    }
  }

  // Toggle video
  const toggleVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const videoTrack = videoRef.current.srcObject.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled
        setIsVideoOn(videoTrack.enabled)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/appointments" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-emerald-600">Therapy Session</h1>
          </div>
          <div className="text-sm text-gray-500">Session with Dr. Sarah Johnson</div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
          {/* Video container */}
          <div className="relative bg-gray-900 aspect-video">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover mirror-mode"
              style={{ transform: "scaleX(-1)" }} // Mirror effect
            ></video>

            {/* Video off placeholder */}
            {!isVideoOn && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="h-24 w-24 rounded-full bg-emerald-500 flex items-center justify-center text-white text-3xl font-bold">
                  You
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              <button
                onClick={toggleMic}
                className={`rounded-full p-4 ${isMuted ? "bg-red-500 text-white" : "bg-white text-gray-900"} shadow-lg`}
              >
                {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
              </button>
              <button
                onClick={toggleVideo}
                className={`rounded-full p-4 ${
                  !isVideoOn ? "bg-red-500 text-white" : "bg-white text-gray-900"
                } shadow-lg`}
              >
                {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
              </button>
              <Link href="/appointments" className="rounded-full p-4 bg-red-500 text-white shadow-lg">
                <PhoneOff className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Session info */}
          <div className="p-4 border-t">
            <h2 className="font-bold text-lg">Initial Consultation</h2>
            <p className="text-gray-600">Wednesday, May 22, 2025 • 3:00 PM - 4:00 PM</p>
          </div>
        </div>

        <div className="mt-8 w-full max-w-3xl bg-white rounded-lg shadow-md p-4">
          <h2 className="font-bold text-lg mb-2">Session Notes</h2>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 min-h-[100px]"
            placeholder="Type your notes here..."
          ></textarea>
        </div>
      </main>
    </div>
  )
}
