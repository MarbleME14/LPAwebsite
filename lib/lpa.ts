"use server"

import { cookies } from "next/headers"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { getSession } from "./auth"

export async function createLpaApplication(lpaType: string, donorLocation: string) {
  const session = await getSession()

  if (!session) {
    return { error: "Not authenticated" }
  }

  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )

  const { data, error } = await supabase
    .from("lpa_applications")
    .insert({
      user_id: session.user.id,
      lpa_type: lpaType,
      donor_location: donorLocation,
      status: "draft",
      created_at: new Date().toISOString(),
    })
    .select()

  if (error) {
    return { error: error.message }
  }

  return { success: true, data: data[0] }
}

export async function getLpaApplications() {
  const session = await getSession()

  if (!session) {
    return { error: "Not authenticated" }
  }

  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )

  const { data, error } = await supabase
    .from("lpa_applications")
    .select("*")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false })

  if (error) {
    return { error: error.message }
  }

  return { success: true, data }
}

