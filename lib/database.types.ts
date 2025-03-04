export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          created_at?: string
        }
      }
      lpa_applications: {
        Row: {
          id: string
          user_id: string
          lpa_type: string
          donor_location: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lpa_type: string
          donor_location: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lpa_type?: string
          donor_location?: string
          status?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

