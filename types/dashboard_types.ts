export type DashboardRecentTransaction = {
  id: string;
  source: "wallet" | "telecom";
  transactionType: string;
  amount: number;
  status: string;
  timestamp: string;
};

export type DashboardHomeResponse = {
  user: {
    id: string;
    fullName: string;
    email: string | null;
    phone: string | null;
  };
  wallet: {
    balance: number;
    currency: string;
    accountNumber: string;
    bankName: string;
  };
  analytics: {
    totalFunded: number;
    totalSpent: number;
    airtimePurchases: number;
    dataPurchases: number;
  };
  recentTransactions: DashboardRecentTransaction[];
};

export type UserProfile = {
  id: string;
  email: string | null;
  phone: string | null;
  firstName?: string;
  lastName?: string;
  countryCode?: string;
  currencyCode?: string;
};

export type WalletSummary = {
  balance: string | number;
  accountNumber: string | null;
  bankName: string | null;
};

export type WalletTransaction = {
  id: string;
  transactionType: string;
  direction: string;
  amount: string | number;
  status: string;
  createdAt: string;
};

export type WalletTransactionsResponse = {
  transactions: WalletTransaction[];
};
