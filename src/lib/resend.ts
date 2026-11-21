import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

export const isResendConfigured = Boolean(
  resendApiKey && 
  resendApiKey.startsWith('re_') && 
  resendApiKey !== 're_your_api_key_here'
);

export const resend = isResendConfigured ? new Resend(resendApiKey) : null;

export interface AppointmentNotificationData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  isFirstVisit: boolean;
  notes?: string;
}

export interface EmailDispatchResult {
  success: boolean;
  simulated: boolean;
  data?: any;
  error?: any;
}

export async function sendAppointmentEmails(data: AppointmentNotificationData): Promise<EmailDispatchResult> {
  if (!resend || !isResendConfigured) {
    console.log('[Resend Mock Mode] Simulated email dispatch for appointment:', data);
    return { success: true, simulated: true };
  }

  try {
    const clinicEmail = process.env.NOTIFICATION_EMAIL || 'smilesdentalhub@gmail.com';
    const doctorEmail = process.env.DOCTOR_EMAIL || 'ellaroxas_dmd@yahoo.com';

    // 1. Email notification to Dr. Ella & Clinic Staff
    const clinicNotification = await resend.emails.send({
      from: 'Smiles Dental Hub <appointments@resend.dev>',
      to: [clinicEmail, doctorEmail],
      replyTo: data.email,
      subject: `🦷 New Booking: ${data.fullName} - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0c1314; color: #f3fbfb; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #14b8a6;">
          <h2 style="color: #22d3ee; margin-top: 0;">🦷 New Appointment Scheduled</h2>
          <p style="color: #67e8f9;">A new patient consultation has been requested via the Smiles Dental Hub website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0; background-color: #10191b; border-radius: 8px; overflow: hidden;">
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Patient Name:</td>
              <td style="padding: 12px; color: #ffffff;">${data.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Phone:</td>
              <td style="padding: 12px; color: #ffffff;"><a href="tel:${data.phone}" style="color: #22d3ee;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Email:</td>
              <td style="padding: 12px; color: #ffffff;">${data.email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Service Requested:</td>
              <td style="padding: 12px; color: #ffffff;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Preferred Date & Time:</td>
              <td style="padding: 12px; color: #ffffff;"><strong>${data.preferredDate}</strong> at <strong>${data.preferredTime}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #22393e;">
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Patient Type:</td>
              <td style="padding: 12px; color: #ffffff;">${data.isFirstVisit ? 'New Patient' : 'Returning Patient'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; color: #22d3ee; font-weight: bold;">Chief Complaint / Notes:</td>
              <td style="padding: 12px; color: #ffffff;">${data.notes || 'None provided'}</td>
            </tr>
          </table>

          <p style="color: #94a3b8; font-size: 13px;">
            Smiles Dental Hub • 147 Malipampang, San Ildefonso, Bulacan<br/>
            Clinic Hotline: 09067915425
          </p>
        </div>
      `,
    });

    // 2. Friendly confirmation to the Patient
    await resend.emails.send({
      from: 'Smiles Dental Hub <appointments@resend.dev>',
      to: [data.email],
      subject: `Your Dental Appointment Request with Dr. Ella Roxas (Denteetha)`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #080c0d; color: #f3fbfb; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #22d3ee;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #22d3ee; margin: 0; font-size: 24px;">Smiles Dental Hub</h1>
            <p style="color: #22d3ee; font-size: 14px; margin: 4px 0 0;">"Our lifetime mission is your lifetime smile"</p>
          </div>

          <p>Hello po, <strong>${data.fullName}</strong>!</p>
          <p>Thank you for booking with <strong>Dr. Jowela Elaine E. Roxas, DMD</strong> (Denteetha). We have received your appointment request with the following details:</p>

          <div style="background-color: #142023; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22d3ee;">
            <p style="margin: 4px 0;"><strong>Service:</strong> ${data.service}</p>
            <p style="margin: 4px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>
            <p style="margin: 4px 0;"><strong>Preferred Time:</strong> ${data.preferredTime}</p>
            <p style="margin: 4px 0;"><strong>Location:</strong> 147 Malipampang, San Ildefonso, Bulacan</p>
          </div>

          <p>Our clinic coordinator will review Dr. Ella's chairside schedule and contact you via SMS/Call at <strong>${data.phone}</strong> to confirm your slot.</p>

          <p style="color: #cbd5e1; font-size: 14px;">If you have any questions or urgent tooth discomfort, you can contact us immediately at <strong>09067915425</strong>.</p>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #22393e; font-size: 12px; color: #94a3b8; text-align: center;">
            <p>Dr. Jowela Elaine E. Roxas, DMD • CEO of Hello po! • Smiles Dental Hub</p>
            <p>147 Malipampang, San Ildefonso, Bulacan, Philippines</p>
          </div>
        </div>
      `,
    });

    return { success: true, simulated: false, data: clinicNotification };
  } catch (error) {
    console.error('Failed to send email via Resend:', error);
    return { success: false, simulated: false, error };
  }
}
