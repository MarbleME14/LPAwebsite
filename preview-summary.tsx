"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, FileText, AlertCircle, Phone, ArrowLeft } from "lucide-react"

export default function PreviewSummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-900">
              LPA Online
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                4
              </div>
              <span className="font-medium text-indigo-900">Summary</span>
            </div>
            <span className="text-sm text-gray-500">Step 4 of 4</span>
          </div>
          <div className="relative w-full h-3 bg-indigo-100 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <Card className="p-8 shadow-xl bg-white border-indigo-100 rounded-xl">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-indigo-900">Your LPA Summary</h1>
              <p className="text-gray-600 mt-2">Based on your answers, here's a summary of your LPA requirements.</p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-indigo-100 rounded-xl p-6 bg-gradient-to-r from-indigo-50/50 to-blue-50/50">
                <h2 className="font-semibold text-lg text-indigo-900">LPA Type</h2>
                <div className="flex items-center mt-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>Both Property & Financial Affairs and Health & Welfare</span>
                </div>
              </div>

              <div className="border-2 border-indigo-100 rounded-xl p-6 bg-gradient-to-r from-indigo-50/50 to-blue-50/50">
                <h2 className="font-semibold text-lg text-indigo-900">Age Verification</h2>
                <div className="flex items-center mt-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>Over 18 years old</span>
                </div>
              </div>

              <div className="border-2 border-indigo-100 rounded-xl p-6 bg-gradient-to-r from-indigo-50/50 to-blue-50/50">
                <h2 className="font-semibold text-lg text-indigo-900">Location</h2>
                <div className="flex items-center mt-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>England or Wales</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-100 p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-indigo-900">What happens next</h2>
                  <p className="text-gray-600 mt-2">To create your LPA, you'll need to:</p>
                  <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
                    <li>Create an account or sign in</li>
                    <li>Provide details about the donor (the person the LPA is for)</li>
                    <li>Choose your attorneys (the people who will make decisions)</li>
                    <li>Add any preferences or instructions</li>
                    <li>Pay the service fee</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 flex gap-4">
              <Button
                variant="outline"
                className="py-6 text-lg rounded-xl border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 w-1/5 flex items-center justify-center"
              >
                <ArrowLeft className="h-16 w-16" />
              </Button>
              <Button className="py-6 text-lg rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-4/5">
                Create Account & Continue
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">Continuing automatically in 10 seconds...</p>
          </div>
        </Card>

        {/* Help Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl border-2 border-indigo-100 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Phone className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-indigo-900">Need help?</h3>
                <p className="text-gray-600 mt-1">Our expert team is here to assist you.</p>
                <p className="text-indigo-600 font-medium mt-2">Call us on 0800 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

