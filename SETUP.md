# Complete Setup Guide - Phase 3 Parity Build

## Prerequisites
- GitHub account (free at github.com)
- Cloudflare account (free tier at cloudflare.com)
- Netlify account (optional, for CMS - free at netlify.com)

---

## STEP-BY-STEP SETUP

### Step 1: Create GitHub Repository (5 minutes)

1. Go to **github.com** and sign in
2. Click **"+" → "New repository"**
3. Repository name: `balajiganapathy-website`
4. Description: "Global Social Impact Executive Portfolio"
5. Choose: **PUBLIC** (required for Cloudflare)
6. Click **"Create repository"**

### Step 2: Upload All Files (5 minutes)

**Option A: Web Upload**
1. In GitHub repo, click **"Add file" → "Upload files"**
2. Select all files from this ZIP
3. Commit message: "Initial commit: Phase 3 Build"
4. Click **"Commit changes"**

**Option B: Git CLI**
```bash
git clone https://github.com/YOUR_USERNAME/balajiganapathy-website.git
cd balajiganapathy-website
# Copy all files from ZIP here
git add .
git commit -m "Initial commit: Phase 3 Build - Oct 24 2025"
git push origin main
```

### Step 3: Deploy to Cloudflare Pages (5 minutes)

1. Go to **https://dash.cloudflare.com/**
2. Sign up if needed (free tier)
3. Go to **"Pages"** (left sidebar)
4. Click **"Create a project"**
5. Select **"Connect to Git"**
6. Choose **"GitHub"**
7. Authenticate and select: `balajiganapathy-website`
8. Build settings:
   - Framework: **None**
   - Build command: **LEAVE BLANK**
   - Build output: **LEAVE BLANK**
9. Click **"Save and Deploy"**

**Wait 30-60 seconds...**

### 🎉 YOUR SITE IS LIVE!

Access at: `https://your-project-name.pages.dev`

---

## OPTIONAL: CUSTOM DOMAIN

1. In Cloudflare Pages, click **"Custom domains"**
2. Add your domain: `balajiganapathy.com`
3. Follow DNS setup steps
4. Wait 24-48 hours for propagation

---

## OPTIONAL: ENABLE CMS

For content management without coding:

1. Go to **netlify.com** and sign up
2. Click **"Add new site"**
3. Choose **"Import an existing project"**
4. Select **"GitHub"**
5. Choose your GitHub repo
6. Build settings: Leave BLANK
7. Click **"Deploy site"**
8. Go to **"Identity" → "Enable Identity"**
9. Invite your email address
10. Accept invitation email
11. Visit `yourdomain.com/admin` and sign in

---

## VERIFICATION CHECKLIST

After setup, verify:
- [ ] Site accessible at Cloudflare URL
- [ ] All 4 personas load (Leader, Speaker, Advisor, Coach)
- [ ] Swipe navigation works (on mobile)
- [ ] Arrow navigation works (on desktop)
- [ ] Dark mode toggle works
- [ ] Contact form opens
- [ ] /admin/ loads (if CMS enabled)
- [ ] Responsive on mobile & desktop

---

## TROUBLESHOOTING

### Site not deploying?
- Check GitHub repo is PUBLIC
- Verify all files uploaded
- Check Cloudflare Pages build log

### Custom domain not working?
- Wait 24-48 hours for DNS
- Check Cloudflare nameservers
- Try clearing cache

### CMS admin not loading?
- Verify Netlify Identity enabled
- Check email invitation accepted
- Clear browser cache

### Content not updating?
- Check commit in GitHub
- Verify Cloudflare rebuilt
- Clear browser cache
- Check browser console

---

## NEXT STEPS

1. Populate content via CMS or edit JSON files
2. Upload images via CMS to /media/
3. Test thoroughly on all devices
4. Share with colleagues
5. Monitor analytics

---

See other documentation files for more details:
- README.md - Feature overview
- DEPLOYMENT-GUIDE.md - Detailed guide
- GAP-ANALYSIS-COMPLETE.md - Design audit

**You're all set! Ready to deploy? 🚀**
