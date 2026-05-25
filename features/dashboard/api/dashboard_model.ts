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
