"use client";

import Link from "next/link";
import {
  Search,
  Bell,
  Filter,
  ChevronDown,
  Plus,
  Calendar,
  MessageSquare,
  FileText,
  ArrowUpDown,
  MoreHorizontal,
} from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Therapist Dashboard Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-emerald-500 mr-8"
              >
                Therreto
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/therapist/dashboard"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Dashboard
                </Link>
                <Link
                  href="/therapist/clients"
                  className="text-emerald-500 font-medium"
                >
                  Clients
                </Link>
                <Link
                  href="/therapist/calendar"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Calendar
                </Link>
                <Link
                  href="/therapist/resources"
                  className="text-gray-600 hover:text-emerald-500"
                >
                  Resources
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-emerald-500 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
                  <span className="font-medium text-emerald-700">DR</span>
                </div>
                <span className="hidden md:inline text-sm font-medium">
                  Dr. Rebecca Chen
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Clients</h1>
            <p className="text-gray-600">
              Manage and view all your client information
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search clients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full sm:w-64"
              />
            </div>
            <button className="inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              <Plus className="h-4 w-4 mr-2" />
              Add New Client
            </button>
          </div>
        </div>

        {/* Client Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">
                Filter by:
              </span>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <span>All Clients</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">
                Status:
              </span>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <span>All Statuses</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">
                Diagnosis:
              </span>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <span>All Types</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center ml-auto">
              <button className="inline-flex items-center px-3 py-1.5 text-sm text-emerald-500 hover:text-emerald-600">
                <Filter className="mr-1 h-4 w-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Client List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Client</span>
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Diagnosis</span>
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Status</span>
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Last Session</span>
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <span>Next Session</span>
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">JD</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Jake Davis
                        </div>
                        <div className="text-sm text-gray-500">Age 9</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800">
                      ADHD
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 16, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 23, 2025 (Today)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">SL</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Sarah Lee
                        </div>
                        <div className="text-sm text-gray-500">Age 11</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Dyslexia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 16, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 23, 2025 (Today)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">MR</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Michael Rodriguez
                        </div>
                        <div className="text-sm text-gray-500">Age 8</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                      Dyscalculia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Assessment
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 16, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 23, 2025 (Today)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">ET</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Emma Thompson
                        </div>
                        <div className="text-sm text-gray-500">Age 8</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-800">
                      Dysgraphia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Assessment
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 20, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 27, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">AW</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Alex Wilson
                        </div>
                        <div className="text-sm text-gray-500">Age 10</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800">
                      ADHD
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Assessment
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 18, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 25, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-emerald-700">OL</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Olivia Liu
                        </div>
                        <div className="text-sm text-gray-500">Age 12</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Dyslexia
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 15, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 29, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-emerald-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">6</span> of{" "}
                  <span className="font-medium">24</span> clients
                </p>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-emerald-50 text-sm font-medium text-emerald-600 hover:bg-emerald-100">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    4
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
