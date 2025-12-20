import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Privacy Policy explains how Foundect ("Foundect", "we", "us", or "our") collects, uses, stores, shares, and protects your personal data when you access or use the Foundect platform, website, applications, and related services (collectively, the "Platform").
          </p>

          <p className="mb-8">
            By using Foundect, you agree to the collection and use of your data in accordance with this Privacy Policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information to provide, operate, and improve the Platform.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Personal Information</h3>
          <p className="mb-3">We may collect the following personal data:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Full legal name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>National ID (NID) number</li>
            <li>NID document images</li>
            <li>Selfie images for verification</li>
            <li>E-TIN number (if applicable)</li>
            <li>Nominee information</li>
            <li>Bank account details</li>
            <li>Profile photo</li>
            <li>Account credentials</li>
          </ul>
          <p className="mb-8">
            This information is required for identity verification, regulatory compliance, and platform security.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Business Information</h3>
          <p className="mb-3">For Business Accounts, we may collect:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Business name</li>
            <li>Business registration details</li>
            <li>Trade license</li>
            <li>Business address</li>
            <li>Owner or director information</li>
            <li>Campaign details</li>
            <li>Financial information relevant to campaigns</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.3 Usage & Technical Information</h3>
          <p className="mb-3">We automatically collect certain technical data, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on the Platform</li>
            <li>Interaction logs</li>
          </ul>
          <p className="mb-8">
            This data helps us improve performance, security, and user experience.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-3">We use collected data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Account creation and management</li>
            <li>Identity verification and KYC compliance</li>
            <li>Fraud prevention and security monitoring</li>
            <li>Campaign listing and participation</li>
            <li>Transaction verification</li>
            <li>Communication and notifications</li>
            <li>Platform analytics and improvements</li>
            <li>Legal and regulatory compliance</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shari'ah & Regulatory Compliance</h2>
          <p className="mb-3">Some data is collected to ensure compliance with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Shari'ah-aligned investment requirements</li>
            <li>Anti-Money Laundering (AML) regulations</li>
            <li>Know Your Customer (KYC) obligations</li>
          </ul>
          <p className="mb-8">
            Failure to provide required data may result in account rejection or suspension.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing & Disclosure</h2>
          <p className="mb-4">
            Foundect does NOT sell user data.
          </p>
          <p className="mb-3">We may share data only when necessary:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With regulatory authorities when legally required</li>
            <li>With verification partners for KYC checks</li>
            <li>With law enforcement under valid legal requests</li>
            <li>With service providers strictly for platform operations</li>
          </ul>
          <p className="mb-8">
            All third parties are contractually obligated to maintain confidentiality.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Storage & Security</h2>
          <p className="mb-3">We implement reasonable technical and organizational measures to protect user data, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encrypted storage</li>
            <li>Secure servers</li>
            <li>Access controls</li>
            <li>Regular security reviews</li>
          </ul>
          <p className="mb-8">
            However, no system is 100% secure. Users acknowledge the inherent risks of digital data transmission.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="mb-3">We retain personal data:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>As long as required to provide services</li>
            <li>As long as mandated by law or regulation</li>
            <li>For dispute resolution and compliance</li>
          </ul>
          <p className="mb-8">
            Even after account deletion, some data may be retained to meet legal obligations.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. User Rights</h2>
          <p className="mb-3">Depending on applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Request corrections</li>
            <li>Request deletion (subject to legal limits)</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <p className="mb-8">
            Requests can be made through the <Link href="/support" className="text-blue-600 hover:underline">Support page</Link>.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies & Tracking Technologies</h2>
          <p className="mb-3">Foundect may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Maintain sessions</li>
            <li>Improve platform functionality</li>
            <li>Analyze user behavior</li>
          </ul>
          <p className="mb-8">
            Users may disable cookies via browser settings, though some features may not function properly.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Third-Party Links</h2>
          <p className="mb-3">
            The Platform may contain links to third-party websites.
          </p>
          <p className="mb-8">
            Foundect is not responsible for the privacy practices of external sites. Users should review their respective privacy policies.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
          <p className="mb-4">
            Foundect does not knowingly collect data from individuals under the legal age.
          </p>
          <p className="mb-8">
            If such data is identified, it will be removed immediately.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. International Data Transfers</h2>
          <p className="mb-8">
            Your data may be processed or stored outside your country of residence, subject to appropriate safeguards and legal compliance.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
          <p className="mb-4">
            Foundect reserves the right to update this Privacy Policy at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of the revised policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
          <p className="mb-3">For privacy-related inquiries:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Your trust matters to us. Foundect is committed to protecting user data while maintaining transparency, compliance, and ethical responsibility.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
}

