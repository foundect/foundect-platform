# Foundect - Route Structure

## 🗺️ Complete Route Map

### Public Routes (Accessible to Everyone)

```
┌─────────────────────────────────────────────────────────────┐
│                      PUBLIC ROUTES                          │
└─────────────────────────────────────────────────────────────┘

/                           → Redirects to /bd
│
├── /bd                     → Bangladesh Landing Page
│   ├── Hero Section
│   ├── What is Foundect?
│   ├── For Investors Section
│   ├── For Businesses Section
│   └── Footer
│
├── /explore                → Browse Campaigns
│   └── Campaign Grid (6 dummy campaigns)
│       ├── Green Textile Manufacturing
│       ├── Organic Food Distribution
│       ├── Tech Solutions Hub
│       ├── Halal Restaurant Chain
│       ├── E-commerce Platform
│       └── Sustainable Packaging
│
├── /campaign/[id]          → Campaign Details Page
│   ├── Campaign Identity Header
│   ├── Primary CTA (Invest Now + Enable Alerts)
│   ├── Financial Transparency Section
│   ├── Campaign Media Section
│   ├── Tab-based Content
│   │   ├── Overview
│   │   ├── Business
│   │   ├── Financial
│   │   ├── Risk
│   │   ├── Shari'ah
│   │   └── Legal
│   ├── AI Assistant
│   └── Comments Section
│
├── /invest/[campaignId]    → Investment Page
│   ├── Campaign Header
│   ├── Investment Summary Card
│   ├── Returns Breakdown Table
│   ├── Shari'ah Compliance Summary
│   ├── Business Bank Details
│   ├── Transfer Confirmation
│   │   ├── Transaction Reference
│   │   ├── Screenshot Upload
│   │   └── Bank Account Selection
│   ├── Disclaimer & Acknowledgment
│   └── Submit Investment
│
├── /support                → Support Center (Shared)
│   ├── Quick Help Cards
│   ├── Search Bar
│   ├── FAQ Sections (Accordion)
│   ├── Contact Options
│   ├── Support Request Form
│   └── Trust & Safety Notice
│
├── /about                  → About Foundect
│   ├── Our Mission
│   ├── Why Shari'ah-Compliant?
│   ├── How Foundect Works
│   └── Our Values
│
└── /contact                → Contact Form
    ├── Contact Info Cards
    └── Message Form
```

### Authentication Routes

```
┌─────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION ROUTES                    │
└─────────────────────────────────────────────────────────────┘

/auth
│
├── /auth/login             → Universal Login Page
│   ├── Email or Phone Input
│   ├── Password Input (with show/hide toggle)
│   ├── Remember Me Checkbox
│   ├── Forgot Password Link
│   └── Create Account Flow
│       └── Account Type Selection Modal
│           ├── Individual Investor → /auth/investor
│           └── Business → /auth/business
│
├── /auth/investor           → Investor Signup (6 Steps)
│   ├── Step 1: Account Setup
│   │   ├── Full Name, Email, Phone (+88 fixed)
│   │   ├── Password (with strength validation)
│   │   ├── Terms & Conditions Checkbox
│   │   └── Phone Verification (OTP)
│   ├── Step 2: Investor Profile
│   ├── Step 3: KYC & Nominee
│   ├── Step 4: Bank Setup (Optional)
│   ├── Step 5: Shari'ah Declaration
│   └── Step 6: Knowledge Check (Quiz)
│
├── /auth/business           → Business Signup (5 Steps)
│   ├── Step 1: Business Account Setup
│   ├── Step 2: Business Information
│   ├── Step 3: Ownership Structure
│   ├── Step 4: Business Verification (Documents)
│   └── Step 5: Shari'ah Compliance & Confirmation
│
├── /auth/review             → Account Under Review
│   ├── Status: pending_review
│   ├── Foundect Logo
│   ├── "Your account is under review"
│   ├── Approval Timeline Notice
│   └── Contact Support Link
│
├── /auth/approved           → Account Approved
│   ├── Status: approved
│   ├── Success Confirmation
│   ├── "Go to Dashboard" Button
│   └── Routes to appropriate dashboard
│
└── /auth/rejected            → Account Rejected
    ├── Status: rejected
    ├── Rejection Notice
    ├── Reason (if available)
    └── Contact Support + Reapply Option
```

### Legal & Policy Pages (Static)

```
┌─────────────────────────────────────────────────────────────┐
│                  LEGAL & POLICY PAGES                       │
│              (Accessible to All Users)                      │
└─────────────────────────────────────────────────────────────┘

/terms                       → Terms & Conditions
/privacy                     → Privacy Policy
/risk-disclosure             → Risk Disclosure
/user-agreement              → User Agreement
/business-campaign-agreement → Business Campaign Agreement
/shariah-compliance-policy   → Shari'ah Compliance Policy
/aml-kyc-policy              → AML & KYC Policy
/dispute-resolution-policy  → Dispute Resolution Policy

All legal pages include:
├── Foundect Logo (top-center)
├── Last Updated: 20 December, 2025
├── Scrollable Legal Document Format
├── Support Page Link
└── Email Contact Links
```

### Investor Routes (Protected - TODO)

```
┌─────────────────────────────────────────────────────────────┐
│                    INVESTOR DASHBOARD                       │
│                  (Role: Individual Investor)                │
└─────────────────────────────────────────────────────────────┘

/investor
│
├── /investor/home          → Investor Home
│   ├── Summary Cards (3)
│   │   ├── Total Invested
│   │   ├── Active Campaigns
│   │   └── Expected Returns
│   ├── Quick Actions (3)
│   │   ├── Explore New Campaigns
│   │   ├── View Dashboard
│   │   └── Complete Profile
│   └── Recent Activity Feed
│
├── /investor/dashboard     → Portfolio Dashboard
│   ├── Summary Cards (4)
│   │   ├── Portfolio Value
│   │   ├── Total Invested
│   │   ├── Active Investments
│   │   └── Total Gain
│   ├── Chart Placeholder
│   └── Investment Table
│       └── 4 Active Investments
│
├── /investor/account       → My Account
│   ├── Profile Header (Banner + Avatar)
│   ├── Identity & Compliance (KYC)
│   │   ├── Full Legal Name (Immutable)
│   │   ├── NID Number (Immutable)
│   │   ├── NID Document (View Only)
│   │   └── E-TIN (Conditionally Editable)
│   ├── Nominee Details (Full CRUD)
│   ├── Profit Withdrawal Destination
│   │   └── Bank Account Management
│   └── Logout Button
│
├── /investor/transactions  → Transactions Ledger
│   ├── Quick Overview (4 cards)
│   ├── Filters & Search
│   ├── Transaction List (Table/Cards)
│   ├── Monthly Grouping
│   └── Export Options
│
├── /investor/notifications → Notifications
│   ├── Grouping (Today, Earlier, This Week)
│   ├── Contextual Styling
│   ├── Actionable Links
│   └── Read/Unread States
│
└── /investor/settings      → Settings
    ├── General Settings
    ├── Investment Preferences
    ├── Notification Preferences
    ├── Financial Controls
    │   └── Profit Withdrawal Timing
    │       ├── Scheduled Distribution
    │       ├── On Availability
    │       └── End-of-Campaign Payout
    ├── Advanced Settings
    │   ├── Activity Logs
    │   ├── Data & Exports
    │   ├── Privacy Controls
    │   └── Experimental Features
    └── Community & Support
```

### Business Routes (Protected - TODO)

```
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS DASHBOARD                       │
│                    (Role: Business/SME)                     │
└─────────────────────────────────────────────────────────────┘

/business
│
├── /business/home          → Business Home
│   ├── Summary Cards (3)
│   │   ├── Total Funds Raised
│   │   ├── Active Listings
│   │   └── Total Investors
│   ├── Quick Actions (2)
│   │   ├── Create New Campaign
│   │   └── Explore Opportunities
│   └── Recent Activity Feed
│
├── /business/dashboard     → Business Dashboard
│   ├── Header with Toggle
│   │   ├── Launched Campaigns (Default)
│   │   └── Invested Campaigns
│   ├── Key Metrics (4 cards)
│   ├── Campaign Performance
│   ├── Profit & Distribution
│   │   └── Shari'ah-aware logic
│   ├── Investor Engagement
│   └── Recent Activity
│
├── /business/financials    → Business Financials
│   ├── Tab: Your Campaign Finances
│   │   ├── Financial Snapshot
│   │   ├── Funds Breakdown
│   │   ├── Profit & Distribution Overview
│   │   └── Campaign-wise Summary
│   └── Tab: Your Investments
│       ├── Investment Snapshot
│       ├── Invested Campaigns
│       ├── Distribution Timeline
│       └── Investment Activity
│
├── /business/company       → Company Profile
│   ├── Company Overview Header
│   │   ├── Logo, Name, Sector
│   │   ├── Location
│   │   └── Verified Badge
│   ├── Verification & Compliance
│   ├── Founders & Management
│   ├── Active Campaigns
│   ├── Past Campaigns
│   ├── Business Description & Media
│   └── Business Highlights
│
├── /business/notifications → Notifications
│   └── 6 Notifications
│       ├── New Investment Received
│       ├── Campaign Milestone
│       ├── Update Reminder
│       ├── Campaign Approved
│       ├── New Investor Question
│       └── Document Expiring
│
└── /business/settings      → Account Settings
    ├── Top Summary Card
    ├── General Settings
    ├── Notification Preferences
    ├── Security & Access
    ├── Financial Settings
    ├── Advanced Settings
    └── Account Lifecycle
        ├── Deactivate Account
        └── Delete Account
```

## 🎨 Layout Structure

### Public Pages Layout
```
┌─────────────────────────────────────────────────────────┐
│  PublicHeader (Logo, Nav Links, Login/Signup Buttons)  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   Page Content                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  SiteFooter (Legal Links, Support, Social Media)       │
└─────────────────────────────────────────────────────────┘
```

### Auth Pages Layout
```
┌─────────────────────────────────────────────────────────┐
│                  Gradient Background                    │
│                                                         │
│              ┌───────────────────────┐                 │
│              │   Foundect Logo       │                 │
│              │                       │                 │
│              │   ┌───────────────┐   │                 │
│              │   │  Auth Card    │   │                 │
│              │   │  (Centered)   │   │                 │
│              │   └───────────────┘   │                 │
│              └───────────────────────┘                 │
│                                                         │
│  NO FOOTER (Excluded from /auth/* routes)              │
└─────────────────────────────────────────────────────────┘
```

### Dashboard Layout (Investor & Business)
```
┌─────────────┬───────────────────────────────────────────┐
│             │  Top Bar (Back/Notifications/Profile)     │
│             ├───────────────────────────────────────────┤
│  Desktop    │                                           │
│  Sidebar    │          Page Content                     │
│  (lg:block) │                                           │
│             │                                           │
│  - Home     │                                           │
│  - Dashboard│                                           │
│  - AI       │                                           │
│  - Explore  │                                           │
│  - Settings │                                           │
│  - Support  │                                           │
│             │                                           │
│             ├───────────────────────────────────────────┤
│             │  Mobile Bottom Nav (lg:hidden)           │
│             │  [Home] [Dashboard] [AI] [Explore] [Menu]│
│             └───────────────────────────────────────────┘
│                                                         │
├─────────────────────────────────────────────────────────┤
│  SiteFooter (Legal Links, Support, Social Media)       │
└─────────────────────────────────────────────────────────┘
```

## 🔄 Navigation Flow

### User Journey: Investor
```
Landing (/bd)
    ↓
Login (/auth/login) → Select "Create Account" → "Individual Investor"
    ↓
Investor Signup (/auth/investor) - 6 Steps
    ↓
Account Review (/auth/review) - Status: pending_review
    ↓
Account Approved (/auth/approved) - Status: approved
    ↓
Investor Home (/investor/home)
    ↓
    ├→ Explore Campaigns (/explore)
    │       ↓
    │   View Campaign Details (/campaign/[id])
    │       ↓
    │   Make Investment (/invest/[campaignId])
    │
    ├→ Dashboard (/investor/dashboard)
    │       ↓
    │   Track Portfolio Performance
    │
    ├→ Account (/investor/account)
    │       ↓
    │   Complete KYC
    │       ↓
    │   Add Bank Details
    │
    └→ Settings (/investor/settings)
            ↓
        Configure Preferences
```

### User Journey: Business
```
Landing (/bd)
    ↓
Login (/auth/login) → Select "Create Account" → "Business"
    ↓
Business Signup (/auth/business) - 5 Steps
    ↓
Account Review (/auth/review) - Status: pending_review
    ↓
Account Approved (/auth/approved) - Status: approved
    ↓
Business Home (/business/home)
    ↓
    ├→ Company Profile (/business/company)
    │       ↓
    │   Complete Business Info
    │       ↓
    │   Upload Documents
    │       ↓
    │   Submit for Verification
    │
    ├→ Dashboard (/business/dashboard)
    │       ↓
    │   View Campaign Performance
    │
    ├→ Financials (/business/financials)
    │       ↓
    │   Track Finances & Investments
    │
    └→ Settings (/business/settings)
            ↓
        Configure Preferences
```

## 🔐 Route Protection (TODO)

### Current State
- ❌ All routes are publicly accessible
- ❌ No authentication required
- ❌ No role-based access control

### Future Implementation
```typescript
// Middleware to protect routes
/investor/*  → Requires auth + role: "investor"
/business/*  → Requires auth + role: "business"

// Redirect logic
Unauthenticated user → /auth/login
Wrong role → Appropriate dashboard
Pending review → /auth/review
Rejected → /auth/rejected
```

## 📊 Route Statistics

- **Total Routes:** 40+ pages
- **Public Routes:** 8 (Landing, Explore, Campaign Details, Investment, Support, About, Contact)
- **Authentication Routes:** 6 (Login, Investor Signup, Business Signup, Review, Approved, Rejected)
- **Legal/Policy Routes:** 8 (Terms, Privacy, Risk Disclosure, User Agreement, Business Campaign Agreement, Shari'ah Compliance, AML/KYC, Dispute Resolution)
- **Investor Routes:** 7 (Home, Dashboard, Account, Transactions, Notifications, Settings, Explore)
- **Business Routes:** 7 (Home, Dashboard, Financials, Company, Notifications, Settings, Explore)
- **Layouts:** 3 (Root, Investor, Business)
- **Shared Components:** Multiple (Headers, Footers, Cards, Forms, etc.)

## 🎯 Route Testing Checklist

After running `npm run dev`, test each route:

### Public Routes
- [ ] `/` redirects to `/bd`
- [ ] `/bd` loads with all sections
- [ ] `/explore` displays campaign grid with filters
- [ ] `/campaign/[id]` shows campaign details with tabs, financial transparency, and media
- [ ] `/invest/[campaignId]` displays investment page
- [ ] `/support` shows support center with FAQs
- [ ] `/about` shows all content sections
- [ ] `/contact` renders contact form

### Authentication Routes
- [ ] `/auth/login` shows universal login with account type selection
- [ ] `/auth/investor` displays 6-step signup flow (mobile-optimized)
- [ ] `/auth/business` displays 5-step signup flow (with logo)
- [ ] `/auth/review` shows account under review page
- [ ] `/auth/approved` shows account approved confirmation
- [ ] `/auth/rejected` shows account rejected page

### Legal & Policy Routes
- [ ] `/terms` displays Terms & Conditions
- [ ] `/privacy` displays Privacy Policy
- [ ] `/risk-disclosure` displays Risk Disclosure
- [ ] `/user-agreement` displays User Agreement
- [ ] `/business-campaign-agreement` displays Business Campaign Agreement
- [ ] `/shariah-compliance-policy` displays Shari'ah Compliance Policy
- [ ] `/aml-kyc-policy` displays AML & KYC Policy
- [ ] `/dispute-resolution-policy` displays Dispute Resolution Policy

### Investor Routes
- [ ] `/investor/home` displays welcome and quick actions
- [ ] `/investor/dashboard` shows comprehensive portfolio dashboard
- [ ] `/investor/account` renders profile with KYC and nominee details
- [ ] `/investor/transactions` displays transaction ledger
- [ ] `/investor/notifications` lists grouped notifications
- [ ] `/investor/settings` shows all preference sections

### Business Routes
- [ ] `/business/home` displays business welcome and actions
- [ ] `/business/dashboard` shows operational control center
- [ ] `/business/financials` displays two-tab financial view
- [ ] `/business/company` renders public company profile
- [ ] `/business/notifications` lists notifications
- [ ] `/business/settings` shows account settings sections

### Navigation
- [ ] Desktop sidebar navigation works (Investor & Business)
- [ ] Mobile bottom navigation is fixed and always visible
- [ ] Mobile bottom nav hidden on desktop (lg:hidden)
- [ ] Desktop sidebar hidden on mobile (hidden lg:block)
- [ ] Active route highlighting works
- [ ] Footer appears on all pages except `/auth/*` routes

### Footer
- [ ] Footer appears on public pages
- [ ] Footer appears on authenticated pages
- [ ] Footer does NOT appear on `/auth/*` routes
- [ ] Footer links to all legal pages
- [ ] Footer includes Support page link
- [ ] Footer includes social media links

---

**All routes are fully implemented and ready for testing!**

**Last Updated:** December 2025
