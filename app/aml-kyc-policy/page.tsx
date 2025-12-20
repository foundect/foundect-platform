import Image from "next/image";
import Link from "next/link";

export default function AMLKYCPolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Anti-Money Laundering (AML) & Know Your Customer (KYC) Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Anti-Money Laundering (AML) and Know Your Customer (KYC) Policy ("Policy") outlines Foundect's approach to identity verification, risk mitigation, and prevention of financial misuse on the Foundect platform.
          </p>

          <p className="mb-8">
            This Policy is intended to support ethical, lawful, and transparent participation and does not constitute legal advice.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Purpose of This Policy</h2>
          <p className="mb-3">The purpose of this Policy is to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Prevent money laundering, fraud, and financial crime</li>
            <li>Verify the identity of users</li>
            <li>Support lawful and ethical financial activity</li>
            <li>Protect the integrity of the Foundect platform</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Regulatory Context</h2>
          <p className="mb-3">
            Foundect operates in Bangladesh and aligns its AML and KYC practices with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Applicable laws and regulations of Bangladesh</li>
            <li>General AML principles recognized internationally</li>
          </ul>
          <p className="mb-8">
            Foundect is not a bank or financial institution but applies reasonable controls consistent with platform-based investment facilitation.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Scope of This Policy</h2>
          <p className="mb-3">This Policy applies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Individual Investors</li>
            <li>Business Accounts</li>
            <li>All users engaging in investment-related activities on Foundect</li>
          </ul>
          <p className="mb-8">
            Participation on the Platform is conditional upon compliance with this Policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. KYC Requirements — Individual Investors</h2>
          <p className="mb-3">To open and use an Investor account, users must provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Full legal name</li>
            <li>Valid government-issued identification (NID or Passport)</li>
            <li>Selfie or biometric confirmation where required</li>
            <li>Date of birth</li>
            <li>Contact information</li>
            <li>Nominee information</li>
          </ul>
          <p className="mb-8">
            Failure to provide accurate or complete information may result in rejection or suspension.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. KYC Requirements — Business Accounts</h2>
          <p className="mb-3">Business Accounts must provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Registered business name</li>
            <li>Business contact details</li>
            <li>Trade license or equivalent registration document</li>
            <li>Identification documents of authorized representative(s)</li>
            <li>Ownership and management information (for disclosure purposes only)</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to request additional documents when necessary.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Verification & Review Process</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>All submitted information is subject to manual and/or automated review</li>
            <li>Verification may take up to 24 hours or longer</li>
            <li>Approval is not guaranteed</li>
            <li>Foundect may reject or suspend accounts without obligation to provide justification</li>
          </ul>
          <p className="mb-8">
            Providing false, misleading, or forged documents is strictly prohibited.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Ongoing Monitoring</h2>
          <p className="mb-3">Foundect may:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Monitor transactions for suspicious activity</li>
            <li>Review accounts periodically</li>
            <li>Request updated documentation</li>
            <li>Flag or restrict accounts when irregular behavior is detected</li>
          </ul>
          <p className="mb-8">
            Foundect does not guarantee continuous monitoring after funds are transferred directly between users.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Suspicious Activity & Reporting</h2>
          <p className="mb-3">Suspicious activities may include but are not limited to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Unusual transaction patterns</li>
            <li>False payment confirmations</li>
            <li>Attempts to bypass platform safeguards</li>
            <li>Inconsistent identity information</li>
          </ul>
          <p className="mb-3">Foundect reserves the right to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Restrict account activity</li>
            <li>Suspend or terminate accounts</li>
            <li>Report activities to relevant authorities when legally required</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Handling & Privacy</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>User data collected for AML/KYC purposes is handled securely</li>
            <li>Data is processed in accordance with Foundect's Privacy Policy</li>
            <li>Access to sensitive data is restricted to authorized personnel</li>
          </ul>
          <p className="mb-8">
            Users consent to verification checks by using the Platform.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Record Retention</h2>
          <p className="mb-3">Foundect may retain AML/KYC records for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Legal compliance</li>
            <li>Platform security</li>
            <li>Dispute resolution</li>
          </ul>
          <p className="mb-8">
            Retention periods are determined in accordance with applicable laws and internal policies.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Limitations of Responsibility</h2>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Does not guarantee detection of all financial crimes</li>
            <li>Is not liable for losses resulting from fraudulent user behavior</li>
            <li>Does not replace law enforcement or regulatory bodies</li>
          </ul>
          <p className="mb-8">
            Users remain responsible for lawful conduct.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Refusal, Suspension, & Termination</h2>
          <p className="mb-3">Foundect may:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Refuse account approval</li>
            <li>Suspend or restrict access</li>
            <li>Terminate accounts</li>
          </ul>
          <p className="mb-3">At its sole discretion, for reasons including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Non-compliance with this Policy</li>
            <li>Legal or regulatory concerns</li>
            <li>Platform integrity protection</li>
          </ul>
          <p className="mb-8">
            No compensation shall be provided for terminated accounts.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Amendments</h2>
          <p className="mb-4">
            Foundect may update this Policy at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of the updated Policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            This Policy is governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p className="mb-3">For questions related to this Policy:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            AML and KYC compliance is a shared responsibility.
            Users are expected to act honestly, transparently, and lawfully.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF AML & KYC POLICY</p>
        </div>
      </div>
    </div>
  );
}

