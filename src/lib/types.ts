export interface AppointmentRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  isFirstVisit: boolean;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  iconName: string;
  popular?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  nickname: string;
  executiveTitle: string;
  clinic: string;
  location: string;
  tagline: string;
  contacts: {
    phone: string;
    email: string;
    clinicEmail: string;
    facebookDoctor: string;
    facebookClinic: string;
    tiktok: string;
    youtube: string;
    instagram: string;
  };
  schedule: {
    days: string[];
    hours: string;
    note: string;
  };
}
