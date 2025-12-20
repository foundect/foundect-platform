import Image from "next/image";
import Link from "next/link";

export default function ShariahCompliancePolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shari'ah Compliance Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Shari'ah Compliance Policy ("Policy") outlines Foundect's approach to facilitating Shari'ah-aligned investment activities on its platform.
          </p>

          <p className="mb-8">
            This Policy is intended for transparency and informational purposes only and does not constitute religious, legal, or financial advice.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Purpose of This Policy</h2>
          <p className="mb-3">
            Foundect aims to support ethical, Shari'ah-aligned investment opportunities by providing a digital platform that connects investors and businesses.
          </p>
          <p className="mb-3">This Policy explains:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>How Shari'ah principles are considered on the Platform</li>
            <li>The responsibilities of Foundect, Businesses, and Investors</li>
            <li>The limitations of Foundect's role regarding Shari'ah compliance</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Foundect's Role & Disclaimer</h2>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Is NOT a Shari'ah-certified institution</li>
            <li>Does NOT issue fatwas or religious rulings</li>
            <li>Does NOT act as a Shari'ah advisory board</li>
            <li>Does NOT guarantee Shari'ah compliance of any campaign</li>
          </ul>
          <p className="mb-4">
            Foundect operates solely as a technology and facilitation platform.
          </p>
          <p className="mb-8">
            All final Shari'ah determinations remain the responsibility of users.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shari'ah-Aligned Structures Supported</h2>
          <p className="mb-3">
            The Platform is designed to facilitate investment structures that are commonly recognized as Shari'ah-aligned, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Musharakah</li>
            <li>Mudarabah</li>
            <li>Murabaha</li>
          </ul>
          <p className="mb-8">
            The inclusion of these structures does not imply certification or approval by Foundect.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Business Responsibilities</h2>
          <p className="mb-3">Businesses launching campaigns on Foundect are solely responsible for ensuring that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Their activities comply with Shari'ah principles</li>
            <li>Their business operations avoid prohibited (haram) activities</li>
            <li>Investment structures are disclosed accurately</li>
            <li>Profit mechanisms do not involve riba (interest), gharar (excessive uncertainty), or haram income</li>
          </ul>
          <p className="mb-8">
            Businesses must not misrepresent their Shari'ah alignment.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Investor Responsibilities</h2>
          <p className="mb-3">Investors acknowledge and agree that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>They are responsible for assessing Shari'ah compliance personally</li>
            <li>They should seek independent Shari'ah or financial advice if required</li>
            <li>Investment decisions are made at their own discretion</li>
          </ul>
          <p className="mb-8">
            Foundect does not substitute personal due diligence.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. External Review & Verification</h2>
          <p className="mb-3">Foundect may, at its discretion:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Engage external Shari'ah reviewers</li>
            <li>Request Shari'ah-related documentation from Businesses</li>
            <li>Display Shari'ah-related disclosures provided by Businesses</li>
          </ul>
          <p className="mb-3">However:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>External reviews do not constitute certification by Foundect</li>
            <li>Foundect does not guarantee the accuracy of external opinions</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. No Guarantee of Continuous Compliance</h2>
          <p className="mb-3">Shari'ah compliance may evolve over time due to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Business operational changes</li>
            <li>Market conditions</li>
            <li>Regulatory developments</li>
          </ul>
          <p className="mb-8">
            Foundect does not monitor continuous compliance after funds are transferred.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Prohibited Activities</h2>
          <p className="mb-3">Campaigns involving the following are strictly prohibited:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Interest-based lending or borrowing</li>
            <li>Gambling, alcohol, tobacco, pornography, or illegal activities</li>
            <li>Any income source clearly prohibited under Islamic law</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to remove campaigns that clearly violate these principles.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect shall not be liable for Shari'ah non-compliance</li>
            <li>Foundect shall not be responsible for religious interpretation disputes</li>
            <li>Foundect shall not compensate losses arising from Shari'ah concerns</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Amendments to This Policy</h2>
          <p className="mb-4">
            Foundect may update this Policy at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of the updated Policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            This Policy is governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
          <p className="mb-3">For questions regarding this Policy:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect facilitates access — not religious certification.
            Users are expected to act responsibly, ethically, and in accordance with their beliefs.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF SHARI'AH COMPLIANCE POLICY</p>
        </div>
      </div>
    </div>
  );
}

