"use client"
import Link from "next/link"

const therapists = [
  { id: 1, name: "Dr. Jane Smith", specialization: "Speech Therapy" },
  { id: 2, name: "Dr. John Doe", specialization: "Occupational Therapy" },
  // Add more therapists as needed
]

export default function TherapistsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Therapists</h1>
      <ul className="space-y-4">
        {therapists.map((t) => (
          <li key={t.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-emerald-600">{t.specialization}</div>
            </div>
            <Link
              href={`/therapists/booking/${t.id}`}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded"
            >
              Book Now
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}