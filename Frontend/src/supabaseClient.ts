import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_KEY;

if (typeof supabaseUrl === 'undefined' || typeof supabaseAnonKey === 'undefined') {
    throw new Error('Supabase URL or Anon Key is undefined. Please check your configuration. Values are ' + supabaseUrl + ' and ' + supabaseAnonKey + ' respectively.   ');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);