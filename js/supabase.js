// SUPABASE STUFF

// this is horrendous - we'll sort it out later
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk4ODk1MSwiZXhwIjoxOTU5NTY0OTUxfQ.G8U18_64dtNMktbAawqijsvEYZQh-b9zijQEmBwu7VM'
const SUPABASE_URL = 'https://dlseueskfqnglzcjbids.supabase.co'
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
