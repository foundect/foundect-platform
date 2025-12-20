import Image from "next/image";
import Link from "next/link";

export default function RiskDisclosurePage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Risk Disclosure</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Risk Disclosure document explains the risks associated with using the Foundect platform and participating in investment opportunities listed on Foundect.
          </p>

          <p className="mb-8">
            By accessing, registering, or investing through Foundect, you acknowledge that you have read, understood, and accepted the risks described below.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. General Investment Risk</h2>
          <p className="mb-3">All investments involve risk.</p>
          <p className="mb-3">By using Foundect, you understand and accept that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You may lose part or all of your invested capital</li>
            <li>Returns are NOT guaranteed</li>
            <li>Past performance does NOT indicate future results</li>
            <li>Profit distributions depend on business performance</li>
          </ul>
          <p className="mb-8">
            Foundect does not provide investment advice or guarantees of any kind.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Business & Operational Risk</h2>
          <p className="mb-3">Businesses raising funds on Foundect may face risks including, but not limited to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Operational failure</li>
            <li>Management inefficiencies</li>
            <li>Market competition</li>
            <li>Supply chain disruptions</li>
            <li>Cash flow shortages</li>
            <li>Regulatory changes</li>
          </ul>
          <p className="mb-8">
            Such risks may result in delayed, reduced, or no profit distribution.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shari'ah Structure Risk</h2>
          <p className="mb-3">Foundect facilitates Shari'ah-aligned investment structures such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Musharakah</li>
            <li>Mudarabah</li>
            <li>Murabaha</li>
          </ul>
          <p className="mb-3">However:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Different structures carry different risk profiles</li>
            <li>Profit-sharing arrangements may vary</li>
            <li>Some structures distribute profits only at the end of the term</li>
            <li>Loss-sharing rules differ by contract</li>
          </ul>
          <p className="mb-8">
            Foundect does not guarantee Shari'ah compliance outcomes.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. No Fixed Returns</h2>
          <p className="mb-3">Foundect does NOT offer:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fixed interest</li>
            <li>Guaranteed profit rates</li>
            <li>Capital protection</li>
          </ul>
          <p className="mb-8">
            Any projected returns displayed on the Platform are estimates only and may not materialize.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liquidity Risk</h2>
          <p className="mb-3">Investments made through Foundect may be illiquid.</p>
          <p className="mb-3">This means:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>You may not be able to withdraw funds before campaign completion</li>
            <li>Early exit options may not exist</li>
            <li>Transfers of investment positions are not guaranteed</li>
          </ul>
          <p className="mb-8">
            Users should only invest funds they can afford to lock in for the full term.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Payment & Settlement Risk</h2>
          <p className="mb-3">Depending on campaign structure:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Funds may be transferred directly to businesses</li>
            <li>Foundect will not hold or control funds</li>
            <li>Incorrect payment confirmation may delay participation</li>
          </ul>
          <p className="mb-8">
            Foundect is not responsible for losses arising from incorrect transfers or confirmations.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Platform & Technology Risk</h2>
          <p className="mb-3">While Foundect strives to maintain a secure and reliable platform:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Technical failures may occur</li>
            <li>Downtime or delays are possible</li>
            <li>Data transmission risks exist</li>
          </ul>
          <p className="mb-8">
            Foundect is not liable for losses caused by technical interruptions.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Regulatory & Legal Risk</h2>
          <p className="mb-3">Laws and regulations may change.</p>
          <p className="mb-3">Such changes may:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Affect campaign operations</li>
            <li>Impact profit distributions</li>
            <li>Restrict platform functionality</li>
          </ul>
          <p className="mb-8">
            Foundect does not guarantee continued regulatory acceptance of all activities.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Information Accuracy Risk</h2>
          <p className="mb-3">Campaign information is provided by businesses.</p>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Does not verify all projections or claims</li>
            <li>Relies on information submitted by businesses</li>
          </ul>
          <p className="mb-8">
            Investors must conduct their own due diligence.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. No Fiduciary Duty</h2>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Does not act as a fiduciary</li>
            <li>Does not manage investments on your behalf</li>
            <li>Does not represent investors or businesses</li>
          </ul>
          <p className="mb-8">
            All investment decisions are made solely by users.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Force Majeure</h2>
          <p className="mb-3">Events beyond reasonable control may impact outcomes, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Natural disasters</li>
            <li>Political instability</li>
            <li>Economic crises</li>
            <li>Pandemics</li>
            <li>Acts of government</li>
          </ul>
          <p className="mb-8">
            Foundect shall not be held responsible for losses arising from such events.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. User Responsibility</h2>
          <p className="mb-3">By using Foundect, you confirm that:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>You understand the risks involved</li>
            <li>You are financially capable of bearing losses</li>
            <li>You have not relied solely on Foundect for decision-making</li>
          </ul>
          <p className="mb-8">
            Users are encouraged to seek independent professional advice if necessary.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect shall not be liable for investment losses</li>
            <li>Foundect shall not be liable for indirect or consequential damages</li>
          </ul>
          <p className="mb-8">
            Use of the Platform is at your own risk.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Acceptance of Risk</h2>
          <p className="mb-8">
            By continuing to use Foundect, you explicitly acknowledge and accept all risks described in this document.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p className="mb-3">For questions related to risk disclosure:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect is a facilitative platform, not a guarantor of returns or outcomes. Responsible investing requires understanding and accepting risk.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF RISK DISCLOSURE</p>
        </div>
      </div>
    </div>
  );
}

