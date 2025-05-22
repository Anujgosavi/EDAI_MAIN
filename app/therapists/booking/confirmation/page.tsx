"use client"

import Link from "next/link"
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function ConfirmationPage() {
  const [appointment, setAppointment] = useState(null)

  useEffect(() => {
    // Get appointments from localStorage
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")

    // Get the most recent appointment (last one in the array)
    if (appointments.length > 0) {
      setAppointment(appointments[appointments.length - 1])
    }
  }, [])

  if (!appointment) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-emerald-600">Booking Confirmation</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">No appointment information found.</p>
            <Link
              href="/therapists"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium"
            >
              Book an Appointment
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-emerald-600">Booking Confirmation</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
            </div>

            <h2 className="text-2xl font-bold mb-4">Appointment Confirmed!</h2>
            <p className="text-gray-600 mb-8">
              Your appointment with {appointment.therapist} has been successfully scheduled. We've sent a confirmation
              email with all the details.
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  {appointment.therapist
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <h3 className="font-bold">{appointment.therapist}</h3>
                  <p className="text-emerald-500 text-sm">{appointment.specialization}</p>
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600">{appointment.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-gray-600">{appointment.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Video className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Session Type</p>
                    <p className="text-gray-600">{appointment.type}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/video-call"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                <Video className="h-5 w-5 mr-2" />
                Join Video Call
              </Link>
              <Link
                href="/appointments"
                className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View All Appointments
              </Link>
              <Link
                href="/therapists"
                className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Back to Therapists
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
