import Image from "next/image";
import Link from "next/link";

export default function BusinessCampaignAgreementPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Campaign Agreement</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Business Campaign Agreement ("Agreement") governs the terms under which a Business ("Business", "Campaign Owner", "you", or "your") may create, publish, and operate an investment campaign on the Foundect platform ("Platform").
          </p>

          <p className="mb-8">
            By creating or submitting a campaign on Foundect, you confirm that you have read, understood, and agreed to be legally bound by this Agreement.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Purpose of This Agreement</h2>
          <p className="mb-3">This Agreement applies exclusively to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Businesses launching campaigns on Foundect</li>
            <li>Campaign-related disclosures, fundraising, and profit distribution</li>
          </ul>
          <p className="mb-3">This Agreement supplements and must be read together with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Terms & Conditions</li>
            <li>User Agreement</li>
            <li>Privacy Policy</li>
            <li>Risk Disclosure</li>
          </ul>
          <p className="mb-8">
            In case of conflict, Foundect's Terms & Conditions shall prevail.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Role of Foundect</h2>
          <p className="mb-3">Foundect acts solely as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>A technology platform</li>
            <li>A facilitation and discovery tool</li>
          </ul>
          <p className="mb-3">Foundect does NOT:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Act as a lender or borrower</li>
            <li>Act as a fund manager</li>
            <li>Control business operations</li>
            <li>Guarantee funding success</li>
            <li>Guarantee profits or capital</li>
          </ul>
          <p className="mb-8">
            All obligations arising from a campaign rest solely with the Business.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Campaign Creation & Approval</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Submission</h3>
          <p className="mb-3">Businesses must provide:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Accurate business information</li>
            <li>Clear campaign objectives</li>
            <li>Transparent risk disclosures</li>
            <li>Shari'ah-aligned investment structure</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Review</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All campaigns are subject to review</li>
            <li>Approval is not guaranteed</li>
            <li>Foundect may request additional documents</li>
            <li>Foundect may reject campaigns without explanation</li>
          </ul>
          <p className="mb-8">
            Campaigns may remain under review for up to 24 hours or longer.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Accuracy & Disclosure Obligations</h2>
          <p className="mb-3">Businesses represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All campaign information is true and complete</li>
            <li>Financial projections are reasonable and not misleading</li>
            <li>Risks are clearly disclosed</li>
            <li>No material facts are omitted</li>
          </ul>
          <p className="mb-8">
            Businesses are solely responsible for any misrepresentation.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Use of Funds</h2>
          <p className="mb-3">Funds raised through Foundect must:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Be used only for disclosed campaign purposes</li>
            <li>Not be diverted for undisclosed activities</li>
          </ul>
          <p className="mb-8">
            Foundect does not monitor or control fund usage after transfer.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Investment Structures & Shari'ah Compliance</h2>
          <p className="mb-3">Businesses may structure campaigns using:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Musharakah</li>
            <li>Mudarabah</li>
            <li>Murabaha</li>
          </ul>
          <p className="mb-3">Businesses acknowledge that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Foundect does not issue Shari'ah rulings</li>
            <li>Foundect does not guarantee compliance</li>
            <li>Final Shari'ah responsibility lies with the Business</li>
          </ul>
          <p className="mb-8">
            Any Shari'ah violation is the sole responsibility of the Business.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Profit Distribution</h2>
          <p className="mb-3">Businesses agree that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Profit distribution terms must be disclosed clearly</li>
            <li>Distribution timing must be specified</li>
            <li>Profit is not guaranteed</li>
          </ul>
          <p className="mb-3">Profit may be distributed:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Periodically</li>
            <li>At end of investment term</li>
            <li>As defined in campaign agreements</li>
          </ul>
          <p className="mb-8">
            Foundect is not responsible for delays or failures in profit distribution.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Fees & Platform Charges</h2>
          <p className="mb-3">Foundect may charge:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Platform fees</li>
            <li>Success fees</li>
            <li>Operational or service fees</li>
          </ul>
          <p className="mb-3">Fees will be:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Disclosed before campaign launch</li>
            <li>Deducted as per agreed terms</li>
          </ul>
          <p className="mb-8">
            Foundect reserves the right to modify fees with prior notice.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Investor Communications & Conduct</h2>
          <p className="mb-3">Businesses agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Respond professionally to investor inquiries</li>
            <li>Not mislead or coerce investors</li>
            <li>Maintain ethical communication</li>
          </ul>
          <p className="mb-8">
            Foundect may remove or restrict campaigns for abusive or deceptive conduct.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Campaign Suspension or Removal</h2>
          <p className="mb-3">Foundect may:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Suspend campaigns</li>
            <li>Remove campaigns</li>
            <li>Restrict visibility</li>
          </ul>
          <p className="mb-3">without prior notice if:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Policy violations occur</li>
            <li>Legal or regulatory risks arise</li>
            <li>Platform integrity is threatened</li>
          </ul>
          <p className="mb-8">
            No compensation shall be provided for suspended or removed campaigns.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Liability & Indemnification</h2>
          <p className="mb-3">Businesses acknowledge that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Investment risks rest with investors and businesses</li>
            <li>Foundect is not liable for campaign outcomes</li>
          </ul>
          <p className="mb-3">Businesses agree to indemnify Foundect against:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Claims</li>
            <li>Losses</li>
            <li>Legal expenses</li>
          </ul>
          <p className="mb-8">
            arising from campaign operation or misrepresentation.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Intellectual Property & Content Rights</h2>
          <p className="mb-3">Businesses grant Foundect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>A non-exclusive right to display campaign content</li>
            <li>The right to use campaign materials for platform operations</li>
          </ul>
          <p className="mb-8">
            Businesses retain ownership of their intellectual property.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Termination of Campaigns</h2>
          <p className="mb-3">Businesses may terminate campaigns subject to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Applicable agreements</li>
            <li>Legal obligations</li>
            <li>Investor commitments</li>
          </ul>
          <p className="mb-8">
            Foundect is not responsible for obligations arising after termination.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            This Agreement is governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            All disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p className="mb-3">For questions regarding this Agreement:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect provides access and visibility — not guarantees. Businesses are expected to operate campaigns responsibly, transparently, and lawfully.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF BUSINESS CAMPAIGN AGREEMENT</p>
        </div>
      </div>
    </div>
  );
}
