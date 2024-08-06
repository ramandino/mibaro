import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://fhayskinwatcghlakkmv.supabase.co" 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYXlza2lud2F0Y2dobGFra212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1ODUwNzYsImV4cCI6MjAzNzE2MTA3Nn0.cvdphUCwsjNhKCS6thX-V65TVs0iHwPP_zgX5iDBPvM"

const supabase = createClient(supabaseUrl,supabaseKey)

export default supabase