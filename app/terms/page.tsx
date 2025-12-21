import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-6">
            These Terms & Conditions ("Terms") govern your access to and use of the Foundect platform, website, applications, and related services (collectively, the "Platform"), operated by Foundect ("Foundect", "we", "us", or "our").
          </p>

          <p className="mb-8">
            By accessing, registering, or using the Platform, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you must not use the Platform.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. About Foundect</h2>
          <p className="mb-4">
            Foundect is a Shari'ah-aligned digital platform designed to connect businesses seeking ethical funding with investors interested in participating in Shari'ah-compliant investment opportunities.
          </p>
          <p className="mb-4">
            Foundect does not act as a bank, lender, financial institution, broker, or investment advisor.
          </p>
          <p className="mb-8">
            Foundect does not hold, manage, or guarantee funds unless explicitly stated otherwise.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Eligibility & Account Registration</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Eligibility</h3>
          <p className="mb-3">To use Foundect, you must:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Be legally capable of entering into binding contracts.</li>
            <li>Provide accurate, truthful, and complete information.</li>
            <li>Comply with all applicable laws and regulations of Bangladesh.</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to approve, reject, suspend, or terminate any account at its sole discretion.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Account Types</h3>
          <p className="mb-3">Foundect supports two account types:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Investor Accounts: Individual Investors can open these type of accounts and invest in Business Campaigns.</li>
            <li>Business Accounts: Businesses can open these accounts to launch campaigns to raise funds AND can invest in other campaigns as well.</li>
          </ul>
          <p className="mb-8">
            Each account type may have different permissions and requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Verification & Review</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>All accounts are subject to manual and/or automated review.</li>
            <li>Approval is not guaranteed.</li>
            <li>Accounts may remain under review for up to 24 hours or longer.</li>
            <li>Foundect may request additional documents at any time.</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shari'ah Compliance</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 General Principle</h3>
          <p className="mb-3">
            Foundect aims to facilitate Shari'ah-compliant investment structures, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Musharakah</li>
            <li>Mudarabah</li>
            <li>Murabaha</li>
          </ul>
          <p className="mb-4">However:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect does not issue fatwas.</li>
            <li>Final Shari'ah responsibility lies with the user.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 No Guarantee of Compliance</h3>
          <p className="mb-4">
            While Foundect makes reasonable efforts to ensure compliance:
          </p>
          <p className="mb-8">
            We do not guarantee that every campaign or business will remain Shari'ah-compliant at all times. As Foundect does not verify compliance by themselves and has external institutions to review them.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Role of Foundect</h2>
          <p className="mb-3">Foundect acts solely as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>A technology platform</li>
            <li>A connector between investors and businesses</li>
          </ul>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Does not manage business operations and their funds</li>
            <li>Does not manage investor's funds</li>
            <li>Does not guarantee profits</li>
            <li>Does not insure losses</li>
            <li>Does not control how funds are used after transfer</li>
          </ul>
          <p className="mb-8">
            All investment relationships are directly between investors and businesses.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Investment Risks</h2>
          <p className="mb-3">By using Foundect, you acknowledge that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All investments involve risk, including potential loss of capital.</li>
            <li>Past performance does not guarantee future results.</li>
            <li>Profit distributions are not guaranteed.</li>
            <li>Delays, defaults, or losses may occur.</li>
          </ul>
          <p className="mb-3">Foundect shall not be held liable for:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Business failure</li>
            <li>Fraud by businesses or investors</li>
            <li>Misuse of funds</li>
            <li>Incorrect profit projections</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Campaign Information & Accuracy</h2>
          <p className="mb-3">Businesses are solely responsible for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Accuracy of campaign details</li>
            <li>Financial projections</li>
            <li>Risk disclosures</li>
            <li>Profit distribution terms</li>
          </ul>
          <p className="mb-8">
            Foundect does not verify all claims and shall not be responsible for inaccuracies unless proven to be willful negligence.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Payments & Transactions</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Direct Payments</h3>
          <p className="mb-3">Where applicable:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Funds may be transferred directly from investor to business.</li>
          </ul>
          <p className="mb-8">
            Foundect does not act as a payment intermediary.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 Confirmation</h3>
          <p className="mb-4">
            Investors must provide transaction proof when required.
          </p>
          <p className="mb-8">
            Submission of false payment confirmation is strictly prohibited.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Fees & Charges</h2>
          <p className="mb-3">Foundect may charge:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Platform fees</li>
            <li>Success fees</li>
            <li>Service or operational fees</li>
            <li>Other fees when necessary</li>
          </ul>
          <p className="mb-3">All applicable fees will be:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Clearly disclosed before commitment</li>
            <li>Deducted as per agreed terms</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to modify fees with prior notice.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Profit Distribution</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Profit distribution terms vary by campaign.</li>
            <li>Distribution timing may be:</li>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Periodic (monthly, quarterly, annually)</li>
              <li>End-of-term</li>
              <li>As defined in campaign agreements</li>
            </ul>
          </ul>
          <p className="mb-8">
            Foundect does not guarantee profit payment schedules.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. User Responsibilities</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide false or misleading information</li>
            <li>Engage in fraud or manipulation</li>
            <li>Use the Platform for illegal activities</li>
            <li>Attempt to bypass platform safeguards</li>
            <li>Harass or abuse other users</li>
          </ul>
          <p className="mb-8">
            Violation may result in immediate suspension or termination.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Intellectual Property</h2>
          <p className="mb-3">
            All content, branding, trademarks, and software related to Foundect are owned by Foundect.
          </p>
          <p className="mb-3">You may not:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Copy</li>
            <li>Reverse engineer</li>
            <li>Modify</li>
            <li>Redistribute</li>
          </ul>
          <p className="mb-8">
            without prior written consent.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Data & Privacy</h2>
          <p className="mb-3">
            User data is handled in accordance with Foundect's Privacy Policy.
          </p>
          <p className="mb-3">By using the Platform, you consent to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Data collection</li>
            <li>Verification checks</li>
            <li>Compliance procedures</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Suspension & Termination</h2>
          <p className="mb-3">Foundect may suspend or terminate accounts:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Without prior notice</li>
            <li>For violations</li>
            <li>For legal & regulatory concerns</li>
            <li>For platform integrity reasons</li>
          </ul>
          <p className="mb-8">
            No compensation shall be provided for terminated accounts.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Foundect shall not be liable for indirect, incidental, or consequential damages.</li>
            <li>Total liability shall not exceed the fees paid to Foundect (if any).</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Indemnification</h2>
          <p className="mb-8">
            You agree to indemnify and hold Foundect harmless from:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Claims</li>
            <li>Losses</li>
            <li>Legal costs arising from your use of the Platform or violation of these Terms.</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Amendments</h2>
          <p className="mb-4">
            Foundect may update these Terms at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of updated Terms.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            These Terms are governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Contact Information</h2>
          <p className="mb-4">
            For questions or concerns:
          </p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a> & <a href="mailto:partnerships@foundect.com" className="text-blue-600 hover:underline">partnerships@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect is a facilitative platform — not a guarantor.
            Users are expected to act responsibly, ethically, and lawfully.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF T&C</p>
        </div>
      </div>
    </div>
  );
}



