// lib/auth.ts
// Authentication helper functions for Supabase

import { supabase, createServerClient } from './supabaseClient';
import { User } from '@supabase/supabase-js';

export interface AuthUser {
  id: string;
  email?: string;
  phone?: string;
  role?: 'investor' | 'business';
}

/**
 * Sign up a new user with email and password
 */
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

/**
 * Sign up a new user with phone and OTP
 */
export async function signUpWithPhone(phone: string) {
  const { data, error } = await supabase.auth.signUp({
    phone,
    options: {
      channel: 'sms',
    },
  });

  if (error) throw error;
  return data;
}

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

/**
 * Sign in with phone and OTP
 */
export async function signInWithPhone(phone: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
    options: {
      channel: 'sms',
    },
  });

  if (error) throw error;
  return data;
}

/**
 * Verify OTP for phone authentication
 */
export async function verifyOTP(phone: string, token: string) {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token,
    type: 'sms',
  });

  if (error) throw error;
  return data;
}

/**
 * Sign out the current user
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

/**
 * Get the current authenticated user
 */
export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

/**
 * Get the current session
 */
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Get user profile with role information
 */
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*, linked_investor_id, linked_business_id')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Create a profile record after signup
 */
export async function createProfile(
  userId: string,
  role: 'investor' | 'business',
  linkedId?: string
) {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      user_id: userId,
      role,
      linked_investor_id: role === 'investor' ? linkedId : null,
      linked_business_id: role === 'business' ? linkedId : null,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
}

/**
 * Reset password via email
 */
export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  });

  if (error) throw error;
  return data;
}

/**
 * Update user password
 */
export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;
  return data;
}

/**
 * Listen to auth state changes
 */
export function onAuthStateChange(callback: (user: User | null) => void) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user ?? null);
  });
}


