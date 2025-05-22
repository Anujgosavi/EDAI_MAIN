"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

// Sample therapist data
const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "ADHD & Executive Function Specialist",
    image: "/images/therapist-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Dyslexia & Reading Specialist",
    image: "/images/therapist-2.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialization: "Dyscalculia & Math Learning Specialist",
    image: "/images/therapist-3.jpg",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Dysgraphia & Writing Skills Specialist",
    image: "/images/therapist-4.jpg",
  },
  {
    id: 5,
    name: "Dr. Emily Rodriguez",
    specialization: "Behavioral & Emotional Support Specialist",
    image: "/images/therapist-5.jpg",
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialization: "Comprehensive Learning Assessment Specialist",
    image: "/images/therapist-6.jpg",
  },
]

interface BookingPageProps {
  params: { id: string }
}

export default function BookingPage({ params }: BookingPageProps) {
  const router = useRouter()
  const therapistId = Number.parseInt(params.id)
  const therapist = therapists.find((t) => t.id === therapistId) || therapists[0]

  const [selectedDate, setSelectedDate] = useState("May 22, 2025")
  const [selectedTime, setSelectedTime] = useState("3:00 PM")
  const [sessionType, setSessionType] = useState("online")
  const [appointmentType, setAppointmentType] = useState("initial")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create new appointment
    const newAppointment = {
      id: Date.now(),
      therapist: therapist.name,
      specialization: therapist.specialization,
      date: selectedDate,
      time: `${selectedTime} - ${getEndTime(selectedTime)}`,
      type: appointmentType === "initial" ? "Initial Consultation" : "Follow-up Session",
      status: "Upcoming",
    }

    // Get existing appointments from localStorage
    const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]")

    // Add new appointment
    const updatedAppointments = [...existingAppointments, newAppointment]

    // Save to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

    // Navigate to confirmation page
    router.push("/booking/confirmation")
  }

  // Helper function to calculate end time
  const getEndTime = (startTime: string) => {
    const [hours, minutes] = startTime.split(":")
    const hourNum = Number.parseInt(hours)
    const isPM = startTime.includes("PM")

    let endHour = hourNum + 1
    if (endHour === 12 && !isPM) return "1:00 PM"
    if (endHour === 12 && isPM) return "1:00 PM"
    if (endHour > 12) endHour -= 12

    return `${endHour}:00 ${isPM ? "PM" : "AM"}`
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link href="/therapists" className="text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-emerald-600">Book Appointment</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  {therapist.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{therapist.name}</h2>
                  <p className="text-emerald-500">{therapist.specialization}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">1. Select Appointment Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="border rounded-lg p-4 hover:border-emerald-500 cursor-pointer">
                      <input
                        type="radio"
                        name="appointment-type"
                        value="initial"
                        checked={appointmentType === "initial"}
                        onChange={() => setAppointmentType("initial")}
                        className="mr-2"
                      />
                      <span className="font-medium">Initial Consultation</span>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        60-minute comprehensive assessment to understand your child's needs.
                      </p>
                    </label>
                    <label className="border rounded-lg p-4 hover:border-emerald-500 cursor-pointer">
                      <input
                        type="radio"
                        name="appointment-type"
                        value="follow-up"
                        checked={appointmentType === "follow-up"}
                        onChange={() => setAppointmentType("follow-up")}
                        className="mr-2"
                      />
                      <span className="font-medium">Follow-up Session</span>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        45-minute session to continue ongoing treatment and track progress.
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">2. Select Date & Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="May 22, 2025">Today - May 22, 2025</option>
                        <option value="May 23, 2025">Tomorrow - May 23, 2025</option>
                        <option value="May 24, 2025">Friday - May 24, 2025</option>
                        <option value="May 25, 2025">Saturday - May 25, 2025</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">3. Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">4. Session Format</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="border rounded-lg p-4 hover:border-emerald-500 cursor-pointer">
                      <input
                        type="radio"
                        name="session-format"
                        value="online"
                        checked={sessionType === "online"}
                        onChange={() => setSessionType("online")}
                        className="mr-2"
                      />
                      <span className="font-medium">Online Session</span>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Connect via secure video call. You'll receive a link via email.
                      </p>
                    </label>
                    <label className="border rounded-lg p-4 hover:border-emerald-500 cursor-pointer">
                      <input
                        type="radio"
                        name="session-format"
                        value="in-person"
                        checked={sessionType === "in-person"}
                        onChange={() => setSessionType("in-person")}
                        className="mr-2"
                      />
                      <span className="font-medium">In-Person Session</span>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Visit our clinic at Vishwakarma Institute, Pune.
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Any specific concerns or questions you'd like to discuss..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
