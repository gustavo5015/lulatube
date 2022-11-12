import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://qxgixagbsmzhwnovpolr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Z2l4YWdic216aHdub3Zwb2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjE1MzYsImV4cCI6MTk4MzgzNzUzNn0.ioVSubjDlhk-75m2iGRSNGnBvYUfIg7E3EzOvQsYO_Y"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
            .select("*")
            
        }
    }
}