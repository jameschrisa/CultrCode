# 🚀 CultrCode Vercel Deployment Guide

Complete guide to deploy your CultrCode application on Vercel with Clerk authentication and Stripe payments.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Vercel Account Setup](#vercel-account-setup)
3. [Deploy to Vercel](#deploy-to-vercel)
4. [Configure Environment Variables](#configure-environment-variables)
5. [Update Service Configurations](#update-service-configurations)
6. [Test Your Deployment](#test-your-deployment)
7. [Custom Domain Setup](#custom-domain-setup)
8. [Production Optimizations](#production-optimizations)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

✅ **Before you start, ensure you have:**
- CultrCode application ready with all integrations
- GitHub repository with your code
- Clerk account with authentication configured
- Stripe account with payment integration
- Domain name (optional but recommended)

---

## 1. Vercel Account Setup

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** for seamless integration
4. Authorize Vercel to access your GitHub repositories

### Step 2: Connect GitHub Repository
1. In Vercel Dashboard, click **"Import Project"**
2. Select your CultrCode repository
3. Vercel will automatically detect it's a Next.js project

---

## 2. Deploy to Vercel

### Step 1: Import Your Project
1. **Repository**: Select your CultrCode GitHub repo
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: `.` (leave default)
4. **Build Command**: `npm run build` (auto-detected)
5. **Output Directory**: `.next` (auto-detected)
6. **Install Command**: `npm install` (auto-detected)

### Step 2: Configure Build Settings
Vercel will use your `vercel.json` configuration automatically:
```json
{
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "regions": ["iad1"]
}
```

### Step 3: Initial Deployment
1. Click **"Deploy"**
2. Wait for the build process (usually 2-3 minutes)
3. You'll get a `.vercel.app` URL for testing

---

## 3. Configure Environment Variables

### Step 1: Copy Environment Variables
1. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add all variables from your `.env.local` file:

#### Required Variables:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_key_here
CLERK_SECRET_KEY=sk_live_your_key_here
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Step 2: Set Environment Scope
- **Production**: For live environment
- **Preview**: For preview deployments
- **Development**: For local development

**Recommendation**: Add all variables to **Production** and **Preview**

---

## 4. Update Service Configurations

### Step 1: Update Clerk Configuration
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your application
3. Go to **Settings** → **Domains**
4. Add your Vercel domain: `your-app.vercel.app`
5. Update **Authorized redirect URLs**:
   - `https://your-app.vercel.app/sign-in/sso-callback`
   - `https://your-app.vercel.app/sign-up/sso-callback`

### Step 2: Update Stripe Webhooks
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **Webhooks**
3. Edit your existing webhook or create new one
4. **Endpoint URL**: `https://your-app.vercel.app/api/webhooks/stripe`
5. **Events**: Keep the same events as before
6. Copy the new webhook secret to Vercel environment variables

### Step 3: Update CORS Settings (if needed)
Your `vercel.json` already includes CORS headers:
```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

---

## 5. Test Your Deployment

### Step 1: Basic Functionality Test
1. **Homepage**: Visit your Vercel URL
2. **Authentication**: Test sign up/sign in
3. **Navigation**: Check all pages load correctly
4. **API Routes**: Test /api/segments, /api/communities

### Step 2: Payment Flow Test
1. Go to pricing page
2. Click on a paid plan
3. Complete Stripe checkout with test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
4. Verify success page loads
5. Check user metadata updated in Clerk

### Step 3: Webhook Testing
1. **Stripe Events**: Check webhook receives events
2. **User Updates**: Verify subscription status updates
3. **Error Logs**: Check Vercel function logs for errors

---

## 6. Custom Domain Setup

### Step 1: Add Domain in Vercel
1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `your-domain.com`
4. Vercel will provide DNS instructions

### Step 2: Configure DNS
Add these records to your domain registrar:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.19
```

### Step 3: Update Environment Variables
1. Change `NEXT_PUBLIC_APP_URL` to your custom domain
2. Update Clerk and Stripe configurations with new domain

---

## 7. Production Optimizations

### Step 1: Performance Optimizations
Your `vercel.json` includes:
```json
{
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "regions": ["iad1"]
}
```

### Step 2: Security Headers
Already configured in `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Step 3: Analytics Setup
Add to your environment variables:
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-YOUR_GA_ID
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
```

---

## 8. Troubleshooting

### Common Issues

#### ❌ Build Failures
**Problem**: Build fails during deployment
**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript types are correct
4. Check for missing environment variables

#### ❌ Authentication Issues
**Problem**: Clerk authentication not working
**Solution**:
1. Verify Clerk domain configuration
2. Check environment variables are set correctly
3. Ensure redirect URLs match exactly
4. Test with incognito/private browsing

#### ❌ Payment Issues
**Problem**: Stripe checkout not working
**Solution**:
1. Verify Stripe webhook URL is correct
2. Check webhook secret matches environment variable
3. Test with Stripe test cards
4. Check Stripe logs for errors

#### ❌ API Route Errors
**Problem**: API routes returning 500 errors
**Solution**:
1. Check Vercel function logs
2. Verify environment variables are accessible
3. Test API routes individually
4. Check for CORS issues

### Debug Commands

```bash
# Check deployment logs
vercel logs your-deployment-url

# Test local build
npm run build
npm run start

# Analyze bundle size
npm run analyze
```

---

## 9. Monitoring & Maintenance

### Step 1: Set Up Monitoring
1. **Vercel Analytics**: Enable in project settings
2. **Error Tracking**: Consider Sentry integration
3. **Performance**: Monitor Core Web Vitals

### Step 2: Automatic Deployments
- **Main Branch**: Auto-deploys to production
- **Feature Branches**: Create preview deployments
- **Pull Requests**: Automatic preview links

### Step 3: Backup Strategy
1. **Database**: Set up regular backups
2. **Environment Variables**: Keep secure backup
3. **Code**: GitHub serves as version control

---

## 🎉 Deployment Checklist

Before going live, ensure:

- ✅ All environment variables configured
- ✅ Clerk domains updated
- ✅ Stripe webhooks pointing to production
- ✅ Custom domain configured (optional)
- ✅ SSL certificate active
- ✅ Authentication flow tested
- ✅ Payment flow tested
- ✅ All pages loading correctly
- ✅ API routes responding
- ✅ Error monitoring setup

---

## 📞 Support

**Vercel Support:**
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

**Integration Support:**
- Clerk: [clerk.com/docs](https://clerk.com/docs)
- Stripe: [stripe.com/docs](https://stripe.com/docs)

---

*Last updated: January 2025*

**Your CultrCode application is now live and ready to serve users! 🚀**