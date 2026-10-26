import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo, LOGIN_URL } from "@/lib/config";
import Link from "next/link";
import Heading from "../component/Heading";

const { email, address } = contactInfo;

const pageUrl = `${BASE_URL}/privacy-policy`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: `Learn how ${APP_NAME} collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices.`,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Privacy Policy | ${APP_NAME}`,
    description: `Learn how ${APP_NAME} collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices.`,
    url: pageUrl,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Privacy Policy | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${APP_NAME}`,
    description: `Learn how ${APP_NAME} collects, uses, and protects your personal information.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative py-14 sm:py-20">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-6">          
            <Heading
              title="Privacy Policy"
              description="Your privacy matters to us. Learn how we collect, use, and protect your personal information while providing you with the best scheduling experience."
              headingTag="h1"
              titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl drop-shadow-sm border border-neutral-100 p-4 sm:p-12">
            <div className="prose prose-neutral max-w-none">
              
              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">1</span>
                  Introduction
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>At Getsettime, our Privacy Policy defines how we collect, use, share, and protect your personal information.</p>
                  <p>We follow the GDPR (EU) 2016/679 (General Data Protection Regulation), Indian data protection laws, and other international privacy rules.</p>
                  <p>When you create an account, use this platform, or give us your information, you agree to the practices described in our Privacy Policy.</p>
                  <p>We process personal data lawfully, fairly, transparently, and only for legitimate business purposes.</p>
                  <p className="font-semibold text-neutral-900">This policy applies to whom?</p>
                  <ul className="list-disc list-inside space-y-2 pl-3">
                    <li>Our clients who signed up and use this platform (as an app, software, system).</li>
                    <li>End-Users of our clients who interact with this platform for service booking or appointment.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">2</span>
                  Information We Collect
                </h2>
                
                <div className="space-y-6 sm:pl-11">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">2.1. Information You Provide</h3>
                    <p className="text-neutral-600 mb-3 font-medium">When you sign up or interact with Getsettime, we may collect:</p>
                    <ul className="list-disc list-inside text-neutral-600 space-y-2 pl-3">
                      <li>Your Account information, including full name, email, contact number, business name, address, and business or profession type.</li>
                      <li>Booking data including appointment details, service descriptions, availability, event type and staff schedules.</li>
                      <li>Payment data with billing address and payment method (processed securely through third-party providers).</li>
                      <li>Customer or staff information with contact details and images you upload for business use.</li>
                      <li>Support requests when contacting customer support via chat, email, or phone.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">2.2. Information We Collect Automatically</h3>
                    <p className="text-neutral-600 mb-3 font-medium">When you use our Services, we may collect automatically:</p>
                    <ul className="list-disc list-inside text-neutral-600 space-y-2 pl-3">
                      <li>Device and usage data: IP address, browser type, operating system, device model, and location.</li>
                      <li>Cookies and analytics data: We use cookies and third-party analytics tools (such as Google Analytics and Semrush) to understand user behaviour and improve performance.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">2.3. Information from Third Parties</h3>
                    <p className="text-neutral-600">We may receive information from other sources, such as Google Calendar, Zoom, or Stripe, which you have integrated with Getsettime. Any data shared through these integration sources remains governed by their respective privacy policies.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">3</span>
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p className="font-medium text-neutral-900">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-3">
                    <li>Provide and manage booking, scheduling, and payment features.</li>
                    <li>Send appointment confirmations, notifications, and reminders.</li>
                    <li>Offer customer support and technical assistance.</li>
                    <li>Improve the platform, user experience, and service quality.</li>
                    <li>Send service updates, account notices, and promotional offers (you can opt out anytime).</li>
                    <li>Comply with legal, tax, and regulatory obligations.</li>
                    <li>Protect our systems and prevent fraud, misuse, or unauthorised access.</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">4</span>
                  Sharing and Disclosure of Data
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p className="font-medium text-neutral-900">We only share your information in limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 pl-3">
                    <li><span className="font-medium">Service providers:</span> Trusted third parties such as payment gateways (Stripe, PayPal) or communication tools (Twilio, SendGrid).</li>
                    <li><span className="font-medium">Analytics and hosting:</span> Used for service improvement and infrastructure management.</li>
                    <li><span className="font-medium">Legal compliance:</span> When required by law or to protect our rights, users, or the public.</li>
                    <li><span className="font-medium">Business transfer:</span> In the event of a merger, sale, or acquisition, your data may be transferred with appropriate safeguards in place.</li>
                  </ul>
                  <p className="font-semibold text-neutral-900 mt-4">Getsettime does not sell or rent personal data to third parties.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">5</span>
                  Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>Our website and application use cookies to personalise your experience and maintain session security.</p>
                  <p>You can modify your browser settings to manage cookies, but disabling them may limit some platform features.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">6</span>
                  Data Retention
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>We retain personal information only as long as necessary to deliver our services and comply with legal obligations.</p>
                  <p>When an account is terminated or inactive for an extended period, data may be securely deleted or anonymised.</p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">7</span>
                  Your Rights and Choices
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p className="font-medium text-neutral-900">Under applicable laws, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-3">
                    <li>Access and obtain a copy of your personal data.</li>
                    <li>Correct inaccurate or incomplete information.</li>
                    <li>Request deletion (&quot;right to be forgotten&quot;).</li>
                    <li>Restrict or object to processing.</li>
                    <li>Port your data to another provider.</li>
                    <li>Withdraw consent for marketing communications.</li>
                  </ul>
                  <p className="mt-4">To exercise any of these rights, email us at <a href={`mailto:${email}`} className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline">{email}</a>. We will respond within 30 days.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">8</span>
                  Security
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>We use industry-standard encryption (SSL) and strict access controls to protect personal data.</p>
                  <p>While we strive for top-tier security, no system is entirely infallible. We recommend keeping your password confidential and using secure devices.</p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">9</span>
                  Third-Party Integrations
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>Getsettime connects with third-party apps such as Google Calendar, Zoom, Stripe, and PayPal to extend functionality.</p>
                  <p>Before enabling these integrations, please review their privacy policies as we do not control third-party data processing practices.</p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">10</span>
                  Children&apos;s Privacy
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>Getsettime is not intended for individuals under 13 years old.</p>
                  <p>We do not knowingly collect data from children. If you believe a child has provided personal information, contact us.</p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">11</span>
                  International Data Transfer
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>If you access Getsettime from outside India, your data may be transferred to and processed in other countries where our servers or service providers operate. We ensure these transfers comply with applicable data protection standards.</p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">12</span>
                  Changes to This Policy
                </h2>
                <div className="space-y-4 text-neutral-600 sm:pl-11">
                  <p>We may update our Privacy Policy from time to time to reflect changes in law, technology, or our business practices.</p>
                  <p>All updates will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of the Services after updates means acceptance of the new terms.</p>
                </div>
              </div>

              {/* Section 13 - Contact */}
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">13</span>
                  Contact Us
                </h2>
                <div className="sm:pl-11">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6">
                    <p className="text-neutral-600 mb-4">If you have questions, complaints, or privacy requests, please get in touch with us:</p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-neutral-700">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${email}`} className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline">{email}</a>
                      </p>
                      <p className="flex items-center gap-2 text-neutral-700">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{`${APP_NAME}, ${address}`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:p-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {/* left: Content */}
                <div className="space-y-3">
                  <Heading
                    badge="Built for Modern Business"
                    title="Ready for GetSetTime To Manage Your Appointments"
                    description="Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more."
                    titleClassName="text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-[40px] capitalize"
                    descriptionClassName = "text-white"
                  />
                  
                  <div className="mt-8">
                    <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Privacy Policy" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Get Started</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item} className="text-white flex items-center gap-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> {item}</span>
                    ))}
                  </div>
                </div>
                {/* right: Image */}
                <div className="relative mx-auto w-full hidden lg:block">
                  <div className="rounded-xl bg-white/14 sm:p-4 backdrop-blur-xl">
                    <div className="rounded-xl bg-white p-3 sm:p-4 drop-shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-neutral-900">Today’s bookings</div>
                          <div>Live preview</div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-600" />
                      </div>
                      <div className="mt-5 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 sm:px-4 py-2 sm:py-3">
                            <div>
                              <div className="text-sm sm:text-base font-medium text-neutral-900">{item.title}</div>
                              <div className="text-xs sm:text-sm text-neutral-600">{item.time}</div>
                            </div>
                            <span className="rounded-md bg-emerald-50 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-emerald-700">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                        <div>Reminders sent</div>
                        <div className="text-2xl font-bold text-neutral-900">1,284</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-5 -bottom-6 hidden lg:block rounded-xl bg-white px-4 py-3 drop-shadow-xl animate-float">
                    <div>No-show reduction</div>
                    <div className="text-xl font-bold text-neutral-900">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
