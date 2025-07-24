# Authentication & User Role Testing Guide

## Test User Accounts

The application includes pre-configured test accounts for different user types:

### 1. Free User
- **Email**: `user@cultrcode.com`
- **Password**: `user123`
- **Access Level**: Basic features only
- **Redirect After Login**: Homepage (`/`)

### 2. Standard/Explorer User  
- **Email**: `standard@cultrcode.com`
- **Password**: `standard123`
- **Access Level**: Community Explorer tier
- **Redirect After Login**: Analysis page (`/analysis`)

### 3. Premium User
- **Email**: `premium@cultrcode.com`
- **Password**: `premium123`
- **Access Level**: Premium tier (formerly Trend Master)
- **Redirect After Login**: Dashboard (`/dashboard`)

### 4. Administrator
- **Email**: `admin@cultrcode.com`
- **Password**: `admin123`
- **Access Level**: Full admin access
- **Redirect After Login**: Dashboard (`/dashboard`)

## Page Access Levels

### Public Pages (No Authentication Required)
- Homepage (`/`)
- How It Works (`/how-it-works`)
- Pricing (`/pricing`)
- All Solution Pages (`/solutions/*`)
- Login/Register (`/login`, `/register`)

### Protected Pages (Authentication Required)
- Dashboard (`/dashboard`) - Premium users only
- Analysis (`/analysis`) - All authenticated users
- Explore (`/explore`) - All authenticated users

### Premium Features
- Nano Influencer Database - Premium access required
- Advanced trend analysis - Premium access required
- Saved reports - Premium access required
- Community deep dives - Premium access required

## Testing Steps

### 1. Free User Testing
```
1. Login with user@cultrcode.com / user123
2. Should redirect to homepage
3. Try accessing /dashboard - should redirect to login
4. Try accessing /analysis - should work
5. Premium features should show upgrade prompts
```

### 2. Standard User Testing
```
1. Login with standard@cultrcode.com / standard123
2. Should redirect to /analysis
3. Try accessing /dashboard - should redirect to login
4. Can access basic analysis features
5. Limited premium features
```

### 3. Premium User Testing
```
1. Login with premium@cultrcode.com / premium123
2. Should redirect to /dashboard
3. Dashboard should load with full CSS and styling
4. Should see premium badge
5. All features should be accessible
6. Can access /analysis and /explore
```

### 4. Admin User Testing
```
1. Login with admin@cultrcode.com / admin123
2. Should redirect to /dashboard
3. Should see admin badge
4. Full access to all features
5. Can access all protected routes
```

## Fixing Authentication Issues

### Issue: Dashboard Shows "Dashboard Access Required"
**Cause**: User authentication not persisting or premium access not recognized
**Solution**: 
1. Clear localStorage
2. Login again with premium user account
3. Check that authentication context is loading properly

### Issue: CSS Not Rendering on Dashboard
**Cause**: Authentication redirect happening before CSS loads
**Solution**: 
1. Verify ProtectedRoute component is wrapping the page properly
2. Check that authentication state is stable before rendering content
3. Ensure globals.css is loading correctly

### Issue: User Redirected to Wrong Page After Login
**Cause**: Subscription tier not matching redirect logic
**Solution**:
1. Check user's subscriptionTier in AuthContext
2. Verify getPostLoginRedirect() function logic
3. Update subscription tier mapping if needed

## Authentication Context Details

### User Object Structure
```typescript
{
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  subscriptionTier: 'free' | 'standard' | 'pro' | 'enterprise'
  createdAt: Date
  lastLoginAt?: Date
}
```

### Permission Mapping
- `view_premium_reports`: standard, pro, enterprise users
- `admin_access`: admin role only
- `manage_users`: admin role only
- `view_analytics`: admin role only

### Subscription Tier Access
- **free**: Basic features, homepage redirect
- **standard**: Community Explorer features, analysis redirect  
- **pro**: Premium features, dashboard redirect
- **enterprise**: Full access, dashboard redirect

## Common Issues & Solutions

### 1. Authentication State Not Persisting
- Check localStorage for `cultrcode_auth` key
- Verify AuthProvider is wrapping the entire app in layout.tsx
- Check browser console for errors

### 2. Protected Routes Not Working
- Verify ProtectedRoute component is imported correctly
- Check that component is wrapped in ProtectedRoute with correct props
- Ensure authentication context is available

### 3. Wrong User Permissions
- Check user's subscriptionTier in browser dev tools
- Verify canAccessPremium() function logic
- Check permission mapping in AuthContext

### 4. CSS/Styling Issues
- Verify Tailwind CSS is loading properly
- Check that globals.css is imported in layout.tsx
- Ensure glass-card and other custom classes are defined

---

**Last Updated**: 2025-01-18  
**Status**: Active Testing Guide  
**Version**: 2.0