# Security Guide: Protecting API Keys on GitHub Pages

## 🚨 Current Security Issue

Your documentation site has a **Gemini API key** that needs protection. GitHub Pages is a static hosting service, which means:

- All JavaScript code is publicly accessible
- API keys bundled into the build are visible to anyone
- There is NO way to truly hide secrets in frontend code

## ✅ Solution 1: Backend API Proxy (RECOMMENDED)

The most secure approach is to **never expose API keys to the frontend**.

### Architecture:
```
Browser → Your Backend API → Gemini API
         (protects key)
```

### Option A: Serverless Functions (Free Tier Available)

#### Using Vercel (Easiest):

1. **Create a Vercel account** (free): https://vercel.com

2. **Create API endpoint** (`api/chat.js`):
```javascript
// api/chat.js
export default async function handler(req, res) {
  // Enable CORS for your GitHub Pages domain
  res.setHeader('Access-Control-Allow-Origin', 'https://yourusername.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    // Call Gemini API with YOUR secret key (stored in Vercel env vars)
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY // Secret, stored in Vercel
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
}
```

3. **Deploy to Vercel**:
```bash
npm install -g vercel
vercel login
vercel
```

4. **Add secret in Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your key
   - This key is NEVER exposed to frontend

5. **Update your frontend code**:
```typescript
// components/AIAssistant.tsx
const response = await fetch('https://your-project.vercel.app/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: userMessage })
});
```

#### Using Netlify Functions:

Similar to Vercel but using Netlify:

1. Create `netlify/functions/chat.js`
2. Deploy to Netlify
3. Add environment variable in Netlify dashboard
4. Call `/.netlify/functions/chat` from frontend

#### Using Cloudflare Workers (Free tier):

1. Create worker at https://workers.cloudflare.com/
2. Similar proxy logic
3. Deploy and call from frontend

---

## ✅ Solution 2: API Key Restrictions (Partial Protection)

If you must use keys in frontend (NOT RECOMMENDED), at least restrict them:

### For Google/Gemini API Keys:

1. **Go to Google Cloud Console**: https://console.cloud.google.com/apis/credentials

2. **Click on your API Key**

3. **Add Application Restrictions**:
   - Select "HTTP referrers (web sites)"
   - Add allowed referrers:
     ```
     https://yourusername.github.io/*
     https://yourusername.github.io/bookhere-documentation-hub/*
     ```

4. **Add API Restrictions**:
   - Restrict key to only the APIs you need (e.g., "Generative Language API")

### ⚠️ Important Limitations:
- Keys are still visible in browser DevTools
- Malicious users can still use the key from your domain
- You'll be charged for any usage (including abuse)
- This is NOT real security, just a speed bump

---

## ✅ Solution 3: Remove AI Features from Static Site

If implementing a backend is not feasible:

1. **Remove AI Assistant** from the GitHub Pages version
2. **Keep it for local development** only
3. **Provide contact form** instead: "Contact us for AI-powered help"

---

## 🔒 Securing Your Repository

### Current Status Check:

```bash
# Check if .env.local was ever committed
git log --all --full-history -- .env.local

# Check if API key appears in git history
git log -S "AIzaSyCzFi-jyqddQER9s3a0zLuzwc1tILqbim0" --all
```

### If Key Was Committed to Git:

1. **IMMEDIATELY Revoke the key**:
   - Go to https://console.cloud.google.com/apis/credentials
   - Delete the compromised API key
   - Create a new one

2. **Remove from git history** (⚠️ rewrites history):
```bash
# Use git-filter-repo (recommended)
pip install git-filter-repo
git filter-repo --path .env.local --invert-paths

# Or use BFG Repo-Cleaner
# Download from: https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --delete-files .env.local
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (⚠️ dangerous if others have cloned)
git push origin --force --all
```

3. **Verify .gitignore**:
```gitignore
# Already correct in your .gitignore
.env
.env.local
.env.*.local
*.key
```

---

## 📋 Deployment Checklist for GitHub Pages

### Before Deploying:

- [ ] Remove all API keys from frontend code
- [ ] Verify .env files are in .gitignore
- [ ] Check git history doesn't contain secrets
- [ ] Test that build doesn't include keys: `grep -r "AIzaSy" dist/`
- [ ] Implement backend proxy OR restrict API keys
- [ ] Test from production domain

### GitHub Actions Workflow (Example):

If using GitHub Actions to deploy:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install and Build
        run: |
          npm install
          npm run build
        env:
          # Don't set GEMINI_API_KEY here!
          # Use backend proxy instead

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🎯 Recommended Solution for Your Project

Based on your documentation site with AI assistant:

### Immediate Actions:

1. **Deploy backend proxy to Vercel** (5 minutes, free)
2. **Restrict your current API key** to your domain (while migrating)
3. **Update AIAssistant component** to call proxy instead of direct API
4. **Remove GEMINI_API_KEY** from .env.local after migration
5. **Verify build doesn't contain key**: `grep -r "AIzaSy" dist/`

### Long-term:

- Keep using Vercel/Netlify proxy for all API calls
- Monitor API usage in Google Cloud Console
- Set up usage quotas/alerts
- Consider rate limiting in your proxy

---

## 📚 Additional Resources

- **Google API Key Best Practices**: https://cloud.google.com/docs/authentication/api-keys
- **Vercel Serverless Functions**: https://vercel.com/docs/concepts/functions/serverless-functions
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **OWASP API Security**: https://owasp.org/www-project-api-security/

---

## 🆘 Need Help?

If you need assistance setting up the backend proxy, let me know and I can:
1. Create the Vercel API endpoint for you
2. Update your AIAssistant component
3. Set up the deployment workflow
4. Test the secure implementation

---

**Last Updated**: 2026-01-12
**Status**: ⚠️ CRITICAL - API key currently exposed in .env.local
