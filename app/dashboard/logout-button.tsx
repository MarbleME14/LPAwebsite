"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    // In a real app, this would call the Supabase signOut method
    router.push("/")
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-600 hover:text-gray-900">
      Logout
    </Button>
  )
}

