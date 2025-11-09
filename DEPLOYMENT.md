# Deployment Guide for www.infinititechpartners.com

## Overview

This is a Next.js 14 website ready for deployment to Vercel. No database or CMS required.

---

## Deployment to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Sign up/Login to Vercel:**
   - Visit https://vercel.com/signup
   - Click "Continue with GitHub"

3. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your repository
   - Click "Import"

4. **Configure & Deploy:**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Click "Deploy"

5. **Wait 2-3 minutes** - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

---

## Custom Domain Setup

### In Vercel Dashboard:
1. Go to Settings → Domains
2. Add: `infinititechpartners.com`
3. Add: `www.infinititechpartners.com`

### In Your Domain Registrar:
1. Go to DNS settings
2. Add **A Record:**
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: 3600

3. Add **CNAME Record:**
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 3600

4. **Delete** old parking page records

5. Wait 15-30 minutes for DNS propagation

---

## Alternative Deployment Options

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Build:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Custom Server (VPS/AWS/DigitalOcean)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Use PM2 for process management:**
   ```bash
   npm i -g pm2
   pm2 start npm --name "infinititech" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name infinititechpartners.com www.infinititechpartners.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Certbot:**
   ```bash
   sudo certbot --nginx -d infinititechpartners.com -d www.infinititechpartners.com
   ```

---

## Pre-Deployment Checklist

- [x] Build succeeds locally (`npm run build`)
- [ ] All pages load correctly
- [ ] Test on mobile devices
- [ ] Images and assets load properly
- [ ] Navigation works correctly
- [ ] Contact form functions (if applicable)

---

## Build Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Troubleshooting

### "Build failed"
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### "Domain not found"
- Wait 30 minutes for DNS propagation
- Check DNS: https://dnschecker.org

### Need help?
- Vercel: https://vercel.com/support
- Next.js: https://nextjs.org/docs

---

## Performance

Your site is optimized for:
- ✅ Static generation
- ✅ Fast page loads
- ✅ SEO
- ✅ Mobile responsiveness
- ✅ Global CDN (with Vercel)
- ✅ Automatic HTTPS
