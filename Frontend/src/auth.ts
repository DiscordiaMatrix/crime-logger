import { supabase } from './supabaseClient'

export async function loginWithEmail(email: string) {
  const { error } = await supabase.auth.signInWithOtp({ 
    email,
    options: {
      shouldCreateUser: false
    }
  })
  if (error) throw error
}

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}