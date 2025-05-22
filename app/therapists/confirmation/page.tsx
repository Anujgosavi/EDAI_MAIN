"use client"
import Link from "next/link"
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            Therreto
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-gray-700 hover:text-emerald-500">
              About
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-emerald-500">
              Services
            </Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-emerald-500">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-emerald-500">
              Testimonials
            </Link>
            <Link href="/therapists" className="text-emerald-500 font-medium">
              Therapists
            </Link>
          </nav>
          <Link
            href="/#get-started"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">Appointment Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Your appointment with Dr. Sarah Johnson has been successfully scheduled. We've sent a confirmation email
              with all the details.
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  SJ
                </div>
                <div className="text-left">
                  <h3 className="font-bold">Dr. Sarah Johnson</h3>
                  <p className="text-emerald-500 text-sm">ADHD & Executive Function Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Wednesday, May 22, 2025</p>
                    <p className="text-sm text-gray-600">3:00 PM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Video className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Online Session</p>
                    <p className="text-sm text-gray-600">Via secure video link</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Initial Consultation</p>
                    <p className="text-sm text-gray-600">60 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-bold text-lg">What's Next?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-500 font-medium text-sm">1</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Check your email</span> - You'll receive a detailed
                    confirmation with a link to join the online session.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-500 font-medium text-sm">2</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Complete pre-appointment forms</span> - Please fill out
                    the assessment forms sent to your email before your appointment.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-500 font-medium text-sm">3</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Join your session</span> - Click the video link in your
                    email 5 minutes before your scheduled time.
                  </p>
                </li>
              </ul>
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
                href="/therapists"
                className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Back to Therapists
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold text-lg mb-4">Need to make changes?</h3>
            <p className="text-gray-600 mb-4">
              If you need to reschedule or cancel your appointment, please do so at least 24 hours in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="text-emerald-500 hover:text-emerald-600 font-medium">
                Reschedule Appointment
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 font-medium">
                Cancel Appointment
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 font-medium">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-emerald-400 font-bold text-xl mb-4">Therreto</h3>
              <p className="text-gray-400 text-sm mb-4">Learning Disability Platform</p>
              <p className="text-gray-400 text-sm mb-4">
                Empowering children with learning disabilities through accurate diagnosis and personalized support
                strategies.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-gray-400 hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="text-gray-400 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="text-gray-400 hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Learning Disability Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Parents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Educators
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Research & Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-emerald-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+91 9766030221</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-emerald-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">support@therreto.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Therreto. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
