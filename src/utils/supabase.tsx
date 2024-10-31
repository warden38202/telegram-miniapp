import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlysxpbwlzemmqmxietm.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseXN4cGJ3bHplbW1xbXhpZXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMjI4NDEsImV4cCI6MjA0NTU5ODg0MX0.7HR2sIcOGbQoC4XLWc_mqNPW_LmyGHqwYYtMkucvUxM";
    
export const supabase = createClient(supabaseUrl, supabaseAnonKey);