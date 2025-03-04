"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, FileText, User } from "lucide-react"
import LogoutButton from "./logout-button"

type LpaApplication = {
  id: string
  lpa_type: string
  donor_location: string
  status: string
  created_at: string
}

export default function DashboardPage() {
  // Mock data for preview
  const [user] = useState({
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
  })

  const [lpaApplications] = useState<LpaApplication[]>([
    {
      id: "1",
      lpa_type: "both",
      donor_location: "england",
      status: "draft",
      created_at: new Date().toISOString(),
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              LPA Online
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Help
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">
                  {user.first_name} {user.last_name}
                </span>
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to your dashboard</h1>
          <p className="text-gray-600 mt-2">Track and manage your LPA applications here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Your LPAs</CardTitle>
              <CardDescription>Manage your applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{lpaApplications.length}</div>
              <p className="text-sm text-gray-500">Applications in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Registration Status</CardTitle>
              <CardDescription>Track your registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">
                {lpaApplications.filter((app) => app.status === "pending_registration").length}
              </div>
              <p className="text-sm text-gray-500">Awaiting registration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Completed LPAs</CardTitle>
              <CardDescription>View registered LPAs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {lpaApplications.filter((app) => app.status === "registered").length}
              </div>
              <p className="text-sm text-gray-500">Fully registered LPAs</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your LPA Applications</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {lpaApplications.length > 0 ? (
              lpaApplications.map((app) => (
                <div key={app.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {app.lpa_type === "property" && "Property and Financial Affairs LPA"}
                        {app.lpa_type === "health" && "Health and Welfare LPA"}
                        {app.lpa_type === "both" && "Property & Financial Affairs and Health & Welfare LPA"}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Started on {new Date(app.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-4 w-4" />
                      <span>
                        {app.status === "draft" && "In progress"}
                        {app.status === "pending_registration" && "Awaiting registration"}
                        {app.status === "registered" && "Registered"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Continue
                    </Button>
                    <Button size="sm" variant="outline">
                      View details
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                You don't have any LPA applications yet.{" "}
                <Link href="/start/lpa" className="text-blue-600 hover:underline">
                  Start one now
                </Link>
                .
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Next Steps</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Create account</h3>
                  <p className="text-sm text-gray-500 mt-1">Your account has been created successfully.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Complete your LPA forms</h3>
                  <p className="text-sm text-gray-500 mt-1">Fill in all the required information for your LPAs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Print and sign</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Print your completed LPA forms and get them signed by all parties.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Send for registration</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Send your signed forms to the Office of the Public Guardian for registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

