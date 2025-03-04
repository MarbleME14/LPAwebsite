"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, PoundSterlingIcon as Pound, Heart, Handshake, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function PreviewLpaType() {
  const [selectedOption, setSelectedOption] = useState<string | null>("both")

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
                1
              </div>
              <span className="font-medium text-indigo-900">Choose LPA Type</span>
            </div>
            <span className="text-sm text-gray-500">Step 1 of 4</span>
          </div>
          <div className="relative w-full h-3 bg-indigo-100 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
              style={{ width: "25%" }}
            />
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-indigo-900 mb-3">Choose Your LPA Type</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A Lasting Power of Attorney lets you choose trusted people to make decisions for you. Select the type that
            best suits your needs.
          </p>
        </div>

        {/* Options */}
        <RadioGroup value={selectedOption || ""} className="space-y-6">
          {/* Property & Finance */}
          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
              selectedOption === "property"
                ? "ring-2 ring-indigo-600 bg-white"
                : "border border-indigo-100 bg-white/80 hover:border-indigo-200"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedOption === "property" ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <Pound className="h-6 w-6" />
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="property" id="property" />
                  <Label htmlFor="property" className="text-xl font-semibold text-indigo-900 ml-3">
                    Property and Finance
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Health & Welfare */}
          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
              selectedOption === "health"
                ? "ring-2 ring-indigo-600 bg-white"
                : "border border-indigo-100 bg-white/80 hover:border-indigo-200"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedOption === "health" ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <Heart className="h-6 w-6" />
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="health" id="health" />
                  <Label htmlFor="health" className="text-xl font-semibold text-indigo-900 ml-3">
                    Health and Welfare
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Both Types */}
          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
              selectedOption === "both"
                ? "ring-2 ring-indigo-600 bg-white"
                : "border border-indigo-100 bg-white/80 hover:border-indigo-200"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedOption === "both" ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <Handshake className="h-6 w-6" />
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="text-xl font-semibold text-indigo-900 ml-3">
                    Both of These
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                      Recommended
                    </span>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>

        {/* Navigation Buttons */}
        <div className="mt-8 flex gap-4">
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
      </main>
    </div>
  )
}

