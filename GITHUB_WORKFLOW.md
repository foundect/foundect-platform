# GitHub Workflow - Quick Reference

## ✅ Initial Setup Complete!

Your Foundect project is now connected to GitHub at:
**https://github.com/foundect/foundect-platform**

---

## 🔄 How to Push Future Changes

### Method 1: Using Cursor's Source Control (Easiest)

1. **Make changes to your files**
2. **Open Source Control**: Press `Ctrl + Shift + G`
3. **Stage changes**: Click the **"+"** icon next to "Changes"
4. **Write commit message**: Type a description of what you changed
5. **Commit**: Click the **✓** button (or press `Ctrl + Enter`)
6. **Push**: Click the **"Sync Changes"** button (↻ icon)

Done! ✅

---

### Method 2: Using Cursor's Terminal

1. **Open Terminal**: Press `` Ctrl + ` ``

2. **Check what changed**:
   ```bash
   git status
   ```

3. **Add all changes**:
   ```bash
   git add .
   ```

4. **Commit with message**:
   ```bash
   git commit -m "Your description of changes"
   ```

5. **Push to GitHub**:
   ```bash
   git push
   ```

---

## 📝 Example Workflow

Let's say you just added Supabase authentication:

### In Cursor's Terminal:
```bash
git add .
git commit -m "Add Supabase authentication and user login"
git push
```

### Or in Source Control Panel:
1. Press `Ctrl + Shift + G`
2. Stage all files (click +)
3. Type: "Add Supabase authentication and user login"
4. Click ✓ Commit
5. Click Sync Changes

---

## 🎯 Common Git Commands

### Check Status
```bash
git status
```
Shows what files have changed

### View Commit History
```bash
git log --oneline
```
Shows your recent commits

### Pull Latest Changes
```bash
git pull
```
Gets latest changes from GitHub (useful if working from multiple computers)

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Discard All Local Changes
```bash
git reset --hard HEAD
```
⚠️ Warning: This deletes all uncommitted changes!

---

## 📋 Good Commit Message Examples

✅ **Good:**
- "Add investor dashboard with portfolio tracking"
- "Fix explore page loading error"
- "Update auth page with loading states"
- "Integrate Supabase authentication"
- "Add KYC form to investor account page"

❌ **Bad:**
- "Update"
- "Fix stuff"
- "Changes"
- "asdf"

---

## 🌿 Working with Branches (Optional)

For larger features, use branches:

### Create New Branch
```bash
git checkout -b feature/supabase-auth
```

### Switch Between Branches
```bash
git checkout main
git checkout feature/supabase-auth
```

### Merge Branch to Main
```bash
git checkout main
git merge feature/supabase-auth
git push
```

---

## 🔧 Troubleshooting

### "Your branch is behind"
```bash
git pull
git push
```

### "Merge conflict"
1. Open the conflicted files in Cursor
2. Resolve conflicts (Cursor will highlight them)
3. Save files
4. Run:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   git push
   ```

### "Authentication failed"
You need to authenticate with GitHub:
1. In Cursor, press `Ctrl + Shift + P`
2. Type "GitHub: Sign in"
3. Follow the prompts

---

## 🚀 Automatic Sync in Cursor

### Enable Auto-Fetch
1. Press `Ctrl + ,` (Settings)
2. Search for "git autofetch"
3. Enable it
4. Now Cursor will automatically check for changes

### Enable Auto-Save
1. Press `Ctrl + ,` (Settings)
2. Search for "auto save"
3. Set to "afterDelay"
4. Your files save automatically!

---

## 📱 Working from Multiple Computers

### On Computer 1 (after making changes):
```bash
git add .
git commit -m "Update dashboard UI"
git push
```

### On Computer 2 (before starting work):
```bash
git pull
```

Always pull before starting work on a different computer!

---

## ✅ Daily Workflow

1. **Start of day**: `git pull` (get latest changes)
2. **Make changes**: Edit your files
3. **Save often**: `Ctrl + S`
4. **Commit regularly**: Every major change
5. **Push at end of day**: `git push`

---

## 🎨 Cursor Source Control Tips

### View Changes
- Click on a file in Source Control to see what changed
- Green = added lines
- Red = removed lines

### Discard Changes
- Right-click a file → "Discard Changes"
- Reverts that file to last commit

### Stage Specific Files
- Click + next to individual files
- Only commits those files

---

## 🔐 Your Git Configuration

Already set up:
```
Name: foundect
Email: login@foundect.com
Repository: https://github.com/foundect/foundect-platform
Branch: main
```

---

## 📞 Quick Help

- **View in GitHub**: https://github.com/foundect/foundect-platform
- **Git Docs**: https://git-scm.com/doc
- **Cursor Docs**: https://cursor.sh/docs

---

## 🎉 You're All Set!

Your workflow is now:
1. Make changes in Cursor
2. Press `Ctrl + Shift + G`
3. Stage, commit, and sync
4. Changes appear on GitHub automatically!

**Happy coding! 🚀**





