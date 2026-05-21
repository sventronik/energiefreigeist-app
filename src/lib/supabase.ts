import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      topics: {
        Row: {
          id: number
          slug: string
          title: string
          category: string
          teaser: string
          content: string | null
          level_required: number
          icon: string
          sort_order: number
          created_at: string
        }
      }
    }
  }
}
