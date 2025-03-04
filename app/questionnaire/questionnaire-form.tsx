"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export function QuestionnaireForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Submit form and redirect to dashboard
      router.push("/dashboard")
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="space-y-6">
      <Progress value={(step / totalSteps) * 100} className="h-2" />

      <div className="text-sm text-gray-500 mb-4">
        Step {step} of {totalSteps}
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>What is the size of your business?</Label>
            <RadioGroup defaultValue="small">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small (1-10 employees)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium (11-50 employees)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Large (50+ employees)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="industry">What industry are you in?</Label>
            <Select>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>How many jobs do you typically schedule per week?</Label>
            <RadioGroup defaultValue="few">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="few" id="few-jobs" />
                <Label htmlFor="few-jobs">Less than 10</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate-jobs" />
                <Label htmlFor="moderate-jobs">10-50</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="many" id="many-jobs" />
                <Label htmlFor="many-jobs">More than 50</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>Do you currently use any job scheduling software?</Label>
            <RadioGroup defaultValue="no">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes-software" />
                <Label htmlFor="yes-software">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no-software" />
                <Label htmlFor="no-software">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>How many purchase orders do you create monthly?</Label>
            <RadioGroup defaultValue="few">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="few" id="few-pos" />
                <Label htmlFor="few-pos">Less than 20</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate-pos" />
                <Label htmlFor="moderate-pos">20-100</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="many" id="many-pos" />
                <Label htmlFor="many-pos">More than 100</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="additional-info">Any additional information you'd like to share?</Label>
            <Textarea id="additional-info" placeholder="Tell us more about your specific needs..." />
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={prevStep} disabled={step === 1}>
          Previous
        </Button>
        <Button type="button" onClick={nextStep}>
          {step === totalSteps ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  )
}

