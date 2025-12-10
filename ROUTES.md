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
│   ├── Account Status Badges
│   ├── Personal Information Form
│   ├── KYC Information
│   └── Bank Details
│
├── /investor/notifications → Notifications
│   └── 6 Notifications
│       ├── Investment Successful
│       ├── Profit Share Received
│       ├── Campaign Update
│       ├── KYC Reminder
│       ├── Campaign Fully Funded
│       └── New Campaign Available
│
└── /investor/settings      → Settings
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
│   ├── Verification Status
│   ├── Basic Information
│   │   ├── Company Name
│   │   ├── Industry
│   │   ├── Registration Country
│   │   └── Description
│   ├── Contact Information
│   ├── Business Documents
│   │   ├── Trade License
│   │   ├── TIN Certificate
│   │   ├── Bank Statement
│   │   └── Shari'ah Compliance Cert
│   └── Financial Information
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
└── /business/settings      → Settings
    ├── Security
    │   ├── Change Password
    │   └── 2FA Setup
    ├── Team Access (Coming Soon)
    ├── Notification Preferences (6 toggles)
    └── Business Account Controls
        ├── Download Data
        ├── Pause Campaigns
        └── Deactivate Account
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

- **Total Routes:** 18 pages
- **Public Routes:** 5
- **Investor Routes:** 5
- **Business Routes:** 5
- **Layouts:** 3 (Root, Investor, Business)
- **Shared Components:** 4

## 🎯 Route Testing Checklist

After running `npm run dev`, test each route:

### Public Routes
- [ ] `/` redirects to `/bd`
- [ ] `/bd` loads with all sections
- [ ] `/auth` shows login/signup tabs
- [ ] `/explore` displays campaign grid
- [ ] `/about` shows all content sections
- [ ] `/contact` renders contact form

### Investor Routes
- [ ] `/investor/home` displays summary cards
- [ ] `/investor/dashboard` shows investment table
- [ ] `/investor/account` renders all forms
- [ ] `/investor/notifications` lists notifications
- [ ] `/investor/settings` shows all settings

### Business Routes
- [ ] `/business/home` displays business summary
- [ ] `/business/listings` shows campaign list
- [ ] `/business/company` renders profile forms
- [ ] `/business/notifications` lists notifications
- [ ] `/business/settings` shows all settings

### Navigation
- [ ] Public header links work
- [ ] Investor sidebar navigation works
- [ ] Business sidebar navigation works
- [ ] Active route highlighting works
- [ ] Mobile responsive navigation

---

**All routes are fully implemented and ready for testing!**

