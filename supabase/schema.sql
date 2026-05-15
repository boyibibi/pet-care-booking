create extension if not exists "pgcrypto";

create type booking_status as enum (
  'pending',
  'confirmed',
  'completed',
  'cancelled'
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 1 and 30),
  phone text not null,
  pet_name text,
  pet_type text not null,
  service text not null,
  preferred_time text,
  note text,
  status booking_status not null default 'pending',
  created_at timestamptz not null default now()
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);

alter table public.bookings enable row level security;

drop policy if exists "No public direct access to bookings" on public.bookings;

-- The app writes and reads bookings through the Next.js server using SUPABASE_SERVICE_ROLE_KEY.
-- Do not expose the service role key in browser code.
