#!/usr/bin/env node

/**
 * CultrCode PostgreSQL Migration Script
 * Migrates from SQLite to PostgreSQL for production deployment
 */

const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

async function main() {
  console.log('🚀 Starting PostgreSQL migration...')

  // Database connection
  const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL
  
  if (!connectionString) {
    console.error('❌ PostgreSQL connection string not found!')
    console.log('Please set POSTGRES_URL or DATABASE_URL in your environment variables.')
    console.log('For Vercel Postgres, get this from your Vercel dashboard.')
    process.exit(1)
  }

  const pool = new Pool({
    connectionString,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  })

  try {
    // Test connection
    const client = await pool.connect()
    console.log('✅ Connected to PostgreSQL database')

    // Read and execute schema
    const schemaPath = path.join(__dirname, '..', 'database', 'postgresql_schema.sql')
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`)
    }

    const schema = fs.readFileSync(schemaPath, 'utf8')
    console.log('📋 Executing PostgreSQL schema...')
    
    await client.query(schema)
    console.log('✅ Database schema created successfully')

    // Check if tables were created
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `)

    console.log('📊 Created tables:')
    tablesResult.rows.forEach(row => {
      console.log(`   - ${row.table_name}`)
    })

    client.release()
    console.log('🎉 Migration completed successfully!')
    console.log('')
    console.log('Next steps:')
    console.log('1. Run: npm run db:seed (to populate with sample data)')
    console.log('2. Update your API routes to use the PostgreSQL database')
    console.log('3. Test your application with the new database')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

// Handle script execution
if (require.main === module) {
  main().catch(console.error)
}

module.exports = { main }