# How to Push Foundect to GitHub

## 📋 Prerequisites

1. You have a GitHub account
2. You have a repository named "foundect-platform" on GitHub
3. Git is installed on your computer

## 🚀 Step-by-Step Guide

### Option 1: Using Command Prompt (Recommended for Windows)

#### Step 1: Open Command Prompt
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```cmd
   cd D:\Foundect
   ```

#### Step 2: Remove Empty Folder (if exists)
```cmd
rmdir /s /q foundect-platform
```

#### Step 3: Configure Git (First Time Only)
If you haven't set up git before, run these commands:
```cmd
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Step 4: Initialize Git Repository
```cmd
git init
```

#### Step 5: Add All Files
```cmd
git add .
```

#### Step 6: Commit Files
```cmd
git commit -m "Initial commit: Complete Foundect MVP with all pages and components"
```

#### Step 7: Add GitHub Remote
Replace `YOUR_USERNAME` with your actual GitHub username:
```cmd
git remote add origin https://github.com/YOUR_USERNAME/foundect-platform.git
```

If you already added the remote before, update it:
```cmd
git remote set-url origin https://github.com/YOUR_USERNAME/foundect-platform.git
```

#### Step 8: Set Main Branch
```cmd
git branch -M main
```

#### Step 9: Push to GitHub
```cmd
git push -u origin main
```

If the repository already has files, you might need to force push (⚠️ this will overwrite):
```cmd
git push -u origin main --force
```

---

### Option 2: Using Git Bash

If you have Git Bash installed:

```bash
cd /d/Foundect

# Remove empty folder
rm -rf foundect-platform

# Configure git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize and commit
git init
git add .
git commit -m "Initial commit: Complete Foundect MVP with all pages and components"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/foundect-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Option 3: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop** (if not installed)
   - Go to: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Add Repository**
   - Click "File" → "Add Local Repository"
   - Choose folder: `D:\Foundect`
   - Click "Add Repository"

3. **Create Initial Commit**
   - You'll see all files listed
   - Add commit message: "Initial commit: Complete Foundect MVP"
   - Click "Commit to main"

4. **Publish to GitHub**
   - Click "Publish repository"
   - Name: `foundect-platform`
   - Uncheck "Keep this code private" (or keep checked if you want it private)
   - Click "Publish Repository"

Done! ✅

---

## 🔍 Verify Your Push

After pushing, verify on GitHub:

1. Go to: `https://github.com/YOUR_USERNAME/foundect-platform`
2. You should see all your files:
   - `app/` folder
   - `components/` folder
   - `README.md`
   - `package.json`
   - etc.

---

## 📝 What Gets Pushed

The following will be pushed to GitHub:

### Configuration Files
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `next.config.mjs`
- ✅ `.eslintrc.json`
- ✅ `.gitignore`

### Source Code
- ✅ `app/` - All pages (18 pages)
- ✅ `components/` - All UI components (15 components)
- ✅ `lib/` - Utility functions

### Documentation
- ✅ `README.md`
- ✅ `SETUP.md`
- ✅ `WINDOWS_SETUP.md`
- ✅ `PROJECT_SUMMARY.md`
- ✅ `ROUTES.md`
- ✅ `CHECKLIST.md`
- ✅ `GIT_PUSH_GUIDE.md` (this file)

### What's NOT Pushed (in .gitignore)
- ❌ `node_modules/` - Dependencies (too large)
- ❌ `.next/` - Build output
- ❌ `.env.local` - Environment variables

---

## 🔄 Future Updates

After making changes to your code, push updates with:

```cmd
git add .
git commit -m "Description of your changes"
git push
```

### Example Commits:
```cmd
git commit -m "Add Supabase authentication"
git commit -m "Fix explore page loading issue"
git commit -m "Update investor dashboard UI"
```

---

## 🛠️ Troubleshooting

### Issue: "Permission denied"
**Solution:** You need to authenticate with GitHub
- Use GitHub Desktop (easiest)
- Or set up SSH keys: https://docs.github.com/en/authentication

### Issue: "Repository not found"
**Solution:** Make sure the repository exists on GitHub
1. Go to https://github.com/new
2. Create repository named `foundect-platform`
3. Don't initialize with README (we already have one)
4. Try pushing again

### Issue: "Updates were rejected"
**Solution:** The remote has changes you don't have locally
```cmd
git pull origin main --rebase
git push origin main
```

Or force push (⚠️ overwrites remote):
```cmd
git push origin main --force
```

### Issue: "fatal: not a git repository"
**Solution:** Initialize git first
```cmd
git init
```

---

## 📱 Clone on Another Computer

To work on this project from another computer:

```cmd
git clone https://github.com/YOUR_USERNAME/foundect-platform.git
cd foundect-platform
npm install
npm run dev
```

---

## 🌿 Branching (Optional)

For feature development, use branches:

```cmd
# Create and switch to new branch
git checkout -b feature/add-supabase

# Make changes, then commit
git add .
git commit -m "Add Supabase integration"

# Push branch
git push origin feature/add-supabase

# Merge to main (on GitHub via Pull Request)
```

---

## ✅ Quick Reference

```cmd
# Check status
git status

# See commit history
git log --oneline

# See remote URL
git remote -v

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

---

## 🎯 Recommended Workflow

1. **Work on feature**
   ```cmd
   # Make changes to files
   ```

2. **Test locally**
   ```cmd
   npm run dev
   ```

3. **Commit changes**
   ```cmd
   git add .
   git commit -m "Descriptive message"
   ```

4. **Push to GitHub**
   ```cmd
   git push
   ```

5. **Repeat!**

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
- GitHub Desktop: https://desktop.github.com

---

**Good luck with your push! 🚀**

