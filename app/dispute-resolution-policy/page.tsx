import Image from "next/image";
import Link from "next/link";

export default function DisputeResolutionPolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dispute Resolution Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: 20 December, 2025</p>

          <p className="mb-8">
            This Dispute Resolution Policy ("Policy") outlines the process for addressing disputes arising from the use of the Foundect platform.
          </p>

          <p className="mb-8">
            This Policy is intended to provide a structured approach to resolving disagreements while clarifying Foundect's limited role as a facilitative platform.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Purpose of This Policy</h2>
          <p className="mb-3">The purpose of this Policy is to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Encourage fair, timely, and efficient resolution of disputes</li>
            <li>Reduce unnecessary legal escalation</li>
            <li>Clarify Foundect's role in dispute handling</li>
            <li>Protect platform integrity</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Scope of Disputes</h2>
          <p className="mb-3">This Policy applies to disputes related to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use of the Foundect platform</li>
            <li>Investment campaigns</li>
            <li>Communications between users</li>
            <li>Account actions or restrictions</li>
          </ul>
          <p className="mb-8">
            This Policy applies to both Investor and Business accounts.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Foundect's Role in Disputes</h2>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Is not a party to investment agreements</li>
            <li>Does not manage or control user funds</li>
            <li>Does not guarantee business performance or outcomes</li>
          </ul>
          <p className="mb-8">
            Accordingly, disputes between Investors and Businesses are primarily the responsibility of the involved parties.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Internal Resolution Requirement</h2>
          <p className="mb-3">Before initiating external legal action, users agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Attempt resolution directly with the other party</li>
            <li>Submit a formal dispute notice to Foundect if unresolved</li>
          </ul>
          <p className="mb-8">
            This step is mandatory unless prohibited by law.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Submitting a Dispute to Foundect</h2>
          <p className="mb-3">To submit a dispute, users must provide:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Account details</li>
            <li>Description of the dispute</li>
            <li>Relevant campaign or transaction reference</li>
            <li>Supporting evidence (if available)</li>
          </ul>
          <p className="mb-8">
            Disputes must be submitted through the <Link href="/support" className="text-blue-600 hover:underline">Support page</Link>.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Foundect Review Process</h2>
          <p className="mb-3">Upon receiving a dispute:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Foundect may review submitted information</li>
            <li>Foundect may request additional documentation</li>
            <li>Foundect may facilitate communication between parties</li>
          </ul>
          <p className="mb-8">
            Foundect does not act as a judge, arbitrator, or legal authority.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitations of Foundect's Involvement</h2>
          <p className="mb-3">Foundect:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Does not issue binding decisions</li>
            <li>Does not enforce settlements</li>
            <li>Does not guarantee dispute resolution</li>
          </ul>
          <p className="mb-8">
            Any guidance provided by Foundect is non-binding and facilitative in nature.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Account Restrictions During Disputes</h2>
          <p className="mb-3">Foundect may, at its discretion:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Temporarily restrict account functionality</li>
            <li>Freeze campaign interactions</li>
            <li>Suspend accounts pending review</li>
          </ul>
          <p className="mb-8">
            These actions are precautionary and do not imply fault.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Fraud & Misconduct Allegations</h2>
          <p className="mb-3">If a dispute involves allegations of:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fraud</li>
            <li>Misrepresentation</li>
            <li>Forged documents</li>
            <li>Payment manipulation</li>
          </ul>
          <p className="mb-3">Foundect reserves the right to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Immediately suspend accounts</li>
            <li>Report matters to relevant authorities</li>
            <li>Terminate access without prior notice</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. External Legal Action</h2>
          <p className="mb-3">If a dispute cannot be resolved internally:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Parties may pursue legal remedies independently</li>
            <li>Foundect is not obligated to participate</li>
          </ul>
          <p className="mb-8">
            Users acknowledge that Foundect is not liable for dispute outcomes.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Foundect shall not be liable for damages arising from disputes between users</li>
            <li>Foundect's total liability, if any, shall not exceed fees paid to Foundect</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Abuse of Dispute Process</h2>
          <p className="mb-3">Submitting false, malicious, or repetitive disputes may result in:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Account suspension</li>
            <li>Permanent termination</li>
            <li>Loss of platform access</li>
          </ul>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Amendments</h2>
          <p className="mb-4">
            Foundect may update this Policy at any time.
          </p>
          <p className="mb-8">
            Continued use of the Platform constitutes acceptance of updated terms.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            This Policy is governed by the laws of Bangladesh.
          </p>
          <p className="mb-8">
            Any disputes relating to this Policy shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p className="mb-3">For dispute-related inquiries:</p>
          <p className="mb-2">
            Email: <a href="mailto:support@foundect.com" className="text-blue-600 hover:underline">support@foundect.com</a>
          </p>
          <p className="mb-8">
            (<Link href="/support" className="text-blue-600 hover:underline">Support page</Link>)
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Note</h2>
          <p className="mb-8">
            Foundect facilitates connections, not outcomes.
            Users are encouraged to act responsibly and resolve disputes ethically.
          </p>

          <hr className="my-8 border-gray-300" />

          <p className="text-center text-gray-600 mt-8 mb-4">END OF DISPUTE RESOLUTION POLICY</p>
        </div>
      </div>
    </div>
  );
}



