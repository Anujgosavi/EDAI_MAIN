"use client"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-600">Therreto</h1>
            <div className="flex items-center space-x-4">
              <Link href="/therapists" className="text-gray-600 hover:text-gray-900">
                Our Therapists
              </Link>
              <Link href="/appointments" className="text-gray-600 hover:text-gray-900">
                My Appointments
              </Link>
              <Link
                href="/therapists"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-emerald-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Support for Children with Learning Disabilities
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Connect with expert therapists who understand your child's unique needs and can provide personalized
              strategies for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/therapists"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Find a Therapist
              </Link>
              <Link
                href="/appointments"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium border border-white"
              >
                View My Appointments
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Find Your Specialist</h3>
                <p className="text-gray-600">
                  Browse our network of specialized therapists and find the perfect match for your child's specific
                  learning needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
                <p className="text-gray-600">
                  Schedule a convenient time for an online or in-person session with your chosen therapist.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Start Your Journey</h3>
                <p className="text-gray-600">
                  Connect with your therapist via our simple video conferencing tool and begin your child's path to
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Take the first step toward supporting your child's learning journey. Book an appointment with one of our
              specialized therapists today.
            </p>
            <Link
              href="/therapists"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-medium inline-block"
            >
              Find a Therapist
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-emerald-400">Therreto</h3>
              <p className="text-gray-400">Empowering children with learning disabilities</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/therapists" className="text-gray-300 hover:text-white">
                Our Therapists
              </Link>
              <Link href="/appointments" className="text-gray-300 hover:text-white">
                My Appointments
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Therreto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}