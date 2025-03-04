"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import type { Database } from "@/lib/database.types"

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("first-name") as string
  const lastName = formData.get("last-name") as string
  const phone = formData.get("phone") as string

  const supabase = createServerActionClient<Database>({ cookies })

  const { error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (authError) {
    return { error: authError.message }
  }

  // Get the user ID from the newly created auth account
  const { data: userData } = await supabase.auth.getUser()

  if (!userData?.user?.id) {
    return { error: "Failed to create user account" }
  }

  // Insert the user profile data
  const { error: profileError } = await supabase.from("users").insert({
    id: userData.user.id,
    email,
    first_name: firstName,
    last_name: lastName,
    phone,
  })

  if (profileError) {
    return { error: profileError.message }
  }

  // Store LPA application data if it exists in the session
  const lpaType = cookies().get("lpa_type")?.value
  const donorLocation = cookies().get("donor_location")?.value

  if (lpaType && donorLocation) {
    const { error: lpaError } = await supabase.from("lpa_applications").insert({
      user_id: userData.user.id,
      lpa_type: lpaType,
      donor_location: donorLocation,
      status: "started",
    })

    if (lpaError) {
      return { error: lpaError.message }
    }

    // Clear the cookies after storing the data
    cookies().delete("lpa_type")
    cookies().delete("donor_location")
  }

  redirect("/dashboard")
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const supabase = createServerActionClient<Database>({ cookies })

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/dashboard")
}

export async function signOut() {
  const supabase = createServerActionClient<Database>({ cookies })
  await supabase.auth.signOut()
  redirect("/")
}

