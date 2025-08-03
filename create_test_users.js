// Script to create test users in Clerk
// Run with: node create_test_users.js

const { createClerkClient } = require('@clerk/clerk-sdk-node')

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY
})

const testUsers = [
  {
    emailAddress: 'premium@cultrcode.com',
    firstName: 'Premium',
    lastName: 'User',
    password: 'Test123!',
    publicMetadata: {
      subscriptionTier: 'premium'
    }
  },
  {
    emailAddress: 'admin@cultrcode.com', 
    firstName: 'Admin',
    lastName: 'User',
    password: 'Test123!',
    publicMetadata: {
      subscriptionTier: 'premium',
      role: 'admin'
    }
  },
  {
    emailAddress: 'enterprise@cultrcode.com',
    firstName: 'Enterprise',
    lastName: 'User', 
    password: 'Test123!',
    publicMetadata: {
      subscriptionTier: 'enterprise'
    }
  }
]

async function createTestUsers() {
  console.log('Creating test users in Clerk...')
  
  for (const userData of testUsers) {
    try {
      const user = await clerk.users.createUser({
        emailAddress: [userData.emailAddress],
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        publicMetadata: userData.publicMetadata,
        skipPasswordChecks: true,
        skipPasswordRequirement: true
      })
      
      console.log(`✅ Created user: ${userData.emailAddress} (${userData.publicMetadata.subscriptionTier})`)
    } catch (error) {
      if (error.errors?.[0]?.code === 'form_identifier_exists') {
        console.log(`⚠️  User ${userData.emailAddress} already exists`)
      } else {
        console.error(`❌ Error creating ${userData.emailAddress}:`, error.errors?.[0]?.message || error.message)
      }
    }
  }
  
  console.log('\n🎉 Test user creation complete!')
}

createTestUsers()