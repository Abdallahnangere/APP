'use client';

import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 pb-24">
      <button onClick={() => router.back()} className="flex items-center text-slate-500 mb-6 hover:text-slate-900 transition">
        <ArrowLeft className="w-5 h-5 mr-1" /> Back
      </button>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Shield className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose prose-slate prose-sm max-w-none space-y-6">
          <p className="text-xs text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h3 className="font-bold text-lg mb-2">1. Introduction</h3>
            <p>
              Sauki Data Links ("we", "us", or "our") operates the <strong>SAUKI MART</strong> mobile application. 
              We are committed to protecting your personal data in accordance with the <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong>.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">2. Information We Collect</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Phone number, email address, and name when you initiate a transaction.</li>
              <li><strong>Transaction Data:</strong> Details of the data bundles or products you purchase.</li>
              <li><strong>Device Information:</strong> Information about the device used to access our services for fraud prevention.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">3. How We Use Your Information</h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process airtime and data top-ups via our API partners (Amigo).</li>
              <li>Verify payments via Flutterwave.</li>
              <li>Deliver physical products to your location.</li>
              <li>Send transaction receipts and support updates.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">4. Third-Party Sharing</h3>
            <p>We share data only with essential partners:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Flutterwave:</strong> For payment processing. We do not store your debit card details directly.</li>
              <li><strong>Amigo/Network Providers:</strong> To facilitate the delivery of data bundles to your phone number.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">5. Data Security</h3>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) to protect your data during transmission. 
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">6. Your Rights (NDPR)</h3>
            <p>As a Nigerian user, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to your personal data.</li>
              <li>Request deletion of your transaction history.</li>
              <li>Object to the processing of your data.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">7. Contact Us</h3>
            <p>If you have questions about this policy, contact our Data Protection Officer at:</p>
            <p className="font-medium mt-2">Email: saukidatalinks@gmail.com</p>
            <p className="font-medium">Phone: 09024099561</p>
          </section>
        </div>
      </div>
    </div>
  );
}