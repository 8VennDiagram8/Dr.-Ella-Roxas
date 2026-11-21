import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured, getServiceSupabase } from '@/lib/supabase';
import { sendAppointmentEmails, isResendConfigured, EmailDispatchResult } from '@/lib/resend';
import { AppointmentRequest } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body: AppointmentRequest = await request.json();

    // Basic validation
    if (!body.fullName || !body.email || !body.phone || !body.service || !body.preferredDate || !body.preferredTime) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Phone, Service, Date, Time).' },
        { status: 400 }
      );
    }

    let savedAppointmentId: string | undefined = undefined;

    // 1. Save to Supabase if configured
    const client = getServiceSupabase() || supabase;
    if (client && isSupabaseConfigured) {
      try {
        const { data, error } = await client
          .from('appointments')
          .insert([
            {
              full_name: body.fullName,
              email: body.email,
              phone: body.phone,
              service: body.service,
              preferred_date: body.preferredDate,
              preferred_time: body.preferredTime,
              is_first_visit: body.isFirstVisit ?? true,
              notes: body.notes || '',
              status: 'pending',
            },
          ])
          .select()
          .single();

        if (error) {
          console.error('[Supabase Insert Error]', error);
        } else if (data) {
          savedAppointmentId = data.id;
        }
      } catch (err) {
        console.error('[Supabase Unexpected Error]', err);
      }
    } else {
      console.log('[Supabase Demo Mode] Config not detected or mock active. Proceeding with appointment receipt.');
    }

    // 2. Dispatch Confirmation Emails via Resend
    let emailResult: EmailDispatchResult = { success: true, simulated: !isResendConfigured };
    try {
      emailResult = await sendAppointmentEmails({
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        service: body.service,
        preferredDate: body.preferredDate,
        preferredTime: body.preferredTime,
        isFirstVisit: body.isFirstVisit,
        notes: body.notes,
      });
    } catch (mailErr) {
      console.error('[Resend Email Error]', mailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Appointment request received successfully! We will contact you shortly to confirm your time slot.',
      appointmentId: savedAppointmentId || 'SDH-' + Date.now(),
      emailStatus: emailResult,
      isDemo: !isSupabaseConfigured || !isResendConfigured,
    });
  } catch (error: any) {
    console.error('API /api/booking error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit appointment request. Please contact clinic directly at 09067915425.' },
      { status: 500 }
    );
  }
}
