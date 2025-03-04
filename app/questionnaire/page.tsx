import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QuestionnaireForm } from "./questionnaire-form"

export default function QuestionnairePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">DiaryQuest</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Tell us about your business</CardTitle>
            <CardDescription>Help us customize your experience by answering a few questions</CardDescription>
          </CardHeader>
          <CardContent>
            <QuestionnaireForm />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

