'use client';

import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Terms() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 pb-24">
      <button onClick={() => router.back()} className="flex items-center text-slate-500 mb-6 hover:text-slate-900 transition">
        <ArrowLeft className="w-5 h-5 mr-1" /> Back
      </button>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                <FileText className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold">Terms of Service</h1>
        </div>

        <div className="prose prose-slate prose-sm max-w-none space-y-6">
          <p className="text-xs text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h3 className="font-bold text-lg mb-2">1. Acceptance of Terms</h3>
            <p>
              By accessing and using the SAUKI MART application, you agree to be bound by these Terms and Conditions 
              and all applicable Nigerian laws and regulations.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">2. Service Description</h3>
            <p>
              SAUKI MART provides a platform for purchasing virtual top-up (VTU) data bundles, airtime, and mobile devices. 
              We act as an intermediary between you and telecommunication providers (MTN, Airtel, Glo, 9mobile).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">3. Payments & Refunds</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Finality:</strong> All sales of data bundles are final. Once data is sent to a phone number, it cannot be reversed.</li>
              <li><strong>User Error:</strong> We are not responsible if you input the wrong phone number. Please verify numbers before confirming payment.</li>
              <li><strong>Failed Transactions:</strong> If your account is debited but value is not received, we will verify with Flutterwave and process a refund or retry the delivery within 24 hours.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">4. Product Orders</h3>
            <p>
              For physical devices (ecommerce), delivery times are estimates. We verify payment before shipping. 
              Warranty claims are subject to the manufacturer's terms in Nigeria.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">5. Prohibited Activities</h3>
            <p>You agree not to use the app for fraudulent purposes, money laundering, or attempting to exploit system vulnerabilities.</p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">6. Limitation of Liability</h3>
            <p>
              Sauki Data Links shall not be liable for network downtime from providers (e.g., MTN network failure) 
              that delays data delivery.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">7. Governing Law</h3>
            <p>
              These terms shall be governed by the laws of the Federal Republic of Nigeria. 
              Any disputes shall be resolved via arbitration in Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}