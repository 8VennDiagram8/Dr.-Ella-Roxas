-- =========================================================================
-- SMILES DENTAL HUB - DR. JOWELA ELAINE E. ROXAS, DMD
-- Supabase Database Schema for Online Appointments & Inquiries
-- =========================================================================

-- Create extension for UUID generation if not already active
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: appointments
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    is_first_visit BOOLEAN DEFAULT true,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rescheduled', 'cancelled', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexing for quick lookup
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_email ON public.appointments(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous users to insert new appointment requests
CREATE POLICY "Allow public insert of appointments" 
ON public.appointments 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only authenticated staff / service role can view and update appointments
CREATE POLICY "Allow service role and authenticated staff to select appointments" 
ON public.appointments 
FOR SELECT 
TO service_role, authenticated
USING (true);

CREATE POLICY "Allow service role and authenticated staff to update appointments" 
ON public.appointments 
FOR UPDATE 
TO service_role, authenticated
USING (true);

-- Table for contact inquiries (optional direct inquiries)
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert of inquiries" 
ON public.contact_inquiries 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);
