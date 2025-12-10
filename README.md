# Foundect - Halal SME Investing Platform

A Shari'ah-aligned digital platform connecting SMEs with micro-investors in Bangladesh.

## 🎯 Overview

Foundect is an MVP platform that enables:
- **Individual Investors** to invest in halal, Shari'ah-compliant SME campaigns
- **Businesses/SMEs** to raise funding through profit-sharing arrangements (no interest/riba)

**Current Status:** MVP - Structure only, no real payments or authentication yet.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## 📁 Project Structure

```
foundect/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Redirects to /bd
│   ├── globals.css             # Global styles
│   │
│   ├── bd/                     # Bangladesh landing page
│   │   └── page.tsx
│   │
│   ├── auth/                   # Authentication pages
│   │   ├── layout.tsx
│   │   └── page.tsx            # Login/Signup with role selection
│   │
│   ├── explore/                # Browse campaigns
│   │   └── page.tsx
│   │
│   ├── about/                  # About Foundect
│   │   └── page.tsx
│   │
│   ├── contact/                # Contact form
│   │   └── page.tsx
│   │
│   ├── investor/               # Investor dashboard namespace
│   │   ├── layout.tsx          # Investor dashboard layout
│   │   ├── home/
│   │   ├── dashboard/
│   │   ├── account/
│   │   ├── notifications/
│   │   └── settings/
│   │
│   └── business/               # Business dashboard namespace
│       ├── layout.tsx          # Business dashboard layout
│       ├── home/
│       ├── listings/
│       ├── company/
│       ├── notifications/
│       └── settings/
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── switch.tsx
│   │   ├── select.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   └── dropdown-menu.tsx
│   │
│   └── layouts/                # Layout components
│       ├── PublicHeader.tsx    # Public pages header
│       ├── AuthCard.tsx        # Auth page wrapper
│       ├── DashboardSidebar.tsx
│       └── DashboardTopbar.tsx
│
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
│
└── [config files]
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.mjs
    └── postcss.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will redirect to `/bd` (Bangladesh landing page).

## 📄 Available Routes

### Public Routes (No Auth Required)

- `/bd` - Bangladesh landing page (main entry point)
- `/auth` - Login/Signup with role selection (Investor vs Business)
- `/explore` - Browse investment campaigns (dummy data)
- `/about` - About Foundect and Shari'ah compliance
- `/contact` - Contact form (UI only)

### Investor Routes (Protected - TODO)

- `/investor/home` - Investor home dashboard
- `/investor/dashboard` - Portfolio overview with investment tracking
- `/investor/account` - Profile and KYC information
- `/investor/notifications` - Investment updates and alerts
- `/investor/settings` - Account preferences

### Business Routes (Protected - TODO)

- `/business/home` - Business home dashboard
- `/business/listings` - Manage funding campaigns
- `/business/company` - Company profile and verification
- `/business/notifications` - Campaign updates and investor activity
- `/business/settings` - Business account preferences

## 🔐 Authentication (TODO)

Currently, all routes are accessible without authentication. The following needs to be implemented:

- [ ] Supabase authentication setup
- [ ] Role-based access control (investor vs business)
- [ ] Protected route middleware
- [ ] Session management
- [ ] Logout functionality

## 💾 Backend Integration (TODO)

The following backend features need to be implemented:

- [ ] Supabase project setup
- [ ] Database schema for users, campaigns, investments
- [ ] Campaign listing and management APIs
- [ ] Investment transaction flows (simulated)
- [ ] File upload for KYC and business documents
- [ ] Notification system
- [ ] Contact form submission

## 🎨 Design Principles

- **Shari'ah-Compliant:** No interest-based terminology, halal-focused language
- **Clean & Modern:** Using Tailwind CSS and shadcn/ui for consistent design
- **Role-Based UX:** Separate experiences for investors and businesses
- **Mobile-Responsive:** Works on all device sizes

## 📝 Key Features (Current MVP)

✅ Complete page structure and routing  
✅ Public marketing pages  
✅ Auth UI with role selection  
✅ Investor dashboard skeleton  
✅ Business dashboard skeleton  
✅ Dummy campaign data  
✅ Responsive layouts  

## 🔜 Next Steps

1. **Supabase Integration**
   - Set up Supabase project
   - Create database schema
   - Implement authentication
   - Add row-level security policies

2. **Real Data & Logic**
   - Connect forms to backend
   - Implement campaign CRUD operations
   - Add investment flow (simulated payments)
   - Build notification system

3. **Enhanced Features**
   - Add charts for portfolio visualization
   - Implement search and filters
   - Add pagination
   - File upload for documents
   - Email notifications

4. **Testing & Deployment**
   - Add unit tests
   - Integration testing
   - Deploy to Vercel/production

## 🕌 Shari'ah Compliance

All financial terminology and mechanisms are designed to be halal:

- ❌ No "interest", "APY", or "loans"
- ✅ "Expected profit share", "projected returns", "funding campaigns"
- ✅ Profit-sharing arrangements (Mudarabah/Musharakah principles)
- ✅ Vetted halal business sectors only

## 🤝 Contributing

This is an MVP project. Future contributions should maintain:
- Shari'ah-compliant terminology
- Clean, maintainable code
- TypeScript type safety
- Responsive design principles

## 📧 Contact

For questions or support, use the contact form at `/contact` or reach out to the development team.

---

**Note:** This is an MVP with simulated functionality. Real payment processing and full backend integration will be added in future iterations.

