# 🎯 CultrCode Stripe Integration Setup Guide

This guide will walk you through setting up Stripe payments for your CultrCode application, from account creation to production deployment.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Create Stripe Account](#create-stripe-account)
3. [Configure Products & Pricing](#configure-products--pricing)
4. [Get API Keys](#get-api-keys)
5. [Set Up Webhooks](#set-up-webhooks)
6. [Update Environment Variables](#update-environment-variables)
7. [Update Price IDs in Code](#update-price-ids-in-code)
8. [Testing Your Integration](#testing-your-integration)
9. [Going Live](#going-live)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- ✅ CultrCode application with Stripe integration code already implemented
- ✅ Clerk authentication already set up
- ✅ Access to your `.env.local` file
- ✅ Admin access to deploy webhook endpoints

---

## 1. Create Stripe Account

### Step 1: Sign Up
1. Go to [stripe.com](https://stripe.com)
2. Click **"Start now"** or **"Sign up"**
3. Enter your email and create a password
4. Verify your email address

### Step 2: Complete Account Setup
1. **Business Information**: Fill out your business details
   - Business name: `CultrCode` (or your company name)
   - Business type: Select appropriate type
   - Website: Your domain
2. **Bank Account**: Add your bank account for payouts
3. **Identity Verification**: Upload required documents

> **💡 Tip**: You can start testing immediately, but you'll need to complete verification before going live.

---

## 2. Configure Products & Pricing

### Step 1: Create Products
1. In your Stripe Dashboard, go to **Products** in the left sidebar
2. Click **"+ Add product"**
3. Create the following 3 products:

#### Product 1: Community Explorer
- **Name**: `Community Explorer`
- **Description**: `Access to 25+ micro-communities and trend analysis`
- **Pricing Model**: `Recurring`
- **Price**: `$49.00`
- **Billing Period**: `Monthly`
- **Currency**: `USD`
- Click **"Save product"**

#### Product 2: Trend Navigator
- **Name**: `Trend Navigator`
- **Description**: `Advanced trend prediction and cultural movement tracking`
- **Pricing Model**: `Recurring`
- **Price**: `$149.00`
- **Billing Period**: `Monthly`
- **Currency**: `USD`
- Click **"Save product"**

#### Product 3: Cultural Intelligence
- **Name**: `Cultural Intelligence`
- **Description**: `Complete cultural intelligence platform with custom solutions`
- **Pricing Model**: `Recurring`
- **Price**: `$449.00`
- **Billing Period**: `Monthly`
- **Currency**: `USD`
- Click **"Save product"**

### Step 2: Copy Price IDs
After creating each product, you'll see a **Price ID** that looks like `price_1234567890abcdef`.

**📝 Write these down - you'll need them later:**
- Community Explorer Price ID: `price_________________`
- Trend Navigator Price ID: `price_________________`
- Cultural Intelligence Price ID: `price_________________`

---

## 3. Get API Keys

### Step 1: Navigate to API Keys
1. In Stripe Dashboard, go to **Developers** → **API Keys**

### Step 2: Copy Your Keys
You'll see two types of keys:

#### Publishable Key (Safe to expose)
- Starts with `pk_test_` (test mode) or `pk_live_` (live mode)
- Used in your frontend JavaScript
- **Copy this key**

#### Secret Key (Keep secure!)
- Starts with `sk_test_` (test mode) or `sk_live_` (live mode)  
- Used in your backend server
- **Copy this key** (click "Reveal" first)

> **🔐 Security Note**: Never commit secret keys to version control or expose them in client-side code.

---

## 4. Set Up Webhooks

Webhooks allow Stripe to notify your app when payments succeed, subscriptions change, etc.

### Step 1: Create Webhook Endpoint
1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **"+ Add endpoint"**
3. **Endpoint URL**: 
   - For testing: `https://your-domain.com/api/webhooks/stripe`
   - For local development: Use [ngrok](https://ngrok.com/) to create a tunnel
4. **Description**: `CultrCode Subscription Events`

### Step 2: Select Events
Add these specific events (click **"Select events"**):
- ✅ `checkout.session.completed`
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`
- ✅ `invoice.payment_succeeded`
- ✅ `invoice.payment_failed`

### Step 3: Get Webhook Secret
1. After creating the webhook, click on it
2. In the **"Signing secret"** section, click **"Reveal"**
3. **Copy the webhook secret** (starts with `whsec_`)

### Step 4: Local Development Setup (Optional)
For local testing, use ngrok:
```bash
# Install ngrok
npm install -g ngrok

# Start your Next.js app
npm run dev

# In another terminal, expose your local server
ngrok http 3000

# Use the https URL for your webhook endpoint
# Example: https://abc123.ngrok.io/api/webhooks/stripe
```

---

## 5. Update Environment Variables

### Step 1: Open Your .env.local File
Navigate to your project root and open `.env.local`

### Step 2: Replace Placeholder Values
Update these variables with your actual Stripe keys:

```env
# Stripe Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_actual_webhook_secret_here

# App URL for Stripe redirects
NEXT_PUBLIC_APP_URL=http://localhost:3000  # Change to your domain for production
```

### Step 3: Restart Your Development Server
```bash
npm run dev
```

---

## 6. Update Price IDs in Code

### Step 1: Open the Pricing Page
Navigate to `src/app/pricing/page.tsx`

### Step 2: Update Price IDs
Find lines 36-38 and replace the placeholder price IDs with your real ones:

```typescript
const getPriceId = (planName: string) => {
  const priceIds = {
    'community-explorer': 'price_your_community_explorer_price_id',     // Replace this
    'trend-navigator': 'price_your_trend_navigator_price_id',           // Replace this  
    'cultural-intelligence': 'price_your_cultural_intelligence_price_id' // Replace this
  }
  return priceIds[planName.toLowerCase().replace(' ', '-') as keyof typeof priceIds]
}
```

### Step 3: Save and Test
Save the file and test a payment flow to ensure everything works.

---

## 7. Testing Your Integration

### Step 1: Use Test Card Numbers
Stripe provides test card numbers for different scenarios:

**Successful Payment:**
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

**Declined Payment:**
- Card: `4000 0000 0000 0002`
- Use same expiry, CVC, ZIP as above

**Other Test Scenarios:**
- Insufficient funds: `4000 0000 0000 9995`
- Lost card: `4000 0000 0000 9987`
- Stolen card: `4000 0000 0000 9979`

### Step 2: Test the Full Flow
1. **Go to your pricing page**: `http://localhost:3000/pricing`
2. **Click a plan button** (not Free Discovery)
3. **Sign up/Sign in** if prompted
4. **Complete Stripe checkout** with test card
5. **Verify success page** loads
6. **Check user permissions** in your app
7. **Verify webhook** was received in Stripe Dashboard

### Step 3: Check Stripe Dashboard
1. Go to **Payments** → verify test payment appears
2. Go to **Customers** → verify customer was created
3. Go to **Subscriptions** → verify subscription is active
4. Go to **Webhooks** → verify events were sent successfully

### Step 4: Verify Clerk Integration
1. In Clerk Dashboard, find the test user
2. Check that `publicMetadata` contains:
   ```json
   {
     "subscriptionTier": "community-explorer",
     "subscriptionStatus": "active",
     "stripeCustomerId": "cus_...",
     "subscriptionId": "sub_..."
   }
   ```

---

## 8. Going Live

### Step 1: Complete Stripe Account Verification
1. Submit all required business information
2. Upload identity verification documents
3. Wait for Stripe approval (usually 1-2 business days)

### Step 2: Switch to Live Mode
1. In Stripe Dashboard, toggle from **"Test mode"** to **"Live mode"**
2. Get your live API keys from **Developers** → **API Keys**
3. Create live products (same as test products)
4. Set up live webhooks (same events as test)

### Step 3: Update Environment Variables for Production
```env
# Production Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret

# Production URL
NEXT_PUBLIC_APP_URL=https://your-production-domain.com
```

### Step 4: Update Price IDs for Production
Update `src/app/pricing/page.tsx` with your live price IDs.

### Step 5: Deploy and Test
1. Deploy your application with production environment variables
2. Test with a real (small amount) payment
3. Verify all webhooks work correctly
4. Test subscription management features

---

## 9. Troubleshooting

### Common Issues

#### ❌ "No such price" Error
**Problem**: Price ID not found
**Solution**: 
- Double-check price IDs in your code match Stripe Dashboard
- Ensure you're using the right mode (test vs live)

#### ❌ Webhook Not Receiving Events
**Problem**: Webhooks aren't being called
**Solution**:
- Verify webhook URL is accessible from the internet
- Check webhook secret matches your environment variable
- Ensure your API route is deployed and working

#### ❌ "Invalid API Key" Error
**Problem**: Wrong API key or mode mismatch
**Solution**:
- Verify you're using the correct key for your mode (test/live)
- Check for typos in environment variables
- Restart your server after updating env vars

#### ❌ User Metadata Not Updating
**Problem**: Clerk user metadata not being set
**Solution**:
- Check webhook is receiving `checkout.session.completed` events
- Verify Clerk API permissions
- Check server logs for errors in webhook handler

#### ❌ Checkout Session Creation Fails
**Problem**: Error creating checkout session
**Solution**:
- Verify all required fields are provided
- Check price IDs are valid
- Ensure success/cancel URLs are correct

### Debug Tips

1. **Check Stripe Logs**: Dashboard → Developers → Logs
2. **Check Webhook Logs**: Dashboard → Developers → Webhooks → [Your webhook] → Logs
3. **Check Browser Console**: Look for JavaScript errors
4. **Check Server Logs**: Look for API route errors
5. **Use Stripe CLI**: For advanced debugging
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

---

## 10. Additional Configuration

### Custom Success/Cancel URLs
Update in `src/app/api/checkout/route.ts`:
```typescript
success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?plan=${planName}`,
cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancelled`,
```

### Enable Promotion Codes
Already enabled in your checkout session:
```typescript
allow_promotion_codes: true,
```

### Add Tax Collection
In your checkout session creation:
```typescript
automatic_tax: {
  enabled: true,
},
```

### Customer Portal (for subscription management)
Add to your user dashboard:
```typescript
// Create customer portal session
const portalSession = await stripe.billingPortal.sessions.create({
  customer: customerId,
  return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
});
```

---

## 🎉 Congratulations!

You've successfully integrated Stripe payments with your CultrCode application! Your users can now:

- ✅ Purchase subscriptions with credit cards
- ✅ Automatically get premium access 
- ✅ Have their payments securely processed by Stripe
- ✅ Receive professional email receipts
- ✅ Manage their subscriptions (with customer portal)

### Next Steps

1. **Monitor your metrics** in Stripe Dashboard
2. **Set up email notifications** for failed payments
3. **Create promotional campaigns** with discount codes
4. **Add analytics** to track conversion rates
5. **Consider adding annual billing** with discounts

### Support

- **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Stripe Support**: Available in your dashboard
- **Community**: [Stack Overflow](https://stackoverflow.com/questions/tagged/stripe-payments)

---

*Last updated: January 2025*