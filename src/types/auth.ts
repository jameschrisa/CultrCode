export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  createdAt: Date;
  lastLoginAt?: Date;
}

export type UserRole = 'admin' | 'user';

export type SubscriptionTier = 'free' | 'standard' | 'pro' | 'enterprise';

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UsageStats {
  reportsGenerated: number;
  savedReports: number;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; redirectUrl?: string }>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
  hasPermission: (permission: Permission) => boolean;
  isAdmin: () => boolean;
  canAccessPremium: () => boolean;
  getUsageStats: () => UsageStats;
  canGenerateReport: () => boolean;
  canSaveReport: () => boolean;
  incrementReportGeneration: () => void;
  getPostLoginRedirect: () => string;
}

export type Permission = 
  | 'view_premium_reports'
  | 'admin_access'
  | 'manage_users'
  | 'view_analytics';