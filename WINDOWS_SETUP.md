# Windows Setup Guide for Foundect

## 🪟 Windows-Specific Instructions

### PowerShell Execution Policy Issue

If you see this error when running `npm install`:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running 
scripts is disabled on this system.
```

### Solution Options

#### Option 1: Use Command Prompt (Recommended for Quick Start)

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to project:
   ```cmd
   cd D:\Foundect
   ```
4. Run commands:
   ```cmd
   npm install
   npm run dev
   ```

#### Option 2: Enable PowerShell Scripts (One-Time Setup)

1. Open PowerShell as Administrator:
   - Press `Win + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Type `Y` and press Enter to confirm

4. Close and reopen PowerShell (normal, not admin)

5. Navigate to project:
   ```powershell
   cd D:\Foundect
   ```

6. Run commands:
   ```powershell
   npm install
   npm run dev
   ```

#### Option 3: Use Git Bash (If Installed)

1. Open Git Bash
2. Navigate to project:
   ```bash
   cd /d/Foundect
   ```
3. Run commands:
   ```bash
   npm install
   npm run dev
   ```

#### Option 4: Use WSL (Windows Subsystem for Linux)

If you have WSL installed:

1. Open WSL terminal
2. Navigate to project:
   ```bash
   cd /mnt/d/Foundect
   ```
3. Run commands:
   ```bash
   npm install
   npm run dev
   ```

## 📦 Step-by-Step Installation

### 1. Verify Node.js Installation

Open Command Prompt and check:
```cmd
node --version
npm --version
```

You should see:
- Node.js: v18.0.0 or higher
- npm: v9.0.0 or higher

If not installed, download from: https://nodejs.org/

### 2. Navigate to Project

```cmd
cd D:\Foundect
```

### 3. Install Dependencies

```cmd
npm install
```

This will install:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- All other dependencies

**Expected time:** 2-5 minutes

### 4. Start Development Server

```cmd
npm run dev
```

You should see:
```
  ▲ Next.js 15.0.3
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

### 5. Open Browser

Navigate to: http://localhost:3000

The page should automatically redirect to `/bd` (Bangladesh landing page).

## 🔍 Troubleshooting

### Issue: Port 3000 Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```cmd
npm run dev -- -p 3001
```

Then open: http://localhost:3001

### Issue: Module Not Found

**Error:**
```
Module not found: Can't resolve '@/components/...'
```

**Solution:**
```cmd
# Delete node_modules and .next
rmdir /s /q node_modules
rmdir /s /q .next

# Reinstall
npm install
npm run dev
```

### Issue: TypeScript Errors

**Solution:**
```cmd
# Build to see all errors
npm run build
```

All TypeScript errors should be resolved after `npm install`.

### Issue: Slow Installation

**Solution:**
Try using a different package manager:

```cmd
# Using Yarn
npm install -g yarn
yarn install
yarn dev

# Using pnpm
npm install -g pnpm
pnpm install
pnpm dev
```

## 🎯 Testing the Installation

### 1. Check All Public Routes

Open these URLs in your browser:

- http://localhost:3000 (should redirect to /bd)
- http://localhost:3000/bd
- http://localhost:3000/auth
- http://localhost:3000/explore
- http://localhost:3000/about
- http://localhost:3000/contact

### 2. Check Investor Routes

- http://localhost:3000/investor/home
- http://localhost:3000/investor/dashboard
- http://localhost:3000/investor/account
- http://localhost:3000/investor/notifications
- http://localhost:3000/investor/settings

### 3. Check Business Routes

- http://localhost:3000/business/home
- http://localhost:3000/business/listings
- http://localhost:3000/business/company
- http://localhost:3000/business/notifications
- http://localhost:3000/business/settings

### 4. Test Navigation

- Click navigation links in the public header
- Click sidebar items in dashboards
- Test responsive design (resize browser)
- Test forms (they won't submit, just console.log)

## 🛠️ Development Commands

```cmd
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run linter and fix issues
npm run lint -- --fix
```

## 📁 Project Structure in Windows

```
D:\Foundect\
├── app\                    # Next.js app directory
│   ├── bd\                # Landing page
│   ├── auth\              # Authentication
│   ├── investor\          # Investor dashboard
│   ├── business\          # Business dashboard
│   └── ...
├── components\            # React components
│   ├── ui\               # shadcn/ui components
│   └── layouts\          # Layout components
├── lib\                   # Utility functions
├── node_modules\          # Dependencies (after npm install)
├── public\                # Static files
├── package.json           # Dependencies list
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
└── README.md              # Documentation
```

## 🔥 Hot Reload

Next.js supports hot reload. When you save a file:
- Changes appear instantly in the browser
- No need to restart the server
- State is preserved when possible

## 🌐 Network Access

To access from other devices on your network:

1. Find your IP address:
   ```cmd
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. Start dev server:
   ```cmd
   npm run dev
   ```

3. Access from other devices:
   ```
   http://192.168.1.100:3000
   ```

## 📱 Mobile Testing

### Using Chrome DevTools
1. Open http://localhost:3000
2. Press `F12` to open DevTools
3. Click device toolbar icon (or `Ctrl+Shift+M`)
4. Select device (iPhone, iPad, etc.)

### Using Real Device
1. Connect device to same WiFi
2. Find your computer's IP (see above)
3. Open browser on device
4. Navigate to `http://YOUR_IP:3000`

## 🎨 VS Code Setup (Recommended)

### Recommended Extensions
1. **ESLint** - Microsoft
2. **Tailwind CSS IntelliSense** - Tailwind Labs
3. **TypeScript Vue Plugin (Volar)** - Vue
4. **Auto Rename Tag** - Jun Han
5. **Path Intellisense** - Christian Kohler

### VS Code Settings
Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## 💡 Tips for Windows Development

1. **Use Windows Terminal** (if available)
   - Better than Command Prompt
   - Supports tabs
   - Better colors and fonts

2. **Keep Node.js Updated**
   - Check for updates regularly
   - Use LTS (Long Term Support) version

3. **Antivirus Exclusions**
   - Add `node_modules` folder to exclusions
   - Speeds up npm install significantly

4. **Use SSD**
   - Store project on SSD for faster builds
   - npm install is much faster on SSD

5. **Close Unnecessary Programs**
   - Next.js can be memory-intensive
   - Close other apps during development

## 🆘 Getting Help

If you encounter issues:

1. Check the error message carefully
2. Search for the error on Google
3. Check Next.js documentation: https://nextjs.org/docs
4. Check shadcn/ui docs: https://ui.shadcn.com
5. Review the project README.md and SETUP.md

## ✅ Success Checklist

After setup, you should be able to:

- [x] Run `npm install` without errors
- [x] Run `npm run dev` successfully
- [x] Access http://localhost:3000
- [x] See the Bangladesh landing page
- [x] Navigate between pages
- [x] View investor dashboard
- [x] View business dashboard
- [x] See responsive design on mobile view

## 🎉 You're Ready!

Once all checks pass, you're ready to start developing!

Next steps:
1. Read through the code structure
2. Review the TODO comments
3. Plan Supabase integration
4. Start building backend features

---

**Happy Coding! 🚀**

