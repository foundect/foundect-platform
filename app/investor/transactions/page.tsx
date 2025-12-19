"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Search,
  Filter,
  Info,
  Calendar,
  FileText,
  X,
} from "lucide-react";
import Image from "next/image";
import { HoverButton } from "@/components/ui/hover-button";

// Mock transaction data
interface Transaction {
  id: string;
  date: string;
  type: "investment" | "profit" | "withdrawal" | "refund";
  campaignName: string;
  businessName: string;
  contractType: "Mudarabah" | "Musharakah" | "Murabaha";
  amount: number;
  status: "completed" | "pending" | "failed";
  referenceId: string;
  description: string;
  campaignImage: string;
  timestamp: string;
  month: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2025-04-15",
    type: "profit",
    campaignName: "Green Textile Manufacturing",
    businessName: "Green Textile Ltd.",
    contractType: "Mudarabah",
    amount: 2500,
    status: "completed",
    referenceId: "TXN-2025-04-0156",
    description: "Quarterly profit distribution for Q1 2025",
    campaignImage: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d5d?w=400",
    timestamp: "2025-04-15 10:30 AM",
    month: "April 2025",
  },
  {
    id: "2",
    date: "2025-04-10",
    type: "investment",
    campaignName: "Sustainable Packaging Solutions",
    businessName: "EcoPack Industries",
    contractType: "Musharakah",
    amount: 50000,
    status: "completed",
    referenceId: "TXN-2025-04-0142",
    description: "Initial investment in sustainable packaging campaign",
    campaignImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
    timestamp: "2025-04-10 02:15 PM",
    month: "April 2025",
  },
  {
    id: "3",
    date: "2025-04-05",
    type: "withdrawal",
    campaignName: "Profit Withdrawal",
    businessName: "Foundect",
    contractType: "Mudarabah",
    amount: 5000,
    status: "completed",
    referenceId: "TXN-2025-04-0128",
    description: "Withdrawal to Islami Bank Bangladesh account",
    campaignImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400",
    timestamp: "2025-04-05 09:45 AM",
    month: "April 2025",
  },
  {
    id: "4",
    date: "2025-03-28",
    type: "profit",
    campaignName: "Tech Solutions Hub",
    businessName: "Tech Solutions Ltd.",
    contractType: "Murabaha",
    amount: 1800,
    status: "completed",
    referenceId: "TXN-2025-03-0298",
    description: "Monthly profit distribution for March 2025",
    campaignImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    timestamp: "2025-03-28 11:20 AM",
    month: "March 2025",
  },
  {
    id: "5",
    date: "2025-03-15",
    type: "investment",
    campaignName: "Organic Food Distribution",
    businessName: "Pure Foods Co.",
    contractType: "Mudarabah",
    amount: 75000,
    status: "completed",
    referenceId: "TXN-2025-03-0245",
    description: "Investment in halal organic food distribution",
    campaignImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
    timestamp: "2025-03-15 03:30 PM",
    month: "March 2025",
  },
  {
    id: "6",
    date: "2025-03-10",
    type: "investment",
    campaignName: "E-commerce Platform Expansion",
    businessName: "ShopEthical Ltd.",
    contractType: "Musharakah",
    amount: 100000,
    status: "pending",
    referenceId: "TXN-2025-03-0231",
    description: "Investment pending verification",
    campaignImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
    timestamp: "2025-03-10 01:00 PM",
    month: "March 2025",
  },
  {
    id: "7",
    date: "2025-02-20",
    type: "profit",
    campaignName: "Green Textile Manufacturing",
    businessName: "Green Textile Ltd.",
    contractType: "Mudarabah",
    amount: 2200,
    status: "completed",
    referenceId: "TXN-2025-02-0187",
    description: "Quarterly profit distribution for Q4 2024",
    campaignImage: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d5d?w=400",
    timestamp: "2025-02-20 10:15 AM",
    month: "February 2025",
  },
];

export default function InvestorTransactionsPage() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [contractFilter, setContractFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate summary
  const totalInvested = transactions
    .filter((t) => t.type === "investment" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalProfit = transactions
    .filter((t) => t.type === "profit" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalWithdrawn = transactions
    .filter((t) => t.type === "withdrawal" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const pendingAmount = transactions
    .filter((t) => t.status === "pending")
    .reduce((sum, t) => sum + t.amount, 0);

  // Filter transactions
  const filteredTransactions = transactions.filter((transaction) => {
    if (typeFilter !== "all" && transaction.type !== typeFilter) return false;
    if (statusFilter !== "all" && transaction.status !== statusFilter) return false;
    if (contractFilter !== "all" && transaction.contractType !== contractFilter) return false;
    if (searchQuery && !transaction.campaignName.toLowerCase().includes(searchQuery.toLowerCase()) && !transaction.referenceId.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Group by month
  const groupedTransactions = filteredTransactions.reduce((acc, transaction) => {
    const month = transaction.month;
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {} as Record<string, Transaction[]>);

  const formatCurrency = (amount: number) => {
    return `৳${amount.toLocaleString()}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "investment":
        return <TrendingDown className="h-4 w-4" />;
      case "profit":
        return <TrendingUp className="h-4 w-4" />;
      case "withdrawal":
        return <DollarSign className="h-4 w-4" />;
      case "refund":
        return <DollarSign className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "investment":
        return "text-blue-600 bg-blue-50";
      case "profit":
        return "text-emerald-600 bg-emerald-50";
      case "withdrawal":
        return "text-gray-600 bg-gray-50";
      case "refund":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
            <CheckCircle className="h-3 w-3" />
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
            <Clock className="h-3 w-3" />
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium">
            <XCircle className="h-3 w-3" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  const getContractBadge = (contract: string) => {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-medium text-[#0D3B66]">
        {contract}
      </span>
    );
  };

  const handleExportCSV = () => {
    console.log("Exporting CSV...");
    // TODO: Implement CSV export
  };

  const handleExportPDF = () => {
    console.log("Exporting PDF...");
    // TODO: Implement PDF export
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-1">
          A complete record of your investments, profit distributions, and withdrawals
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <CheckCircle className="h-3 w-3 text-emerald-600" />
          All transactions are Shari'ah-compliant
        </p>
      </div>

      {/* SECTION 1: Quick Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs text-gray-600 mb-1">Total Invested</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{formatCurrency(totalInvested)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs text-gray-600 mb-1">Total Profit Earned</p>
          <p className="text-xl sm:text-2xl font-bold text-emerald-600">{formatCurrency(totalProfit)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs text-gray-600 mb-1">Total Withdrawn</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{formatCurrency(totalWithdrawn)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs text-gray-600 mb-1">Pending Amount</p>
          <p className="text-xl sm:text-2xl font-bold text-amber-600">{formatCurrency(pendingAmount)}</p>
        </div>
      </div>

      {/* SECTION 2: Filter & Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by campaign name or reference ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            />
          </div>
        </div>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors mb-4"
        >
          <Filter className="h-4 w-4" />
          Filters
          {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Filters */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
          {/* Type Filter */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Transaction Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
            >
              <option value="all">All Types</option>
              <option value="investment">Investment</option>
              <option value="profit">Profit Distribution</option>
              <option value="withdrawal">Withdrawal</option>
              <option value="refund">Refund</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Date Range</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
            >
              <option value="all">All Time</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option>
              <option value="180">Last 6 months</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Contract Type Filter */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Contract Type</label>
            <select
              value={contractFilter}
              onChange={(e) => setContractFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
            >
              <option value="all">All Contracts</option>
              <option value="Mudarabah">Mudarabah</option>
              <option value="Musharakah">Musharakah</option>
              <option value="Murabaha">Murabaha</option>
            </select>
          </div>
        </div>

        {/* Active Filters Count */}
        {(typeFilter !== "all" || statusFilter !== "all" || contractFilter !== "all" || searchQuery) && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>
              {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? 's' : ''} found
            </span>
            <button
              onClick={() => {
                setTypeFilter("all");
                setStatusFilter("all");
                setContractFilter("all");
                setSearchQuery("");
              }}
              className="ml-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* SECTION 3 & 4: Transaction List (Grouped by Month) */}
      {Object.keys(groupedTransactions).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([month, monthTransactions]) => (
            <div key={month}>
              {/* Month Header */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-900">{month}</h2>
                <span className="text-sm text-gray-600">
                  {monthTransactions.length} transaction{monthTransactions.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Desktop: Table View */}
              <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Campaign Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Contract</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">Amount</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Reference ID</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {monthTransactions.map((transaction) => (
                      <>
                        <tr
                          key={transaction.id}
                          className="hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() => setExpandedId(expandedId === transaction.id ? null : transaction.id)}
                        >
                          <td className="px-4 py-4 text-sm text-gray-900">
                            {new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </td>
                          <td className="px-4 py-4">
                            <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium ${getTypeColor(transaction.type)}`}>
                              {getTypeIcon(transaction.type)}
                              {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{transaction.campaignName}</td>
                          <td className="px-4 py-4">{getContractBadge(transaction.contractType)}</td>
                          <td className={`px-4 py-4 text-right text-sm font-semibold ${transaction.type === 'profit' ? 'text-emerald-600' : transaction.type === 'withdrawal' ? 'text-gray-600' : 'text-gray-900'}`}>
                            {transaction.type === 'profit' ? '+' : transaction.type === 'withdrawal' ? '-' : ''}{formatCurrency(transaction.amount)}
                          </td>
                          <td className="px-4 py-4 text-center">{getStatusBadge(transaction.status)}</td>
                          <td className="px-4 py-4 text-xs text-gray-500 font-mono">{transaction.referenceId}</td>
                          <td className="px-4 py-4 text-right">
                            {expandedId === transaction.id ? (
                              <ChevronUp className="h-4 w-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            )}
                          </td>
                        </tr>
                        {/* Expanded Details */}
                        {expandedId === transaction.id && (
                          <tr>
                            <td colSpan={8} className="px-4 py-4 bg-gray-50">
                              <div className="flex gap-4">
                                <Image
                                  src={transaction.campaignImage}
                                  alt={transaction.campaignName}
                                  width={100}
                                  height={100}
                                  className="w-24 h-24 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 mb-1">{transaction.businessName}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{transaction.description}</p>
                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {transaction.timestamp}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <FileText className="h-3 w-3" />
                                      {transaction.referenceId}
                                    </span>
                                  </div>
                                  {transaction.type === 'profit' && (
                                    <div className="mt-2 flex items-start gap-1 text-xs text-gray-500 italic">
                                      <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                      <span>Profit distributed according to agreed contract terms</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile: Card View */}
              <div className="lg:hidden space-y-3">
                {monthTransactions.map((transaction) => (
                  <div key={transaction.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div
                      className="p-4 cursor-pointer"
                      onClick={() => setExpandedId(expandedId === transaction.id ? null : transaction.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium ${getTypeColor(transaction.type)}`}>
                          {getTypeIcon(transaction.type)}
                          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                        </div>
                        {getStatusBadge(transaction.status)}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{transaction.campaignName}</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold ${transaction.type === 'profit' ? 'text-emerald-600' : transaction.type === 'withdrawal' ? 'text-gray-600' : 'text-gray-900'}`}>
                          {transaction.type === 'profit' ? '+' : transaction.type === 'withdrawal' ? '-' : ''}{formatCurrency(transaction.amount)}
                        </span>
                        <span className="text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        {getContractBadge(transaction.contractType)}
                        {expandedId === transaction.id ? (
                          <ChevronUp className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    {/* Expanded Details (Mobile) */}
                    {expandedId === transaction.id && (
                      <div className="px-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex gap-3 mb-3">
                          <Image
                            src={transaction.campaignImage}
                            alt={transaction.campaignName}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{transaction.businessName}</h4>
                            <p className="text-xs text-gray-600">{transaction.description}</p>
                          </div>
                        </div>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {transaction.timestamp}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {transaction.referenceId}
                          </div>
                        </div>
                        {transaction.type === 'profit' && (
                          <div className="mt-2 flex items-start gap-1 text-xs text-gray-500 italic">
                            <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                            <span>Profit distributed according to agreed contract terms</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* SECTION 6: Empty State */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No transactions found</h3>
          <p className="text-sm text-gray-600 mb-4">
            {searchQuery || typeFilter !== "all" || statusFilter !== "all" || contractFilter !== "all"
              ? "Try adjusting your filters to see more results"
              : "Start your investment journey today"}
          </p>
          {!searchQuery && typeFilter === "all" && statusFilter === "all" && contractFilter === "all" && (
            <HoverButton variant="default" size="default">
              Explore Investment Opportunities
            </HoverButton>
          )}
        </div>
      )}

      {/* SECTION 5: Export & Records */}
      {filteredTransactions.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Export Transaction History</h3>
          <p className="text-sm text-gray-600 mb-4">For personal records and tax documentation</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <HoverButton
              variant="default"
              size="default"
              onClick={handleExportCSV}
              className="flex-1 sm:flex-none"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </HoverButton>
            <HoverButton
              variant="default"
              size="default"
              onClick={handleExportPDF}
              className="flex-1 sm:flex-none"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </HoverButton>
          </div>
        </div>
      )}

      {/* Pending Transactions Note */}
      {pendingAmount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Pending Transactions</h4>
              <p className="text-sm text-amber-800">
                You have {formatCurrency(pendingAmount)} in pending transactions. Processing typically takes 1-3 business days. This is normal and your funds are secure.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

