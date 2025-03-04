"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MapPin, AlertCircle, ExternalLink, ArrowLeft } from "lucide-react"

export default function WherePage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Handle option selection and automatic navigation
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)

    // Only navigate automatically for valid options
    if (value === "england" || value === "outside") {
      // Automatically navigate to the next page after a brief delay
      setTimeout(() => {
        router.push("/start/lpa/summary")
      }, 300) // Short delay for visual feedback
    }
  }

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
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <span className="font-medium text-indigo-900">Location</span>
            </div>
            <span className="text-sm text-gray-500">Step 3 of 4</span>
          </div>
          <Progress
            value={75}
            className="h-3 bg-indigo-100 rounded-full"
            indicatorClassName="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
          />
        </div>

        <Card className="p-8 shadow-xl bg-white border-indigo-100 rounded-xl">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-indigo-900">Where does the donor live?</h1>
              <p className="text-gray-600 mt-2">
                The donor is the person the LPA is for. Different laws apply in different parts of the UK.
              </p>
            </div>

            <RadioGroup value={selectedOption || ""} onValueChange={handleOptionSelect} className="space-y-4">
              <div
                className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                  selectedOption === "england"
                    ? "border-indigo-600 bg-gradient-to-r from-indigo-50 to-blue-50"
                    : "border-gray-200 hover:border-indigo-200 bg-white"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="england" id="england" />
                  <Label htmlFor="england" className="text-xl font-medium text-indigo-900">
                    England or Wales
                  </Label>
                </div>
              </div>

              <div
                className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                  selectedOption === "scotland"
                    ? "border-amber-600 bg-amber-50"
                    : "border-gray-200 hover:border-amber-200 bg-white"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="scotland" id="scotland" />
                    <Label htmlFor="scotland" className="text-xl font-medium text-gray-900">
                      Scotland
                    </Label>
                  </div>
                </div>
                {selectedOption === "scotland" && (
                  <div className="mt-4 ml-8">
                    <div className="flex items-start space-x-3 bg-amber-100 p-4 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-amber-800 font-medium">Different System in Scotland</p>
                        <p className="text-amber-700 mt-1">
                          In Scotland, the equivalent of an LPA is called a Power of Attorney (PoA). Our service
                          currently only covers England and Wales.
                        </p>
                        <Link href="#" className="inline-flex items-center mt-2 text-amber-700 hover:text-amber-800">
                          Visit the Office of the Public Guardian Scotland
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                  selectedOption === "northern"
                    ? "border-amber-600 bg-amber-50"
                    : "border-gray-200 hover:border-amber-200 bg-white"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="northern" id="northern" />
                    <Label htmlFor="northern" className="text-xl font-medium text-gray-900">
                      Northern Ireland
                    </Label>
                  </div>
                </div>
                {selectedOption === "northern" && (
                  <div className="mt-4 ml-8">
                    <div className="flex items-start space-x-3 bg-amber-100 p-4 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-amber-800 font-medium">Different System in Northern Ireland</p>
                        <p className="text-amber-700 mt-1">
                          In Northern Ireland, the equivalent of an LPA is called an Enduring Power of Attorney (EPA).
                          Our service currently only covers England and Wales.
                        </p>
                        <Link href="#" className="inline-flex items-center mt-2 text-amber-700 hover:text-amber-800">
                          Visit the Office of Care and Protection Northern Ireland
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`border-2 rounded-xl p-6 transition-all duration-200 ${
                  selectedOption === "outside"
                    ? "border-indigo-600 bg-gradient-to-r from-indigo-50 to-blue-50"
                    : "border-gray-200 hover:border-indigo-200 bg-white"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="outside" id="outside" />
                    <Label htmlFor="outside" className="text-xl font-medium text-indigo-900">
                      Outside the UK
                    </Label>
                  </div>
                </div>
                {selectedOption === "outside" && (
                  <div className="mt-4 ml-8">
                    <div className="flex items-start space-x-3 bg-indigo-100 p-4 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-indigo-600 mt-0.5" />
                      <div>
                        <p className="text-indigo-900 font-medium">International Considerations</p>
                        <p className="text-indigo-700 mt-1">
                          If the donor lives outside the UK, they may still be able to make an LPA if they have assets
                          in England or Wales, or plan to return to live there. However, there may be complications.
                        </p>
                        <Link href="#" className="inline-flex items-center mt-2 text-indigo-700 hover:text-indigo-800">
                          Contact our support team for guidance
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="pt-6 flex gap-4">
              <Button
                onClick={() => router.push("/start/lpa/age")}
                variant="outline"
                className="py-6 text-lg rounded-xl border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 w-1/5 flex items-center justify-center"
              >
                <ArrowLeft className="h-16 w-16" />
              </Button>
              <Button
                onClick={() => router.push("/start/lpa/summary")}
                disabled={!selectedOption || selectedOption === "scotland" || selectedOption === "northern"}
                className={`py-6 text-lg rounded-xl transition-all duration-300 w-4/5 ${
                  !selectedOption || selectedOption === "scotland" || selectedOption === "northern"
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                Continue
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? <span className="text-indigo-600 font-medium">Call us on 0800 123 4567</span>
          </p>
        </div>
      </main>
    </div>
  )
}

