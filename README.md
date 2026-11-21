# Smiles Dental Hub — Dr. Jowela Elaine E. Roxas, DMD (Denteetha)

> **"Our lifetime mission is your lifetime smile"**  
> Premium Medical Dental Website for Dr. Jowela Elaine E. Roxas, DMD — CEO of Hello po! & AKA Denteetha.

---

## 🌟 Clinic & Doctor Information

- **Doctor:** Dr. Jowela Elaine E. Roxas, DMD
- **Title / Roles:** Doctor of Dental Medicine • CEO of "Hello po!" • AKA Denteetha
- **Clinic:** Smiles Dental Hub
- **Location:** 147 Malipampang, San Ildefonso, Bulacan, Philippines
- **Schedule:** Monday, Tuesday, Friday — 9:00 AM to 6:00 PM *(Wed/Thu/Sat by special arrangement & emergency)*
- **Hotline:** `09067915425`
- **Clinic Email:** `smilesdentalhub@gmail.com`
- **Doctor Email:** `ellaroxas_dmd@yahoo.com`
- **Social Media:**
  - Facebook: [Ella Roxas](https://www.facebook.com/ellaroxas)
  - Clinic Facebook: [Smiles Dental Hub](https://www.facebook.com/smilesdentalhub)
  - TikTok: [@ellarxsdmd](https://www.tiktok.com/@ellarxsdmd)
  - YouTube: [@ellaroxasdmd](https://www.youtube.com/@ellaroxasdmd)
  - Instagram: [@ellaroxasdmd](https://www.instagram.com/@ellaroxasdmd)

---

## 🎨 Color Scheme & Design System

- **Background:** Deep Onyx Black (`#080c0d` & `#050708`)
- **Surfaces:** Dark Slate Charcoal (`#0c1416`, `#10191b`, `#142023`)
- **Accents:** Electric & Medical Turquoise (`#00e5cc`, `#2dd4bf`, `#5eead4`, `#14b8a6`, `#0d9488`)
- **Typography:** High-contrast modern medical hierarchy, responsive typography, glassmorphism blur cards, and subtle turquoise glow accents.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom medical turquoise glow theme
- **Database:** Supabase PostgreSQL with Row Level Security (RLS)
- **Email Dispatch:** Resend API for instant transactional notifications
- **Icons:** Lucide React
- **Deployment Ready:** Vercel & GitHub

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/dr-ella-roxas-dental.git
cd "dr-ella-roxas-dental"
npm install
```

### 2. Environment Variables Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your credentials:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend API Key for Email Notifications
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=smilesdentalhub@gmail.com
DOCTOR_EMAIL=ellaroxas_dmd@yahoo.com

# Clinic Metadata
NEXT_PUBLIC_CLINIC_PHONE=09067915425
NEXT_PUBLIC_CLINIC_LOCATION="147 Malipampang, San Ildefonso, Bulacan, Philippines"
```

*(Note: The app includes demo fallbacks, so it runs completely functional even before adding API keys!)*

### 3. Supabase Database Migration
Open your Supabase project dashboard, navigate to **SQL Editor**, and run the SQL script found in:
`supabase/schema.sql`

This creates:
- `appointments` table with indexed dates, patient contact details, and procedure selections.
- Row Level Security (RLS) policies allowing public appointment submissions and secure admin reads.
- `contact_inquiries` table for general inquiries.

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📄 Site Structure & Pages

1. **`/` (Home):**
   - Hero spotlight for Dr. Jowela Elaine E. Roxas, DMD, Denteetha, CEO of Hello po!
   - Tagline banner & quick clinic indicators (Mon/Tue/Fri 9 AM - 6 PM, 147 Malipampang)
   - Signature treatment highlights with direct booking shortcuts
   - Doctor philosophy ("Hello po!" gentle dentistry for kids and adults)
   - Patient testimonials & clinic safety standards (Class-B autoclave sterilization)
   - Multiple prominent "Book Appointment" buttons.

2. **`/services` (Services):**
   - Full 9-treatment specialty directory:
     - Comprehensive Oral Prophylaxis (Cleaning & Polish)
     - Orthodontics & Braces (Metal, ceramic & aligners)
     - Esthetic Dentistry & Veneers (Smile Makeover)
     - Laser & In-Office Teeth Whitening
     - Tooth-Colored Restorations (Pasta)
     - Wisdom Tooth Removal & Minor Oral Surgery
     - Endodontic Root Canal Therapy
     - Pediatric Kiddie Dentistry
     - Prosthodontics (Dentures, Crowns & Bridges)
   - Interactive category filtering
   - Procedure highlights, duration, and direct pre-selected booking links
   - Detailed dental FAQs.

3. **`/schedule` (Schedule & Clinics):**
   - Weekly operating breakdown with active day indicators
   - Monday, Tuesday, Friday (9:00 AM – 6:00 PM) schedule guide
   - Comprehensive location details: 147 Malipampang, San Ildefonso, Bulacan
   - Interactive map card with Google Maps directions button
   - Commute directions from Baliuag, Plaridel, San Miguel, and Public Transport.

4. **`/booking` (Online Appointment Booking):**
   - Patient information form with live date validation (Mon/Tue/Fri preferred clinic days)
   - Dynamic time slot selection (9 AM - 6 PM)
   - First-time patient vs. returning patient toggle
   - Treatment selector with auto-fill support from services page
   - Submits to `/api/booking`, saving to Supabase and triggering dual notification emails via Resend.

---

## 🚢 Deploying to Vercel & GitHub

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dr. Jowela Elaine E. Roxas, DMD - Smiles Dental Hub website"
   ```
2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/<your-username>/dr-ella-roxas-dental.git
   git branch -M main
   git push -u origin main
   ```
3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import your GitHub repository.
   - Add environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`, etc.).
   - Click **Deploy**.

---

© Smiles Dental Hub • Dr. Jowela Elaine E. Roxas, DMD
