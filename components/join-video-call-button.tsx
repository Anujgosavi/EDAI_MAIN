"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"
import { useRouter } from "next/navigation"

interface JoinVideoCallButtonProps {
  isTherapist?: boolean
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function JoinVideoCallButton({
  isTherapist = false,
  className = "",
  variant = "default",
}: JoinVideoCallButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleJoinCall = () => {
    setIsLoading(true)
    // In a real app, you would connect to a signaling server here
    // For demo purposes, we're just redirecting to the appropriate page
    setTimeout(() => {
      const route = isTherapist ? "/therapist-dashboard/video-call" : "/video-call"
      router.push(route)
    }, 1000)
  }

  return (
    <Button onClick={handleJoinCall} className={className} variant={variant} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Connecting...
        </div>
      ) : (
        <>
          <Video className="h-4 w-4 mr-2" />
          Join Video Call
        </>
      )}
    </Button>
  )
}
