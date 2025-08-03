#!/bin/bash

# Script to update all files from old AuthContext to Clerk

echo "Updating AuthContext imports to Clerk..."

# Update import statements
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/import { useAuth } from.*AuthContext.*/import { useAuth, useUser } from '\''@clerk\/nextjs'\''/g'

# Update useAuth destructuring patterns
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/const { isAuthenticated, isLoading/const { isSignedIn, isLoaded }/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/const { isAuthenticated, user, isLoading/const { isSignedIn, isLoaded } = useAuth(); const { user } = useUser()/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/const { user, canAccessPremium }/const { user } = useUser()/g'

# Update auth checks
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/isAuthenticated/isSignedIn/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/isLoading/isLoaded/g'

# Update login/register redirects
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\/login/\/sign-in/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\/register/\/sign-up/g'

echo "Basic updates complete. Manual fixes may still be needed for complex auth logic."