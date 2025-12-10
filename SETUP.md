# Foundect - Setup Guide

## Quick Start

### Windows PowerShell Setup

If you encounter PowerShell execution policy errors, you have two options:

**Option 1: Use Command Prompt instead**
```cmd
cd D:\Foundect
npm install
npm run dev
```

**Option 2: Enable PowerShell scripts (Run PowerShell as Administrator)**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:
```powershell
npm install
npm run dev
```

### Alternative: Use Git Bash or WSL

If you have Git Bash or WSL installed:
```bash
cd /d/Foundect
npm install
npm run dev
```

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Verify Installation

After running `npm run dev`, you should see:
```
  ▲ Next.js 15.0.3
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

## Testing Routes

Once the server is running, test these routes:

### Public Routes
- http://localhost:3000 → redirects to /bd
- http://localhost:3000/bd → Bangladesh landing page
- http://localhost:3000/auth → Login/Signup page
- http://localhost:3000/explore → Campaign listings
- http://localhost:3000/about → About page
- http://localhost:3000/contact → Contact form

### Investor Routes (No auth protection yet)
- http://localhost:3000/investor/home
- http://localhost:3000/investor/dashboard
- http://localhost:3000/investor/account
- http://localhost:3000/investor/notifications
- http://localhost:3000/investor/settings

### Business Routes (No auth protection yet)
- http://localhost:3000/business/home
- http://localhost:3000/business/listings
- http://localhost:3000/business/company
- http://localhost:3000/business/notifications
- http://localhost:3000/business/settings

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
Clear Next.js cache and reinstall:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### TypeScript Errors
Build the project to see all TypeScript errors:
```bash
npm run build
```

## Next Steps After Setup

1. ✅ Verify all routes load correctly
2. ✅ Check responsive design on mobile
3. ✅ Test navigation between pages
4. 🔜 Set up Supabase project
5. 🔜 Implement authentication
6. 🔜 Connect backend APIs

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Environment Variables (Future)

Create a `.env.local` file for:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Need Help?

- Check the main [README.md](./README.md) for project overview
- Review the project structure in the README
- All TODO comments in code indicate future implementation points

