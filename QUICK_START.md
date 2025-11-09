# 🚀 Quick Start - Deploy in 15 Minutes

## Fastest Way to Deploy www.infinititechpartners.com

---

## Step 1: Push to GitHub (5 minutes)

### Option A: Use the Setup Script (Easiest)

```bash
./deploy-setup.sh
```

Follow the prompts!

### Option B: Manual Setup

1. Create repository on GitHub: https://github.com/new
2. Run these commands:

```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/infinititech-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel (5 minutes)

1. **Sign up:** https://vercel.com/signup
   - Click "Continue with GitHub"

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your repository
   - Click "Import"

3. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = nwa9weet
   NEXT_PUBLIC_SANITY_DATASET = production
   ```

4. **Click "Deploy"**
   - Wait 2-3 minutes
   - Done! You'll get a URL like: `your-site.vercel.app`

---

## Step 3: Connect Your Domain (5 minutes)

### In Vercel:
1. Go to Settings → Domains
2. Add: `infinititechpartners.com`
3. Add: `www.infinititechpartners.com`

### In Your Domain Registrar (GoDaddy/Namecheap/etc):
1. Go to DNS settings
2. Add **A Record:**
   - Name: `@`
   - Value: `76.76.21.21`

3. Add **CNAME Record:**
   - Name: `www`
   - Value: `cname.vercel-dns.com`

4. **Delete old parking page records**

5. Wait 15-30 minutes for DNS to update

---

## Step 4: Test (1 minute)

Visit: `https://www.infinititechpartners.com`

✅ Website loads
✅ All pages work
✅ HTTPS is enabled

---

## 🎉 You're Live!

**Need help?** See full guide: `STEP_BY_STEP_DEPLOYMENT.md`

---

## What You Got:

✅ Live website at www.infinititechpartners.com
✅ HTTPS/SSL automatically enabled
✅ Global CDN for fast loading
✅ Sanity CMS for content management
✅ Automatic deployments (push to GitHub = auto-deploy)

---

## Troubleshooting

**"Domain not found"?**
- Wait 30 minutes for DNS propagation
- Check: https://dnschecker.org

**"Build failed"?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
git add .
git commit -m "Fix build"
git push
```

**Other issues?**
- Check `STEP_BY_STEP_DEPLOYMENT.md` (Troubleshooting section)
- Vercel docs: https://vercel.com/docs

---

## Next Steps

1. **Add Content via Sanity CMS:**
   - Visit: `/studio` on your deployed site
   - Add blog posts, portfolio items, etc.

2. **Set Up Monitoring:**
   - https://uptimerobot.com (free)

3. **SEO:**
   - Submit to Google Search Console

---

**Questions?** Check the full deployment guide or Vercel documentation.
