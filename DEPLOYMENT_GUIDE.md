# Deployment Guide for Agarwood Site

## 🚀 Building the Project

### Step 1: Build for Production

Run the build command to create optimized production files:

```bash
npm run build
```

This will:
- Create a `dist/` folder with all production-ready files
- Optimize and minify JavaScript, CSS, and assets
- Generate hashed filenames for better caching
- Copy all images from `public/images/` to `dist/images/`

### Step 2: Preview the Build (Optional)

Test the production build locally before deploying:

```bash
npm run preview
```

This starts a local server to preview the built site at `http://localhost:4173`

---

## 📦 What Gets Deployed

After running `npm run build`, the **`dist/` folder** contains everything you need to deploy:

```
dist/
├── index.html              # Main HTML file
├── assets/                 # Optimized JS, CSS files
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── react-vendor-[hash].js
│   └── chart-vendor-[hash].js
├── images/                 # All images from public/images/
│   ├── 1.Project History/
│   ├── 2.Field Trial Documentation/
│   ├── 3. Gallery/
│   └── ...
├── _headers                # Cloudflare Pages headers (if applicable)
└── _redirects              # Cloudflare Pages redirects (if applicable)
```

**You only need to deploy the `dist/` folder contents.**

---

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Install Cloudflare CLI (Wrangler)**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   # Build first
   npm run build
   
   # Deploy the dist folder
   wrangler pages deploy dist
   ```

   Or connect your GitHub repo to Cloudflare Pages for automatic deployments.

---

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   # Build first
   npm run build
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

   Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

---

### Option 3: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   # Build first
   npm run build
   
   # Deploy
   vercel --prod
   ```

---

### Option 4: Traditional Web Hosting (cPanel, FTP, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder contents** to your web server:
   - Upload all files from `dist/` to your `public_html/` or `www/` directory
   - Make sure `index.html` is in the root directory
   - Ensure all subdirectories (like `images/`) are uploaded with their contents

3. **Important**: 
   - Upload the **contents** of `dist/`, not the `dist` folder itself
   - Your server root should contain `index.html` directly

---

### Option 5: GitHub Pages

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update `vite.config.js`** base path:
   ```js
   base: '/your-repo-name/',  // Replace with your GitHub repo name
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## 🔍 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview` to ensure everything works
- [ ] Check that all images load correctly
- [ ] Verify all sections render properly
- [ ] Test on mobile devices (responsive design)
- [ ] Check browser console for errors
- [ ] Verify all external links work

---

## 📝 Quick Deployment Commands

```bash
# Full build and deploy workflow
npm run build          # Build production files
npm run preview        # Test locally (optional)

# Then deploy the dist/ folder using your preferred method above
```

---

## 🐛 Troubleshooting

### Images not loading after deployment?

- Ensure `dist/images/` folder was uploaded completely
- Check that image paths use relative URLs (they should start with `/images/`)
- Verify file permissions on the server

### 404 errors on routes?

- For SPA (Single Page Application), configure your server to serve `index.html` for all routes
- Add a `_redirects` file (already included for Cloudflare Pages)
- Configure server rewrites to point all routes to `index.html`

### Build fails?

- Clear cache: `rm -rf dist node_modules/.vite`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (should be 16+)

---

## 📧 Need Help?

If you encounter issues during deployment, check:
1. Browser console for errors
2. Server logs
3. Network tab for failed requests
4. Ensure all files in `dist/` were uploaded correctly
