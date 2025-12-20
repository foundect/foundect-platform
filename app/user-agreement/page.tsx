import Image from "next/image";
import Link from "next/link";

export default function UserAgreementPage() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/foundect-logo.png"
            alt="Foundect"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Agreement</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This User Agreement ("Agreement") governs the relationship between you ("User", "you", or "your") and Foundect ("Foundect", "we", "us", or "our") regarding your use of the Foundect platform, services, and related features.
          </p>

          <p className="mb-8">
            By registering, accessing, or using Foundect, you agree to be legally bound by this Agreement. If you do not agree, you must not use the Platform.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Scope of Agreement</h2>
          <p className="mb-3">This Agreement applies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All registered Investors</li>
            <li>All registered Businesses</li>
            <li>All users accessing Foundect features</li>
          </ul>
          <p className="mb-3">This Agreement operates alongside:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Risk Disclosure</li>
          </ul>
          <p className="mb-8">
            In case of conflict, Foundect's Terms & Conditions shall prevail.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Nature of the Platform</h2>
          <p className="mb-3">Foundect is a digital facilitation platform that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Connects investors with businesses</li>
            <li>Enables Shari'ah-aligned investment opportunities</li>
            <li>Provides campaign information and tools</li>
          </ul>
          <p className="mb-3">Foundect does NOT:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Act as a lender or borrower</li>
            <li>Act as a financial advisor</li>
            <li>Act as a fund manager</li>
            <li>Guarantee returns or capital</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-3">By using Foundect, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Keep your account credentials secure</li>
            <li>Comply with applicable laws and regulations</li>
            <li>Act honestly and in good faith</li>
          </ul>
          <p className="mb-3">You must NOT:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Misrepresent identity or intent</li>
            <li>Engage in fraudulent or deceptive activity</li>
            <li>Manipulate campaigns or data</li>
            <li>Attempt to bypass platform controls</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Investor Obligations</h2>
          <p className="mb-3">Investors acknowledge that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Investments involve risk</li>
            <li>Returns are not guaranteed</li>
            <li>Capital loss is possible</li>
            <li>Due diligence is their responsibility</li>
          </ul>
          <p className="mb-3">Investors must review:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Campaign details</li>
            <li>Risk disclosures</li>
            <li>Shari'ah structures</li>
          </ul>
          <p className="mb-8">
            before committing funds.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Business Obligations</h2>
          <p className="mb-3">Businesses agree that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All campaign information must be truthful</li>
            <li>Financial projections must be reasonable</li>
            <li>Funds must be used as disclosed</li>
            <li>Profit distribution must follow agreed terms</li>
          </ul>
          <p className="mb-3">Businesses are solely responsible for:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Business performance</li>
            <li>Use of funds</li>
            <li>Regulatory compliance</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Shari'ah Responsibility</h2>
          <p className="mb-3">Foundect facilitates Shari'ah-aligned structures, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Musharakah</li>
            <li>Mudarabah</li>
            <li>Murabaha</li>
          </ul>
          <p className="mb-3">However:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect does not issue Shari'ah rulings</li>
            <li>Foundect does not guarantee compliance</li>
            <li>Final responsibility lies with the user</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Payments & Transactions</h2>
          <p className="mb-3">Depending on campaign structure:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Funds may be transferred directly to businesses</li>
            <li>Foundect will not handle or store funds</li>
          </ul>
          <p className="mb-3">Users agree that:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Payment confirmation is their responsibility</li>
            <li>Incorrect or false confirmations are prohibited</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Fees & Charges</h2>
          <p className="mb-3">Foundect may charge:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Platform fees</li>
            <li>Success fees</li>
            <li>Service fees</li>
            <li>Other fees (when required)</li>
          </ul>
          <p className="mb-3">All fees will be:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Disclosed before commitment</li>
            <li>Applied as per agreement</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to update fees with notice.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Account Review & Suspension</h2>
          <p className="mb-3">Foundect may:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Review accounts periodically</li>
            <li>Suspend or restrict access</li>
            <li>Terminate accounts without prior notice</li>
          </ul>
          <p className="mb-3">Reasons may include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Policy violations</li>
            <li>Legal requirements</li>
            <li>Risk to platform integrity</li>
          </ul>
          <p className="mb-8">
            No compensation is owed for suspended or terminated accounts.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property</h2>
          <p className="mb-3">All intellectual property on Foundect, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Branding</li>
            <li>Software</li>
            <li>Content</li>
          </ul>
          <p className="mb-3">belongs to Foundect.</p>
          <p className="mb-3">Users may not:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Copy</li>
            <li>Modify</li>
            <li>Reverse engineer</li>
            <li>Redistribute</li>
          </ul>
          <p className="mb-8">
            without written consent.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Data & Privacy</h2>
          <p className="mb-3">
            User data is processed in accordance with Foundect's Privacy Policy.
          </p>
          <p className="mb-3">By using Foundect, you consent to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Data collection</li>
            <li>Verification procedures</li>
            <li>Compliance checks</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect is not liable for investment losses</li>
            <li>Foundect is not liable for business failure</li>
            <li>Foundect is not liable for indirect damages</li>
          </ul>
          <p className="mb-8">
            Use of the Platform is at your own risk.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Indemnification</h2>
          <p className="mb-3">You agree to indemnify Foundect against:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Claims</li>
            <li>Losses</li>
            <li>Legal costs</li>
          </ul>
          <p className="mb-8">
            arising from your breach of this Agreement or misuse of the Platform.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Amendments</h2>
          <p className="mb-4">
            Foundect may modify this Agreement at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of updated terms.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            This Agreement is governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            All disputes shall fall under the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
          <p className="mb-3">For questions related to this Agreement:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect is a facilitative platform, not a party to investment contracts. Users are expected to act responsibly, ethically, and lawfully.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF USER AGREEMENT</p>
        </div>
      </div>
    </div>
  );
}

