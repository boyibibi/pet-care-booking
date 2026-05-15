import { createClient } from "@supabase/supabase-js";
import type { Booking, BookingStatus } from "@/types/booking";

type BookingInsert = {
  customer_name: string;
  phone: string;
  pet_name?: string | null;
  pet_type: string;
  service: string;
  preferred_time?: string | null;
  note?: string | null;
  status?: BookingStatus;
};

type Database = {
  public: {
    Tables: {
      bookings: {
        Row: Booking;
        Insert: BookingInsert;
        Update: Partial<Booking>;
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {
      booking_status: BookingStatus;
    };
    CompositeTypes: {};
  };
};

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
