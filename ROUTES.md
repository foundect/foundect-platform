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
├── /auth                   → Authentication Hub
│   ├── Login Tab
│   │   ├── Email Input
│   │   └── Password Input
│   └── Sign Up Tab
│       ├── Role Selection
│       │   ├── Individual Investor
│       │   └── Business/SME
│       └── Signup Forms (conditional)
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
│   ├── Primary CTA (Invest Now)
│   ├── Tab-based Content
│   │   ├── Overview
│   │   ├── Business
│   │   ├── Financial
│   │   ├── Risk
│   │   ├── Shari'ah
│   │   └── Legal
│   ├── AI Assistant
│   ├── Comments Section
│   └── Final CTA
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
├── /support                → Support Center
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
│   ├── Verification Status
│   ├── Personal Information
│   ├── Profit Withdrawal Destination
│   ├── Security Settings
│   └── Logout
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
    ├── Security & Access
    ├── Investment Preferences
    ├── Notification Preferences
    ├── Financial Controls
    ├── Advanced Settings
    ├── Community & Support
    └── Account Controls
    ├── Security
    │   ├── Change Password
    │   └── 2FA Setup
    ├── Notification Preferences (5 toggles)
    └── Account Actions
        ├── Download Data
        └── Deactivate Account
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
│   ├── Quick Actions (3)
│   │   ├── Create New Listing
│   │   ├── View Listings
│   │   └── Update Company Profile
│   ├── Campaign Performance (2 campaigns)
│   └── Recent Activity Feed
│
├── /business/dashboard     → Business Dashboard
│   ├── Header with Quick Actions
│   ├── Key Metrics (4 cards)
│   ├── Campaign Performance
│   ├── Profit Overview
│   ├── Investor Engagement
│   └── Recent Activity
│
├── /business/financials    → Business Financials
│   ├── Tab: Your Campaign Finances
│   │   ├── Financial Overview (4 cards)
│   │   ├── Campaign-wise Breakdown
│   │   └── Recent Financial Activity
│   └── Tab: Your Investments
│       ├── Investment Overview (4 cards)
│       ├── Active Investments List
│       └── Recent Investment Activity
│
├── /business/listings      → Manage Campaigns
│   ├── Summary Stats (4 cards)
│   └── Campaign List (5 campaigns)
│       ├── Green Textile - Expansion (Live)
│       ├── Sustainable Product Line (Live)
│       ├── Equipment Upgrade (Under Review)
│       ├── Export Market Expansion (Draft)
│       └── Working Capital Q1 (Completed)
│
├── /business/company       → Company Profile
│   ├── Company Overview Header
│   ├── Verification Status
│   ├── Founders Section
│   ├── Active Campaigns
│   ├── Past Campaigns
│   ├── Company Description
│   └── Company Highlights
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
    ├── Security Settings
    ├── Financial Settings
    ├── Advanced Settings
    └── Account Lifecycle
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
└─────────────────────────────────────────────────────────┘
```

### Dashboard Layout (Investor & Business)
```
┌─────────────┬───────────────────────────────────────────┐
│             │  DashboardTopbar                          │
│             │  (Title, Notifications, Profile Menu)     │
│             ├───────────────────────────────────────────┤
│  Dashboard  │                                           │
│  Sidebar    │                                           │
│             │          Page Content                     │
│  - Home     │                                           │
│  - Dashboard│                                           │
│  - Account  │                                           │
│  - Notifs   │                                           │
│  - Settings │                                           │
│             │                                           │
└─────────────┴───────────────────────────────────────────┘
```

## 🔄 Navigation Flow

### User Journey: Investor
```
Landing (/bd)
    ↓
Sign Up (/auth) → Select "Individual Investor"
    ↓
Investor Home (/investor/home)
    ↓
    ├→ Explore Campaigns (/explore)
    │       ↓
    │   View Campaign Details (TODO)
    │       ↓
    │   Make Investment (TODO)
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
Sign Up (/auth) → Select "Business/SME"
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
    ├→ Create Listing (TODO)
    │       ↓
    │   Fill Campaign Details
    │       ↓
    │   Submit for Review
    │
    ├→ Listings (/business/listings)
    │       ↓
    │   Manage Campaigns
    │       ↓
    │   View Investors
    │       ↓
    │   Post Updates
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
Unauthenticated user → /auth
Wrong role → Appropriate dashboard
```

## 📊 Route Statistics

- **Total Routes:** 25 pages
- **Public Routes:** 8 (Landing, Auth, Explore, Campaign Details, Investment, Support, About, Contact)
- **Investor Routes:** 7 (Home, Dashboard, Account, Transactions, Notifications, Settings, Explore)
- **Business Routes:** 8 (Home, Dashboard, Financials, Listings, Company, Notifications, Settings, Explore)
- **Layouts:** 3 (Root, Investor, Business)
- **Shared Components:** Multiple (Headers, Cards, Forms, etc.)

## 🎯 Route Testing Checklist

After running `npm run dev`, test each route:

### Public Routes
- [ ] `/` redirects to `/bd`
- [ ] `/bd` loads with all sections
- [ ] `/auth` shows login/signup tabs
- [ ] `/explore` displays campaign grid with filters
- [ ] `/campaign/[id]` shows campaign details with tabs
- [ ] `/invest/[campaignId]` displays investment page
- [ ] `/support` shows support center with FAQs
- [ ] `/about` shows all content sections
- [ ] `/contact` renders contact form

### Investor Routes
- [ ] `/investor/home` displays welcome and quick actions
- [ ] `/investor/dashboard` shows comprehensive portfolio dashboard
- [ ] `/investor/account` renders profile with banner and verification
- [ ] `/investor/transactions` displays transaction ledger
- [ ] `/investor/notifications` lists grouped notifications
- [ ] `/investor/settings` shows all preference sections

### Business Routes
- [ ] `/business/home` displays business welcome and actions
- [ ] `/business/dashboard` shows operational control center
- [ ] `/business/financials` displays two-tab financial view
- [ ] `/business/listings` shows campaign list
- [ ] `/business/company` renders public company profile
- [ ] `/business/notifications` lists notifications
- [ ] `/business/settings` shows account settings sections

### Navigation
- [ ] Public header links work
- [ ] Investor sidebar navigation works
- [ ] Business sidebar navigation works
- [ ] Active route highlighting works
- [ ] Mobile responsive navigation

---

**All routes are fully implemented and ready for testing!**

