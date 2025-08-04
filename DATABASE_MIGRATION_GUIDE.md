# 🗄️ CultrCode Database Migration Guide

Complete guide to migrate from SQLite to PostgreSQL for production deployment on Vercel.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Database Options Comparison](#database-options-comparison)
3. [Vercel Postgres Setup (Recommended)](#vercel-postgres-setup-recommended)
4. [Alternative Options](#alternative-options)
5. [Migration Process](#migration-process)
6. [Environment Configuration](#environment-configuration)
7. [Testing the Migration](#testing-the-migration)
8. [Troubleshooting](#troubleshooting)

---

## Overview

Your CultrCode application currently uses SQLite for local development, which works great locally but **cannot be used in production** on Vercel because:

- Vercel functions are **serverless and stateless**
- SQLite files can't persist between function invocations
- No shared file system across function instances

**Solution**: Migrate to a cloud database (PostgreSQL recommended).

---

## Database Options Comparison

| Database | Setup Time | Monthly Cost | Best For |
|----------|------------|--------------|----------|
| **Vercel Postgres** ⭐ | 5 minutes | Free → $20 | Seamless Vercel integration |
| PlanetScale | 15 minutes | Free → $39 | Advanced MySQL features |
| Supabase | 20 minutes | Free → $25 | Real-time features |
| Railway PostgreSQL | 10 minutes | $5 minimum | Simple PostgreSQL |

---

## Vercel Postgres Setup (Recommended)

### Step 1: Create Vercel Postgres Database

1. **Go to Vercel Dashboard** → Your Project → **Storage** tab
2. **Click "Create Database"** → Choose **"Postgres"**
3. **Name**: `cultrcode-production`
4. **Region**: Choose closest to your users
5. **Click "Create"**

### Step 2: Get Connection Details

After creation, you'll see:
```env
POSTGRES_URL="postgresql://username:password@host:5432/database"
POSTGRES_PRISMA_URL="postgresql://username:password@host:5432/database?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NO_SSL="postgresql://username:password@host:5432/database?sslmode=disable"
POSTGRES_USER="username"
POSTGRES_HOST="host"
POSTGRES_PASSWORD="password"
POSTGRES_DATABASE="database"
```

### Step 3: Add to Environment Variables

1. **In Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. **Add all the PostgreSQL variables** from above
3. **Set for**: Production, Preview, and Development

---

## Alternative Options

### Option B: PlanetScale (MySQL)

1. **Sign up** at [planetscale.com](https://planetscale.com)
2. **Create database**: `cultrcode`
3. **Get connection string** from dashboard
4. **Add to Vercel env vars**: `DATABASE_URL=mysql://...`

### Option C: Supabase (PostgreSQL)

1. **Sign up** at [supabase.com](https://supabase.com)
2. **New Project** → Name: `CultrCode`
3. **Settings** → **Database** → **Connection String**
4. **Add to Vercel env vars**: `DATABASE_URL=postgresql://...`

---

## Migration Process

### Step 1: Install Dependencies

The required packages are already added to your `package.json`:
```json
{
  "dependencies": {
    "@vercel/postgres": "^0.10.0",
    "pg": "^8.12.0"
  },
  "devDependencies": {
    "@types/pg": "^8.11.6"
  }
}
```

### Step 2: Run Migration Script

```bash
# Install dependencies
npm install

# Run the migration (creates tables and schema)
npm run db:migrate
```

This script:
- ✅ Connects to your PostgreSQL database
- ✅ Creates all tables with proper schema
- ✅ Sets up indexes and views
- ✅ Creates PostgreSQL-specific optimizations

### Step 3: Seed the Database (Optional)

```bash
# Populate with sample data
npm run db:seed
```

### Step 4: Update Your API Routes

Your database code automatically detects the environment:

```typescript
// This code works in both development (SQLite) and production (PostgreSQL)
import { getCommunityDatabase } from '@/lib/database-factory'

export async function GET() {
  const db = await getCommunityDatabase() // Auto-detects database type
  const communities = await db.getAllCommunities()
  return Response.json(communities)
}
```

---

## Environment Configuration

### Development (.env.local)
```env
# Keep SQLite for local development
DATABASE_URL=file:./database/communities.db

# Add PostgreSQL for testing (optional)
POSTGRES_URL=postgresql://localhost:5432/cultrcode_dev
```

### Production (Vercel Environment Variables)
```env
# Vercel Postgres (automatically added by Vercel)
POSTGRES_URL=postgresql://...
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_USER=...
POSTGRES_HOST=...
POSTGRES_PASSWORD=...
POSTGRES_DATABASE=...

# App URL for production
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

---

## Testing the Migration

### Step 1: Local Testing with PostgreSQL
```bash
# Set up local PostgreSQL (optional)
brew install postgresql
createdb cultrcode_dev

# Update .env.local with local PostgreSQL
POSTGRES_URL=postgresql://localhost:5432/cultrcode_dev

# Run migration
npm run db:migrate

# Test locally
npm run dev
```

### Step 2: Test API Endpoints
```bash
# Test your API routes
curl https://your-app.vercel.app/api/communities
curl https://your-app.vercel.app/api/segments
curl https://your-app.vercel.app/api/categories
```

### Step 3: Verify Database Connection
Visit: `https://your-app.vercel.app/api/health` (if you create this endpoint)

---

## Database Schema Overview

Your PostgreSQL schema includes:

### Core Tables
- `categories` - Main community categories (8 categories)
- `communities` - Micro-communities (100+ communities)
- `audience_segments` - User segments for matching
- `community_segment_mappings` - Affinity scores and matches

### Advanced Features
- `personas` - User-generated personas
- `trending_topics` - Trending cultural movements
- `user_reports` - Generated analysis reports
- `user_segmentation_inputs` - Analysis session data

### Performance Features
- **JSONB columns** for flexible data storage
- **Indexes** on frequently queried columns
- **Views** for complex queries
- **UUID support** for better scaling

---

## Troubleshooting

### ❌ "No PostgreSQL connection string"
**Problem**: Migration script can't connect
**Solution**:
```bash
# Check environment variables
echo $POSTGRES_URL

# Add to .env.local for local testing
POSTGRES_URL=postgresql://username:password@host:5432/database
```

### ❌ "SSL connection required"
**Problem**: Database requires SSL
**Solution**: Already handled in the connection code:
```typescript
ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
```

### ❌ "Table already exists"
**Problem**: Running migration multiple times
**Solution**: The migration script is idempotent and handles existing tables

### ❌ "Permission denied"
**Problem**: Database user lacks permissions
**Solution**: Ensure your database user has CREATE, INSERT, UPDATE, DELETE permissions

### ❌ "Connection timeout"
**Problem**: Database not accessible
**Solution**:
1. Verify connection string is correct
2. Check database is running
3. Verify network access (firewall/VPN)

### 🔍 Debug Connection Issues

Add this to your API route for debugging:
```typescript
import { checkDatabaseHealth } from '@/lib/database-factory'

export async function GET() {
  const health = await checkDatabaseHealth()
  return Response.json(health)
}
```

---

## Production Deployment Checklist

Before going live:

- ✅ Vercel Postgres database created
- ✅ Environment variables configured in Vercel
- ✅ Migration script executed successfully
- ✅ Sample data populated (if needed)
- ✅ API endpoints tested with PostgreSQL
- ✅ Authentication flow tested
- ✅ Payment integration tested
- ✅ Database connection pooling configured
- ✅ Error monitoring set up

---

## Performance & Scaling

### Connection Pooling
```typescript
// Automatically configured in database-postgres.ts
const pool = new Pool({
  connectionString,
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
```

### Query Optimization
- **Indexes** on frequently queried columns
- **JSONB** for flexible JSON data with indexing
- **Views** for complex queries
- **Prepared statements** for security

### Monitoring
- **Vercel Analytics** for function performance
- **PostgreSQL logs** in database dashboard
- **Connection pool metrics** in application logs

---

## 🎉 Migration Complete!

Your CultrCode application now supports:

✅ **SQLite** for local development  
✅ **PostgreSQL** for production deployment  
✅ **Automatic detection** based on environment  
✅ **Seamless transition** without code changes  
✅ **Advanced features** like JSONB and indexing  
✅ **Production-ready** performance and scaling  

Your database is now ready for production deployment on Vercel! 🚀

---

*Last updated: January 2025*