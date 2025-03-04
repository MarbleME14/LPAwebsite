"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Calendar, Phone, ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

export default function PreviewAgePage() {
  const [selectedOption, setSelectedOption] = useState<string | null>("yes")

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <span className="font-medium text-indigo-900">Age Verification</span>
            </div>
            <span className="text-sm text-gray-500">Step 2 of 4</span>
          </div>
          <div className="relative w-full h-3 bg-indigo-100 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
              style={{ width: "50%" }}
            />
          </div>
        </div>

        <div className="space-y-8">
          {/* Title Section */}
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-900 mb-3">Are you over 18 years old?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You must be at least 18 years old to create a Lasting Power of Attorney.
            </p>
          </div>

          {/* Options */}
          <RadioGroup value={selectedOption || ""} className="space-y-6">
            {/* Yes Option */}
            <div
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                selectedOption === "yes"
                  ? "ring-2 ring-green-600 bg-gradient-to-r from-green-50 to-emerald-50"
                  : "border-2 border-gray-200 hover:border-green-200 bg-white"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedOption === "yes" ? "bg-green-600 text-white" : "bg-green-100 text-green-600"
                    }`}
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1 flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-xl font-semibold text-gray-900">
                      Yes, I am over 18 years old
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* No Option */}
            <div
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                selectedOption === "no"
                  ? "ring-2 ring-red-600 bg-gradient-to-r from-red-50 to-rose-50"
                  : "border-2 border-gray-200 hover:border-red-200 bg-white"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedOption === "no" ? "bg-red-600 text-white" : "bg-red-100 text-red-600"
                    }`}
                  >
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1 flex items-center space-x-3">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-xl font-semibold text-gray-900">
                      No, I am under 18 years old
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>

          {/* Navigation Buttons */}
          <div className="pt-6 flex gap-4">
            <Button
              variant="outline"
              className="py-6 text-lg rounded-xl border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 w-1/5 flex items-center justify-center"
            >
              <ArrowLeft className="h-16 w-16" />
            </Button>
            <Button className="py-6 text-lg rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-4/5">
              Continue
            </Button>
          </div>
        </div>

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

