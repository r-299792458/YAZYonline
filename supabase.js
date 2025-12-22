import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
    "https://gjfgfpiwchmjbakxiabb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZmdmcGl3Y2htamJha3hpYWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNzY2MzIsImV4cCI6MjA4MTk1MjYzMn0.47bU2BIIf4-XV2cOqw_FCkBF8APNVGQH0Dkh_mSxYoY"
);