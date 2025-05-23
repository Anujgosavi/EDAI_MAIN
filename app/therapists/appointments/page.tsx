"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, Video } from "lucide-react";

// Sample appointment data
const initialAppointments = [
  {
    id: 1,
    therapist: "Dr. Sarah Johnson",
    specialization: "ADHD & Executive Function Specialist",
    date: "May 22, 2025",
    time: "3:00 PM - 4:00 PM",
    type: "Initial Consultation",
    status: "Upcoming",
  },
  {
    id: 2,
    therapist: "Dr. Michael Chen",
    specialization: "Dyslexia & Reading Specialist",
    date: "May 25, 2025",
    time: "10:00 AM - 11:00 AM",
    type: "Follow-up Session",
    status: "Upcoming",
  },
  {
    id: 3,
    therapist: "Dr. Priya Patel",
    specialization: "Dyscalculia & Math Learning Specialist",
    date: "May 18, 2025",
    time: "4:30 PM - 5:30 PM",
    type: "Initial Consultation",
    status: "Completed",
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming");

  // Load appointments from localStorage or use sample data
  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    } else {
      setAppointments(initialAppointments);
      localStorage.setItem("appointments", JSON.stringify(initialAppointments));
    }
  }, []);

  // Filter appointments based on active tab
  const filteredAppointments = appointments.filter(
    (appointment) =>
      (activeTab === "upcoming" && appointment.status === "Upcoming") ||
      (activeTab === "completed" && appointment.status === "Completed")
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-600">
              My Appointments
            </h1>
            <Link
              href="/"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "upcoming"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "completed"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        {/* Appointments list */}
        {filteredAppointments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No {activeTab} appointments found.
            </p>
            {activeTab === "upcoming" && (
              <Link
                href="/therapists"
                className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium"
              >
                Book an Appointment
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h2 className="text-xl font-bold mb-1">
                        {appointment.therapist}
                      </h2>
                      <p className="text-emerald-500 mb-4">
                        {appointment.specialization}
                      </p>
                    </div>
                    {appointment.status === "Upcoming" && (
                      <Link
                        href="/therapists/video-call"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center md:justify-start"
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Join Video Call
                      </Link>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
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

                  {appointment.status === "Upcoming" && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Reschedule
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-medium">
                        Cancel Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
