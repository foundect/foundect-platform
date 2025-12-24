// lib/db.ts
// Database helper functions for Supabase

import { supabase, createServerClient } from './supabaseClient';

/**
 * Database operations for Investors
 */
export const investorDB = {
  /**
   * Create a new investor record
   */
  async create(data: {
    full_name: string;
    email: string;
    phone: string;
    country_code?: string;
    [key: string]: any;
  }) {
    const { data: investor, error } = await supabase
      .from('investors')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return investor;
  },

  /**
   * Get investor by ID
   */
  async getById(id: string) {
    const { data, error } = await supabase
      .from('investors')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * Get investor by email
   */
  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('investors')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
    return data;
  },

  /**
   * Update investor record
   */
  async update(id: string, updates: Record<string, any>) {
    const { data, error } = await supabase
      .from('investors')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * Mark phone as verified
   */
  async verifyPhone(id: string) {
    return this.update(id, { phone_verified: true });
  },
};

/**
 * Database operations for Businesses
 */
export const businessDB = {
  /**
   * Create a new business record
   */
  async create(data: {
    business_name: string;
    business_email: string;
    business_phone: string;
    country_code?: string;
    [key: string]: any;
  }) {
    const { data: business, error } = await supabase
      .from('businesses')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return business;
  },

  /**
   * Get business by ID
   */
  async getById(id: string) {
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * Get business by email
   */
  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('business_email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  /**
   * Update business record
   */
  async update(id: string, updates: Record<string, any>) {
    const { data, error } = await supabase
      .from('businesses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

/**
 * Database operations for Profiles
 */
export const profileDB = {
  /**
   * Get profile by user ID
   */
  async getByUserId(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  /**
   * Create or update profile
   */
  async upsert(data: {
    user_id: string;
    role: 'investor' | 'business';
    linked_investor_id?: string;
    linked_business_id?: string;
  }) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .upsert(data, { onConflict: 'user_id' })
      .select()
      .single();

    if (error) throw error;
    return profile;
  },
};

/**
 * Server-side database operations (uses service role key)
 * Use these in API routes for admin operations
 */
export const serverDB = {
  /**
   * Get all investors (admin only)
   */
  async getAllInvestors() {
    const client = createServerClient();
    const { data, error } = await client
      .from('investors')
      .select('*');

    if (error) throw error;
    return data;
  },

  /**
   * Get all businesses (admin only)
   */
  async getAllBusinesses() {
    const client = createServerClient();
    const { data, error } = await client
      .from('businesses')
      .select('*');

    if (error) throw error;
    return data;
  },
};


