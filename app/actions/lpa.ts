"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import type { Database } from "@/lib/database.types"

export async function storeLpaSelection(formData: FormData) {
  const lpaType = formData.get("lpa_type") as string

  // Store in cookies temporarily (will be moved to database after signup)
  cookies().set("lpa_type", lpaType)

  redirect("/start/lpa/age")
}

export async function storeDonorLocation(formData: FormData) {
  const donorLocation = formData.get("donor_location") as string

  // Store in cookies temporarily (will be moved to database after signup)
  cookies().set("donor_location", donorLocation)

  redirect("/start/lpa/summary")
}

export async function createLpaApplication(userId: string) {
  const supabase = createServerActionClient<Database>({ cookies })

  const lpaType = cookies().get("lpa_type")?.value
  const donorLocation = cookies().get("donor_location")?.value

  if (!lpaType || !donorLocation) {
    return { error: "Missing LPA information" }
  }

  const { error } = await supabase.from("lpa_applications").insert({
    user_id: userId,
    lpa_type: lpaType,
    donor_location: donorLocation,
    status: "started",
  })

  if (error) {
    return { error: error.message }
  }

  // Clear the cookies after storing the data
  cookies().delete("lpa_type")
  cookies().delete("donor_location")

  return { success: true }
}

