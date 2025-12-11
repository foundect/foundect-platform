# Foundect - Liquid Glass Design System

## 🎨 Overview

Foundect has been redesigned with a modern **Liquid Glass** visual system featuring:
- Glassmorphism effects with backdrop blur
- Smooth animations and micro-interactions
- Consistent design tokens
- Fully accessible components
- Mobile-first responsive design
- AI chat integration ready

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

---

## 📁 Project Structure

```
foundect/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── bd/page.tsx              # Landing page (redesigned)
│   ├── auth/                    # Auth pages (redesigned)
│   │   ├── page.tsx            # Login/Signup entry
│   │   ├── investor/           # Investor signup flow
│   │   └── business/           # Business signup flow
│   ├── investor/                # Investor dashboard
│   └── business/                # Business dashboard
│
├── components/
│   ├── ui/                      # Glass UI Components
│   │   ├── GlassButton.tsx     # ✅ Primary button component
│   │   ├── GlassCard.tsx       # ✅ Card with glass effect
│   │   ├── GlassInput.tsx      # ✅ Form input
│   │   ├── GlassSelect.tsx     # ✅ Dropdown select
│   │   ├── GlassTextarea.tsx   # ✅ Multi-line input
│   │   ├── StatCard.tsx        # ✅ Animated stat display
│   │   ├── GlassTile.tsx       # ✅ Feature tile
│   │   ├── GlassNavBar.tsx     # ✅ Mobile navigation
│   │   └── AIChatDrawer.tsx    # ✅ AI chat interface
│   │
│   └── layouts/                 # Layout components
│       ├── PublicHeader.tsx    # ✅ Updated with glass
│       ├── AuthCard.tsx        # ✅ Updated with glass
│       ├── DashboardSidebar.tsx
│       └── DashboardTopbar.tsx
│
├── styles/
│   └── glass.css               # ✅ Glass utility classes
│
├── public/
│   └── assets/                 # Place design assets here
│       ├── auth_right_bg.png
│       ├── tile_blue_ref_1.png
│       ├── tile_blue_ref_2.png
│       └── glass_icon_ai.png
│
├── tailwind.config.ts          # ✅ Updated with glass tokens
└── LIQUID_GLASS_REDESIGN.md    # Complete implementation guide
```

---

## 🎨 Design System

### Color Palette

```typescript
// Primary Blues
blue-50:  #EAF3FF  // Lightest blue
blue-100: #DCEBFF  // Light blue
blue-200: #C8DBF5  // Medium blue
blue-500: #0E73F9  // Primary blue

// Accent
accent-1: #8AB6FF  // Accent blue

// Text
text-900: #0f1720  // Primary text

// Glass Effects
glass-white:  rgba(255, 255, 255, 0.55)
glass-bg:     rgba(255, 255, 255, 0.08)
glass-border: rgba(255, 255, 255, 0.18)
```

### Border Radius

```css
glass: 12px   /* Small elements */
card:  20px   /* Cards */
pill:  999px  /* Buttons, pills */
```

### Shadows

```css
glass:    0 8px 24px rgba(0, 0, 0, 0.08)
glass-lg: 0 12px 32px rgba(0, 0, 0, 0.12)
glow:     0 0 20px rgba(14, 115, 249, 0.3)
```

### Animations

```css
float:  3s ease-in-out infinite
glow:   2s ease-in-out infinite
timing: cubic-bezier(.17,.67,.83,.67)
```

---

## 🧩 Component Library

### GlassButton

```typescript
import { GlassButton } from "@/components/ui/GlassButton";

<GlassButton variant="primary" size="lg" icon={<ArrowRight />}>
  Get Started
</GlassButton>

// Variants: primary, secondary, ghost
// Sizes: sm, default, lg, icon
// Props: loading, icon, disabled
```

### GlassCard

```typescript
import { GlassCard } from "@/components/ui/GlassCard";

<GlassCard size="lg" clickable onClick={handleClick}>
  <GlassCardHeader>
    <GlassCardTitle>Title</GlassCardTitle>
    <GlassCardDescription>Description</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent>
    Content here
  </GlassCardContent>
</GlassCard>
```

### GlassInput

```typescript
import { GlassInput } from "@/components/ui/GlassInput";

<GlassInput
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  floatingLabel
  error="Error message"
  required
/>
```

### StatCard

```typescript
import { StatCard } from "@/components/ui/StatCard";

<StatCard
  title="Total Invested"
  value="৳2,50,000"
  change={{ value: 12.5, trend: "up" }}
  icon={<DollarSign className="h-6 w-6" />}
  animated
/>
```

### GlassTile

```typescript
import { GlassTile } from "@/components/ui/GlassTile";

<GlassTile
  title="100% Halal"
  description="All investments are Shari'ah-compliant"
  icon={<Shield className="h-6 w-6 text-blue-500" />}
  backgroundImage="/assets/tile_blue_ref_1.png"
  badge="NEW"
  href="/explore"
/>
```

### GlassNavBar (Mobile)

```typescript
import { GlassNavBar } from "@/components/ui/GlassNavBar";

<GlassNavBar onAIClick={() => setAIDrawerOpen(true)} />
```

### AIChatDrawer

```typescript
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";

const [aiOpen, setAIOpen] = useState(false);

<AIChatDrawer 
  open={aiOpen} 
  onClose={() => setAIOpen(false)} 
/>
```

---

## 🔧 Setup Instructions

### 1. Place Assets

Copy your design assets to `public/assets/`:
- `auth_right_bg.png`
- `tile_blue_ref_1.png`
- `tile_blue_ref_2.png`
- `glass_icon_ai.png`
- `foundect_logo_wordmark.png`

### 2. Environment Variables

Create `.env.local`:

```env
# Supabase (when ready)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Backend (when ready)
NEXT_PUBLIC_AI_API_URL=your_ai_api_url
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📱 Responsive Breakpoints

```css
Mobile:  < 768px  (Bottom GlassNavBar)
Tablet:  768px+   (Collapsed sidebar)
Desktop: 1024px+  (Full sidebar + topbar)
```

---

## ♿ Accessibility Features

- ✅ Keyboard navigation support
- ✅ ARIA labels on all interactive elements
- ✅ Focus visible states
- ✅ Color contrast >= 4.5:1
- ✅ Screen reader friendly
- ✅ Semantic HTML

---

## 🔌 Backend Integration Points

### Authentication (Supabase)

```typescript
// app/auth/page.tsx
const handleLogin = async (email, password) => {
  // TODO: SUPABASE AUTH HOOKS
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
};
```

### Email Verification

```typescript
// app/auth/investor/verify/page.tsx
const handleVerify = async (otp) => {
  // TODO: SUPABASE EMAIL VERIFICATION
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: 'email',
  });
};
```

### File Upload (KYC)

```typescript
// app/investor/account/page.tsx
const handleFileUpload = async (file) => {
  // TODO: Upload files to Supabase storage
  const { data, error } = await supabase.storage
    .from('kyc-documents')
    .upload(`${userId}/${file.name}`, file);
};
```

### AI Chat

```typescript
// components/ui/AIChatDrawer.tsx
const handleSend = async (message) => {
  // TODO: Integrate AI backend API
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
  });
};
```

---

## 🎯 Implementation Status

### ✅ Completed
- Design system tokens
- Glass utility CSS
- All UI components
- Layout components (updated)
- Component documentation

### ⏳ In Progress
- Landing page redesign
- Auth flow redesign
- Dashboard pages redesign

### 📋 TODO
- Supabase authentication integration
- Email OTP verification
- File upload for KYC
- AI backend integration
- Real campaign data
- Payment simulation

---

## 🐛 Troubleshooting

### Issue: Glass effects not showing
**Solution:** Ensure `styles/glass.css` is imported in `app/globals.css`

### Issue: Assets not loading
**Solution:** Check files are in `public/assets/` and paths start with `/assets/`

### Issue: Animations laggy
**Solution:** Use `will-change` sparingly, check browser DevTools Performance

### Issue: Mobile nav not showing
**Solution:** GlassNavBar has `md:hidden` - only shows on mobile

---

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🤝 Contributing

1. Follow the glass design system
2. Use existing components
3. Maintain accessibility
4. Add TODO markers for backend
5. Test on mobile and desktop

---

## 📞 Support

For implementation help, refer to:
- `LIQUID_GLASS_REDESIGN.md` - Complete implementation guide
- Component files - Usage examples in comments
- This README - Setup and API reference

---

**Happy Building! 🚀**

