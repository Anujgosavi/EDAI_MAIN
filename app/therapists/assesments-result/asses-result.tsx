import Link from "next/link";
import {
  ChevronLeft,
  Download,
  Printer,
  Share2,
  FileText,
  BarChart2,
  CheckCircle,
  AlertTriangle,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function AssessmentResultsPage() {
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
                  className="text-gray-600 hover:text-emerald-500"
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
        <div className="mb-6">
          <Link
            href="/therapist/dashboard"
            className="inline-flex items-center text-emerald-500 hover:text-emerald-600 mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Assessment Results
              </h1>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-emerald-700">
                    AW
                  </span>
                </div>
                <span className="text-gray-600">
                  Alex Wilson • Age 10 • ADHD Assessment
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Assessment Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Assessment Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Client</h3>
                  <p className="font-medium">Alex Wilson</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Date of Birth
                  </h3>
                  <p>January 15, 2015 (Age 10)</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Assessment Type
                  </h3>
                  <p>ADHD Comprehensive Evaluation</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Assessment Date
                  </h3>
                  <p>May 18, 2025</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Completed By
                  </h3>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-emerald-700">
                        DR
                      </span>
                    </div>
                    <span>Dr. Rebecca Chen</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Needs Review
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Assessment Sources</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Parent Questionnaire</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Teacher Evaluation Form</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Behavioral Observation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Cognitive Assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Executive Function Tests</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Next Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-md mr-3">
                    <FileText className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Complete Assessment Report</h3>
                    <p className="text-sm text-gray-600">
                      Add your professional analysis and recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-md mr-3">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Schedule Follow-up Session</h3>
                    <p className="text-sm text-gray-600">
                      Review results with client and parents
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-md mr-3">
                    <BarChart2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Create Intervention Plan</h3>
                    <p className="text-sm text-gray-600">
                      Develop personalized strategies based on results
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 flex items-center justify-center">
                  <span>Complete Assessment</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Assessment Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">ADHD Assessment Results</h2>
                <span className="text-sm text-gray-500">
                  Completed on May 18, 2025
                </span>
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Overall Assessment</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Based on the comprehensive evaluation, Alex shows
                        significant symptoms consistent with ADHD, predominantly
                        inattentive presentation. Further clinical review is
                        recommended to confirm diagnosis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium mb-4">Attention & Focus</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Sustained Attention
                        </span>
                        <span className="text-sm font-medium">
                          Significant Challenge (85%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex demonstrates significant difficulty maintaining
                        attention on tasks, especially during activities
                        requiring sustained mental effort. He frequently loses
                        focus after 5-10 minutes.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Distractibility
                        </span>
                        <span className="text-sm font-medium">
                          Moderate Challenge (70%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex is easily distracted by external stimuli and
                        internal thoughts. Teacher reports indicate he often
                        misses instructions and needs frequent redirection in
                        the classroom.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Task Completion
                        </span>
                        <span className="text-sm font-medium">
                          Moderate Challenge (65%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex struggles to complete tasks and assignments,
                        particularly those requiring sustained mental effort. He
                        often leaves work unfinished or rushes through to
                        completion with errors.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">
                    Hyperactivity & Impulsivity
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Physical Restlessness
                        </span>
                        <span className="text-sm font-medium">
                          Moderate Challenge (60%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex shows moderate fidgeting and difficulty staying
                        seated for extended periods. He often taps his feet,
                        moves in his chair, or plays with objects during quiet
                        activities.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Impulsive Responses
                        </span>
                        <span className="text-sm font-medium">
                          Mild Challenge (40%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-emerald-500 h-2.5 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex occasionally blurts out answers before questions
                        are completed and may interrupt conversations, but this
                        behavior is less prominent than his attention
                        challenges.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Executive Function</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Organization
                        </span>
                        <span className="text-sm font-medium">
                          Significant Challenge (75%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex has significant difficulty organizing tasks and
                        activities. His backpack, desk, and work are often
                        disorganized, and he frequently misplaces necessary
                        materials.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Time Management
                        </span>
                        <span className="text-sm font-medium">
                          Significant Challenge (80%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex struggles significantly with time awareness and
                        management. He has difficulty estimating how long tasks
                        will take and often runs out of time on assignments and
                        tests.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Working Memory
                        </span>
                        <span className="text-sm font-medium">
                          Moderate Challenge (65%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Alex shows moderate difficulty holding information in
                        mind while performing tasks. He often forgets
                        instructions, especially multi-step directions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Strengths & Challenges</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-emerald-600 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-emerald-500 mr-2">•</div>
                      <span>Strong verbal communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-emerald-500 mr-2">•</div>
                      <span>Creative thinking and problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-emerald-500 mr-2">•</div>
                      <span>High curiosity and enthusiasm for learning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-emerald-500 mr-2">•</div>
                      <span>Strong visual-spatial reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-emerald-500 mr-2">•</div>
                      <span>Empathetic and caring toward peers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-yellow-600 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-yellow-500 mr-2">•</div>
                      <span>Maintaining sustained attention on tasks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-yellow-500 mr-2">•</div>
                      <span>Organization and time management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-yellow-500 mr-2">•</div>
                      <span>Following multi-step instructions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-yellow-500 mr-2">•</div>
                      <span>Completing tasks without supervision</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 text-yellow-500 mr-2">•</div>
                      <span>Managing emotional responses to frustration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">
                Preliminary Recommendations
              </h2>
              <p className="text-gray-600 mb-4">
                Based on the assessment results, the following preliminary
                recommendations are suggested. These will be refined in the
                final report after clinical review.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="font-medium">Educational Accommodations</h3>
                  <p className="text-sm text-gray-600">
                    Preferential seating, extended time for assignments and
                    tests, breaking down complex tasks into smaller steps, and
                    providing written instructions for reference.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="font-medium">Organizational Strategies</h3>
                  <p className="text-sm text-gray-600">
                    Implement visual schedules, checklists, and a consistent
                    organizational system for materials. Use color-coding for
                    subjects and a dedicated homework folder.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="font-medium">Attention Support</h3>
                  <p className="text-sm text-gray-600">
                    Use timers for task completion, incorporate movement breaks,
                    and implement the Pomodoro technique (25 minutes of work
                    followed by a 5-minute break).
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="font-medium">Parent Strategies</h3>
                  <p className="text-sm text-gray-600">
                    Establish consistent routines, provide clear expectations,
                    use visual reminders, and implement a positive reinforcement
                    system for completed tasks.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="font-medium">Further Evaluation</h3>
                  <p className="text-sm text-gray-600">
                    Consider a medical evaluation to discuss potential
                    medication options and rule out other contributing factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
