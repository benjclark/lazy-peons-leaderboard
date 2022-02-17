// SUPABASE STUFF

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
