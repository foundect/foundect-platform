"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Building2,
  Copy,
  Check,
  Upload,
  AlertTriangle,
  Info,
  Shield,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";

// Mock campaign data (in real app, fetch based on campaignId)
const mockCampaignData = {
  id: "1",
  businessName: "Valéstrico Ltd.",
  businessId: "valestrico-ltd",
  businessLogo: "https://ui-avatars.com/api/?name=Valestrico&background=3b82f6&color=fff&size=256",
  campaignTitle: "Garments Import from Chinese Factory",
  contractType: "Musharakah (Profit & Loss Sharing)",
  duration: "9 months",
  minInvestment: 5000,
  maxInvestment: 50000,
  estimatedReturnRange: { min: 13, max: 16 }, // percentage
  successFee: 0.2,
  investmentCharge: 0.1,
  bankDetails: {
    accountName: "Valéstrico Ltd.",
    bankName: "Dutch-Bangla Bank Limited",
    accountNumber: "1234567890123456",
    branchName: "Gulshan Branch, Dhaka",
    routingNumber: "090271234",
  },
};

// Mock investor bank accounts
const mockInvestorBankAccounts = [
  {
    id: "1",
    accountName: "Ahmed Hossain",
    bankName: "Islami Bank Bangladesh Limited",
    accountNumber: "2012345678901234",
    branchName: "Motijheel Branch",
  },
  {
    id: "2",
    accountName: "Ahmed Hossain",
    bankName: "Social Islami Bank Limited",
    accountNumber: "3012345678901234",
    branchName: "Dhanmondi Branch",
  },
];

export default function InvestPage() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params?.campaignId as string;

  // State
  const [investmentAmount, setInvestmentAmount] = useState<number>(10000);
  const [transactionRef, setTransactionRef] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [selectedBankAccount, setSelectedBankAccount] = useState<string>("");
  const [showAddBankForm, setShowAddBankForm] = useState(false);
  const [disclaimerAcknowledged, setDisclaimerAcknowledged] = useState(false);
  const [shariahExpanded, setShariahExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // New bank account form
  const [newBankAccount, setNewBankAccount] = useState({
    accountName: "",
    bankName: "",
    accountNumber: "",
    branchName: "",
  });

  // Calculations
  const estimatedReturnMin = investmentAmount * (1 + mockCampaignData.estimatedReturnRange.min / 100);
  const estimatedReturnMax = investmentAmount * (1 + mockCampaignData.estimatedReturnRange.max / 100);
  const estimatedProfitMin = estimatedReturnMin - investmentAmount;
  const estimatedProfitMax = estimatedReturnMax - investmentAmount;
  
  const successFeeAmount = (estimatedReturnMin * mockCampaignData.successFee) / 100;
  const investmentChargeAmount = (estimatedReturnMin * mockCampaignData.investmentCharge) / 100;
  const netProfitMin = estimatedProfitMin - successFeeAmount - investmentChargeAmount;
  const netProfitMax = estimatedProfitMax - successFeeAmount - investmentChargeAmount;

  // Copy to clipboard
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!transactionRef || !screenshot || !selectedBankAccount || !disclaimerAcknowledged) {
      alert("Please complete all required fields and acknowledge the disclaimer.");
      return;
    }

    // In real app, submit to backend
    setSubmitted(true);
  };

  // Post-submission state
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Investment Request Submitted
            </h1>
            <p className="text-slate-600 mb-1">
              Status: <span className="font-semibold text-amber-600">Pending Verification</span>
            </p>
            <p className="text-slate-600 mb-6">
              Your investment request has been submitted successfully. Our team will verify the transfer and update the status shortly.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-slate-900 mb-2">Next Steps</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Our team will verify your bank transfer within 24-48 hours</li>
                <li>• You will receive a notification once verification is complete</li>
                <li>• You can track your investment status in the Transactions page</li>
                <li>• If there are any issues, we will contact you directly</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.push("/investor/transactions")}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                View Transactions
              </button>
              <button
                onClick={() => router.push("/investor/dashboard")}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.push(`/campaign/${campaignId}`)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Campaign</span>
          </button>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <Image
                src={mockCampaignData.businessLogo}
                alt={mockCampaignData.businessName}
                width={64}
                height={64}
                className="rounded-xl"
              />
              <div className="flex-1">
                <p className="text-sm text-slate-500 mb-1">You are investing in this campaign</p>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  {mockCampaignData.campaignTitle}
                </h1>
                <button
                  onClick={() => router.push(`/business/company?id=${mockCampaignData.businessId}`)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{mockCampaignData.businessName}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Summary Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Investment Summary</h2>

          <div className="space-y-4">
            {/* Investment Amount */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Investment Amount (BDT)
              </label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                min={mockCampaignData.minInvestment}
                max={mockCampaignData.maxInvestment}
                step={1000}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
              />
              <p className="text-xs text-slate-500 mt-1">
                Minimum: ৳{mockCampaignData.minInvestment.toLocaleString()} • Maximum: ৳{mockCampaignData.maxInvestment.toLocaleString()}
              </p>
            </div>

            {/* Estimated Return Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-slate-600 mb-1">Estimated Total Return</p>
                <p className="text-xl font-bold text-slate-900">
                  ৳{estimatedReturnMin.toLocaleString()} – ৳{estimatedReturnMax.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 mt-1">(Not guaranteed)</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-slate-600 mb-1">Estimated Profit</p>
                <p className="text-xl font-bold text-green-700">
                  ৳{estimatedProfitMin.toLocaleString()} – ৳{estimatedProfitMax.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 mt-1">(Before fees)</p>
              </div>
            </div>

            {/* Other Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-sm text-slate-600">Investment Duration</p>
                <p className="font-semibold text-slate-900">{mockCampaignData.duration}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Contract Type</p>
                <p className="font-semibold text-slate-900">{mockCampaignData.contractType}</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              Returns are projections based on business estimates and are not guaranteed. Actual outcomes depend on business performance.
            </p>
          </div>
        </div>

        {/* Returns Explanation */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Returns Breakdown</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-2 font-semibold text-slate-700">Item</th>
                  <th className="text-right py-3 px-2 font-semibold text-slate-700">Amount (BDT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-2 text-slate-700">Your Investment (Principal)</td>
                  <td className="py-3 px-2 text-right font-semibold text-slate-900">
                    ৳{investmentAmount.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-slate-700">Estimated Profit (Range)</td>
                  <td className="py-3 px-2 text-right font-semibold text-green-700">
                    ৳{estimatedProfitMin.toLocaleString()} – ৳{estimatedProfitMax.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-slate-700">Estimated Total Repayment</td>
                  <td className="py-3 px-2 text-right font-semibold text-slate-900">
                    ৳{estimatedReturnMin.toLocaleString()} – ৳{estimatedReturnMax.toLocaleString()}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-2 text-slate-600 text-xs">Less: Success Fee (0.2% on repayment)</td>
                  <td className="py-3 px-2 text-right text-slate-600">
                    -৳{successFeeAmount.toFixed(2)}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-2 text-slate-600 text-xs">Less: Investment Charge (0.1% on repayment)</td>
                  <td className="py-3 px-2 text-right text-slate-600">
                    -৳{investmentChargeAmount.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-t-2 border-slate-300">
                  <td className="py-3 px-2 font-bold text-slate-900">Net Estimated Profit</td>
                  <td className="py-3 px-2 text-right font-bold text-green-700">
                    ৳{netProfitMin.toLocaleString()} – ৳{netProfitMax.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              <strong>Profit-Sharing Logic:</strong> Profits are distributed proportionally based on your investment share in the campaign. If the business achieves higher profits, your returns increase accordingly.
            </p>
            <p>
              <strong>Loss Sharing:</strong> Under the Musharakah contract, if the business incurs losses due to circumstances beyond negligence or misconduct, losses are shared proportionally. Your capital may be partially or fully at risk.
            </p>
          </div>
        </div>

        {/* Shari'ah Structure Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <button
            onClick={() => setShariahExpanded(!shariahExpanded)}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-bold text-slate-900">Shari'ah Compliance Summary</h2>
            </div>
            {shariahExpanded ? (
              <ChevronUp className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {shariahExpanded && (
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex gap-2">
                <span className="font-semibold min-w-[140px]">Contract Type:</span>
                <span>{mockCampaignData.contractType}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold min-w-[140px]">Profit & Loss:</span>
                <span>Both profit and loss are shared proportionally among partners</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold min-w-[140px]">No Fixed Return:</span>
                <span>Returns are not fixed or guaranteed; they depend on actual business performance</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold min-w-[140px]">No Interest (Riba):</span>
                <span>This investment is free from interest-based transactions</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold min-w-[140px]">Fund Usage:</span>
                <span>Funds will be used only for the declared business purpose as outlined in the campaign</span>
              </div>

              <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3 flex gap-2">
                <Info className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700">
                  This investment follows Islamic finance principles and has been structured to comply with Shari'ah guidelines.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Business Bank Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Business Bank Details</h2>

          <div className="space-y-3">
            {[
              { label: "Account Name", value: mockCampaignData.bankDetails.accountName, field: "accountName" },
              { label: "Bank Name", value: mockCampaignData.bankDetails.bankName, field: "bankName" },
              { label: "Account Number", value: mockCampaignData.bankDetails.accountNumber, field: "accountNumber" },
              { label: "Branch Name", value: mockCampaignData.bankDetails.branchName, field: "branchName" },
              { label: "Routing Number", value: mockCampaignData.bankDetails.routingNumber, field: "routingNumber" },
            ].map((item) => (
              <div key={item.field} className="flex items-center justify-between bg-slate-50 rounded-xl p-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">{item.label}</p>
                  <p className="font-semibold text-slate-900">{item.value}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(item.value, item.field)}
                  className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copiedField === item.field ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              Please transfer your investment amount directly to the business account shown above. After completing the transfer, submit the confirmation details below.
            </p>
          </div>
        </div>

        {/* Transfer Confirmation Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Transfer Confirmation</h2>

          <div className="space-y-4">
            {/* Transaction Reference */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Transaction Reference Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={transactionRef}
                onChange={(e) => setTransactionRef(e.target.value)}
                placeholder="Enter your transaction reference number"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Upload Screenshot */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload Transfer Screenshot <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="screenshot-upload"
                />
                <label htmlFor="screenshot-upload" className="cursor-pointer">
                  {screenshot ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">{screenshot.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8 text-slate-400" />
                      <p className="text-sm text-slate-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-500">PNG, JPG, or PDF (max 5MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Investor Bank Account Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Bank Account (for returns) <span className="text-red-500">*</span>
              </label>

              {!showAddBankForm ? (
                <div className="space-y-2">
                  {mockInvestorBankAccounts.map((account) => (
                    <label
                      key={account.id}
                      className={`flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedBankAccount === account.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="bankAccount"
                        value={account.id}
                        checked={selectedBankAccount === account.id}
                        onChange={(e) => setSelectedBankAccount(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{account.accountName}</p>
                        <p className="text-sm text-slate-600">{account.bankName}</p>
                        <p className="text-sm text-slate-600">{account.accountNumber}</p>
                        <p className="text-xs text-slate-500">{account.branchName}</p>
                      </div>
                    </label>
                  ))}

                  <button
                    onClick={() => setShowAddBankForm(true)}
                    className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="font-medium">Add New Bank Account</span>
                  </button>
                </div>
              ) : (
                <div className="border-2 border-blue-300 rounded-xl p-4 space-y-3">
                  <h3 className="font-semibold text-slate-900 mb-3">Add New Bank Account</h3>
                  
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Account Name</label>
                    <input
                      type="text"
                      value={newBankAccount.accountName}
                      onChange={(e) => setNewBankAccount({ ...newBankAccount, accountName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Bank Name</label>
                    <input
                      type="text"
                      value={newBankAccount.bankName}
                      onChange={(e) => setNewBankAccount({ ...newBankAccount, bankName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Account Number</label>
                    <input
                      type="text"
                      value={newBankAccount.accountNumber}
                      onChange={(e) => setNewBankAccount({ ...newBankAccount, accountNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Branch Name</label>
                    <input
                      type="text"
                      value={newBankAccount.branchName}
                      onChange={(e) => setNewBankAccount({ ...newBankAccount, branchName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => {
                        // In real app, save to backend
                        setSelectedBankAccount("new");
                        setShowAddBankForm(false);
                      }}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Save Account
                    </button>
                    <button
                      onClick={() => setShowAddBankForm(false)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-6">
          <div className="flex gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-2">⚠ Important Notice</h3>
              <p className="text-sm text-slate-700 mb-3">
                This is a manual investment confirmation flow for demonstration and testing purposes. No real funds are processed at this stage. Do not send actual money unless officially instructed by Foundect.
              </p>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={disclaimerAcknowledged}
              onChange={(e) => setDisclaimerAcknowledged(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-slate-700">
              I understand this is not a live payment system and I should not send real money at this stage.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <button
            onClick={handleSubmit}
            disabled={!transactionRef || !screenshot || !selectedBankAccount || !disclaimerAcknowledged}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Submit Investment Confirmation
          </button>
          <p className="text-xs text-slate-500 text-center mt-3">
            By submitting, you agree to Foundect's Terms of Service and Investment Agreement
          </p>
        </div>
      </div>
    </div>
  );
}











