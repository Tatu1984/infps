# 🚀 Quick Start - Deploy in 10 Minutes

## Fastest Way to Deploy www.infinititechpartners.com

---

## Step 1: Push to GitHub (3 minutes)

```bash
git add .
git commit -m "Ready for deployment"
git push
```

If you haven't set up Git yet:

```bash
git init
git add .
git commit -m "Initial commit"
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

3. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes

Done! You'll get a URL like: `your-site.vercel.app`

---

## Step 3: Connect Your Domain (2 minutes)

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

## 🎉 You're Live!

Visit: `https://www.infinititechpartners.com`

✅ Website loads
✅ All pages work
✅ HTTPS enabled
✅ Global CDN
✅ Auto-deployments enabled

---

## What You Got:

✅ Live website at www.infinititechpartners.com
✅ HTTPS/SSL automatically enabled
✅ Global CDN for fast loading worldwide
✅ Automatic deployments (push to GitHub = auto-deploy)
✅ Built-in analytics
✅ Zero configuration

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
```
Then push to GitHub again.

**Other issues?**
- Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- Vercel docs: https://vercel.com/docs

---

## Next Steps

1. **Monitor your site:**
   - https://uptimerobot.com (free uptime monitoring)

2. **SEO:**
   - Submit to Google Search Console
   - Add sitemap

3. **Analytics:**
   - Vercel Analytics (built-in)
   - Google Analytics (optional)

---

**Questions?** Check the full deployment guide or Vercel documentation.
