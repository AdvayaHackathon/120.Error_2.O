import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://rldrqubkpaxnxvlktlef.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZHJxdWJrcGF4bnh2bGt0bGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxOTkwODgsImV4cCI6MjA1OTc3NTA4OH0.fggs3DLG8YVgSaJ8AE5Opg-7S8uPJoo4YGd-_yq2X68';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});