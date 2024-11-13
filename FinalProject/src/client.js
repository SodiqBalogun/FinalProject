import { createClient } from '@supabase/supabase-js';

const URL = "https://xrtxnkctaaghravfbipo.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhydHhua2N0YWFnaHJhdmZiaXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjM0NjAsImV4cCI6MjA0NzAzOTQ2MH0.I7fJ8PdBznsQXrAbLOQqj3dCY_NYoubJsEPFPAVbRcg";

export const supabase = createClient(URL, API_KEY);