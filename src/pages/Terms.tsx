import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Legal Terms for Gym Buddy by Momentum Build Ltd
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/30 p-6 rounded-lg border border-border mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="#eula"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-orange-500 text-xl">📄</span>
                <span className="text-foreground hover:text-orange-500 transition-colors">
                  End User License Agreement (EULA)
                </span>
              </a>
              <a
                href="#terms-of-service"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-orange-500 text-xl">📋</span>
                <span className="text-foreground hover:text-orange-500 transition-colors">
                  Terms of Service
                </span>
              </a>
              <a
                href="#privacy-policy"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-orange-500 text-xl">🔒</span>
                <span className="text-foreground hover:text-orange-500 transition-colors">
                  Privacy Policy
                </span>
              </a>
              <a
                href="#medical-disclaimer"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-orange-500 text-xl">⚕️</span>
                <span className="text-foreground hover:text-orange-500 transition-colors">
                  Medical Disclaimer & Health Disclosures
                </span>
              </a>
            </div>
          </nav>

          <div className="space-y-12">
            {/* EULA Section */}
            <section id="eula">
              <h2 className="text-3xl font-bold mb-6 text-foreground">End User License Agreement (EULA)</h2>

              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Gym Buddy</p>
                  <p className="text-sm text-muted-foreground">Effective Date: October 17th 2025</p>
                  <p className="text-sm text-muted-foreground">Last Updated: October 17th 2025</p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="font-bold text-lg mb-2 text-foreground">IMPORTANT – READ CAREFULLY</p>
                  <p className="text-foreground/90 leading-relaxed">
                    This End User License Agreement ("EULA" or "Agreement") is a legal agreement between you ("User," "you," or "your") and Momentum Build Ltd ("Company," "we," "us," or "our") for the Gym Buddy mobile application software (the "App" or "Software"), including any updates, upgrades, and related documentation.
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-4 font-semibold">
                    BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS EULA. IF YOU DO NOT AGREE TO THE TERMS OF THIS EULA, DO NOT DOWNLOAD, INSTALL, ACCESS, OR USE THE SOFTWARE.
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    This EULA supplements, and should be read in conjunction with, our Terms of Service and Privacy Policy, which are incorporated herein by reference.
                  </p>
                </div>

                {/* Section 1: Grant of License */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">1. GRANT OF LICENSE</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.1 Limited License</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Subject to your compliance with this EULA and payment of applicable subscription fees, Momentum Build Ltd grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Download and install the Software on devices associated with your Apple ID</li>
                      <li>Access and use the Software on such devices solely for your personal, non-commercial purposes</li>
                      <li>Receive automatic updates to the Software as we make them available</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.2 License Restrictions</h4>
                    <p className="text-foreground/90 leading-relaxed">This license does NOT grant you the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Use the Software on any device not associated with your Apple ID</li>
                      <li>Use the Software for any commercial purpose or on behalf of any third party</li>
                      <li>Distribute, sell, rent, lease, sublicense, or otherwise transfer the Software to any third party</li>
                      <li>Make the Software available over a network where multiple devices could use it at the same time</li>
                      <li>Use the Software in any manner not expressly authorized by this EULA</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.3 Subscription Requirement</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Access to the full functionality of the Software requires an active paid subscription. The license granted under this EULA is contingent upon maintaining a valid, paid subscription in good standing. Upon expiration or termination of your subscription, your license to use certain features of the Software will immediately terminate.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.4 Updates and Modifications</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      We may provide updates, patches, bug fixes, or modifications to the Software ("Updates") from time to time. Such Updates may be automatically downloaded and installed on your device. Updates are subject to this EULA unless accompanied by a separate license agreement, in which case the terms of that separate agreement will govern. We reserve the right to modify, suspend, or discontinue the Software or any features thereof at any time without notice.
                    </p>
                  </div>
                </div>

                {/* Section 2: Ownership */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">2. OWNERSHIP AND INTELLECTUAL PROPERTY RIGHTS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.1 Company Ownership</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The Software is licensed, not sold, to you. Momentum Build Ltd and its licensors retain all right, title, and interest in and to the Software, including all intellectual property rights therein. The Software is protected by copyright laws, international copyright treaties, and other intellectual property laws and treaties.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.2 Proprietary Rights</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      All rights not expressly granted to you under this EULA are reserved by Momentum Build Ltd. The Software contains proprietary and confidential information that is protected by applicable intellectual property and other laws.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.3 User-Generated Content</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      You retain all rights to the personal fitness data, workout logs, notes, and other content you create using the Software ("User Content"). By using the Software, you grant Momentum Build Ltd a limited, non-exclusive, royalty-free, worldwide license to use, store, process, and display your User Content solely for the purpose of providing the Software's functionality to you.
                    </p>
                  </div>
                </div>

                {/* Section 3: Restrictions */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">3. RESTRICTIONS ON USE</h3>
                  <p className="text-foreground/90 leading-relaxed">You expressly agree NOT to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                    <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Software</li>
                    <li>Modify, adapt, translate, or create derivative works based on the Software</li>
                    <li>Remove, alter, or obscure any proprietary notices from the Software</li>
                    <li>Copy, reproduce, or distribute the Software except as expressly permitted by this EULA</li>
                    <li>Use any automated means to access the Software or extract data from the Software</li>
                    <li>Introduce viruses, malware, or other harmful code into the Software</li>
                    <li>Use the Software for any unlawful purpose or in violation of any applicable laws</li>
                  </ul>
                </div>

                {/* Section 4: Third-Party Services */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">4. THIRD-PARTY SERVICES AND INTEGRATIONS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.1 Apple Services</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The Software integrates with various Apple services including Apple ID authentication, Apple Health and HealthKit, iCloud storage, and In-App Purchase. Your use of these Apple services is governed by Apple's applicable terms and conditions.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.2 Third-Party AI Services</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The Software allows you to optionally connect third-party AI service providers by providing your own API keys. You are solely responsible for obtaining, maintaining, and securing your API keys and for all costs incurred through your use of third-party AI services.
                    </p>
                  </div>
                </div>

                {/* Section 5: Privacy */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">5. DATA COLLECTION, PRIVACY, AND SECURITY</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Our collection, use, storage, and disclosure of your personal information is governed by our Privacy Policy. Your personal data is stored in iCloud and remains within the United States. Conversations with the Buddy AI assistant are stored for ninety (90) days and then automatically deleted.
                  </p>
                </div>

                {/* Section 6: Disclaimers */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">6. DISCLAIMERS AND WARRANTIES</h3>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-lg font-semibold text-foreground mb-3">6.1 NO WARRANTY – SOFTWARE PROVIDED "AS IS"</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-semibold text-foreground mb-3">6.3 No Medical Advice</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      THE SOFTWARE IS NOT INTENDED TO PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT, AND DOES NOT REPLACE THE SERVICES OF CERTIFIED PERSONAL TRAINERS, PHYSICAL THERAPISTS, OR MEDICAL PROFESSIONALS.
                    </p>
                    <p className="text-foreground/90 leading-relaxed mt-3">
                      You should consult with a physician before beginning any exercise program and seek professional medical advice if you have any medical conditions or concerns.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-semibold text-foreground mb-3">6.6 Assumption of Risk</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      PHYSICAL EXERCISE AND PHYSICAL ACTIVITY INVOLVE INHERENT RISKS, INCLUDING THE RISK OF SERIOUS INJURY, DISABILITY, OR DEATH. BY USING THE SOFTWARE, YOU ACKNOWLEDGE AND VOLUNTARILY ASSUME ALL SUCH RISKS.
                    </p>
                  </div>
                </div>

                {/* Section 7: Limitation of Liability */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">7. LIMITATION OF LIABILITY</h3>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MOMENTUM BUILD LTD BE LIABLE FOR ANY PERSONAL INJURY, ILLNESS, DISABILITY, OR DEATH ARISING FROM YOUR USE OF THE SOFTWARE, OR FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                    </p>
                    <p className="text-foreground/90 leading-relaxed mt-4 font-semibold">
                      OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF: (1) THE TOTAL AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT, OR (2) ONE HUNDRED DOLLARS ($100.00).
                    </p>
                  </div>
                </div>

                {/* Section 8: Indemnification */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">8. INDEMNIFICATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Momentum Build Ltd from and against any losses, liabilities, expenses, damages, costs, claims, and expenses arising out of or related to your use or misuse of the Software, your violation of this EULA, any injuries you suffer while using the Software, or your breach of any representations or warranties.
                  </p>
                </div>

                {/* Section 9: Termination */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">9. TERM AND TERMINATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    This EULA is effective from the date you first download or use the Software and continues until terminated. You may terminate by deleting the Software and canceling your subscription. We may terminate immediately if you breach this EULA. Upon termination, your license immediately terminates and you must cease all use of the Software.
                  </p>
                </div>

                {/* Section 10: Export Compliance */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">10. EXPORT COMPLIANCE</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You agree to comply with all applicable export control laws and regulations. You represent that you are not located in any country subject to a U.S. government embargo or listed on any U.S. government list of prohibited parties.
                  </p>
                </div>

                {/* Section 11: Dispute Resolution */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">11. DISPUTE RESOLUTION AND ARBITRATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    This EULA shall be governed by the laws of the State of Colorado and the United States. Any dispute shall be resolved exclusively through binding individual arbitration in Denver, Colorado. You and Momentum Build Ltd agree that each may bring claims only in an individual capacity and not as part of any class action.
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    You have the right to opt out of binding arbitration by sending written notice to support@momentumbuild.co within thirty (30) days of first accepting this EULA.
                  </p>
                </div>

                {/* Section 12: General Provisions */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">12. GENERAL PROVISIONS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">12.1 Entire Agreement</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      This EULA, together with the Terms of Service and Privacy Policy, constitutes the entire agreement between you and Momentum Build Ltd regarding the Software.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">12.11 Apple-Specific Terms</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      This EULA is between you and Momentum Build Ltd only, not with Apple Inc. Momentum Build Ltd is solely responsible for the Software. Apple and its subsidiaries are third-party beneficiaries of this EULA and have the right to enforce it.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">12.13 Contact Information</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Momentum Build Ltd<br />
                      Email: support@momentumbuild.co<br />
                      Website: www.momentumbuild.co<br />
                      Location: Denver, Colorado, United States
                    </p>
                  </div>
                </div>

                {/* Section 13: Acknowledgment */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">13. ACKNOWLEDGMENT AND ACCEPTANCE</h3>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold mb-4">
                      BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE SOFTWARE, YOU ACKNOWLEDGE THAT:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>You have read and understand this End User License Agreement</li>
                      <li>You agree to be bound by all terms and conditions of this EULA</li>
                      <li>You understand that the Software does not provide medical advice</li>
                      <li>You acknowledge the inherent risks of physical exercise and assume all such risks</li>
                      <li>You are at least 13 years of age</li>
                      <li>You will use the Software in compliance with all applicable laws</li>
                    </ul>
                    <p className="text-foreground/90 leading-relaxed mt-4 font-semibold">
                      IF YOU DO NOT AGREE TO ALL TERMS OF THIS EULA, YOU ARE NOT AUTHORIZED TO USE THE SOFTWARE.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">Version: 1.0</p>
                  <p className="text-sm text-muted-foreground mt-2">© 2025 Momentum Build Ltd. All rights reserved.</p>
                </div>
              </div>
            </section>

            {/* Terms of Service Section */}
            <section id="terms-of-service" className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Terms of Service</h2>

              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Gym Buddy</p>
                  <p className="text-sm text-muted-foreground">Effective Date: October 17th, 2025</p>
                  <p className="text-sm text-muted-foreground">Last Updated: October 17th, 2025</p>
                </div>

                {/* Section 1: Acceptance */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">1. ACCEPTANCE OF TERMS</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Welcome to Gym Buddy, a fitness application operated by Momentum Build Ltd ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Gym Buddy mobile application (the "App") and all related services (collectively, the "Service").
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    By creating an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      IMPORTANT: These Terms contain a binding arbitration clause and class action waiver in Section 14, which affect your legal rights. Please read them carefully.
                    </p>
                  </div>
                </div>

                {/* Section 2: Eligibility */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">2. ELIGIBILITY AND ACCOUNT REQUIREMENTS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.1 Age Requirement</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      You must be at least 13 years of age to use the Service. If you are under 18 years of age, you represent that you have obtained permission from your parent or legal guardian to use the Service.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.2 Account Creation</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      To access certain features of the Service, you must sign in using your Apple ID through Apple's authentication system ("Sign in with Apple"). You agree to provide accurate and complete information when creating your account and to keep this information current.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.3 Account Security</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      You are responsible for maintaining the security of your Apple ID and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
                    </p>
                  </div>
                </div>

                {/* Section 3: Subscription */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">3. SUBSCRIPTION AND PAYMENT TERMS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.1 Subscription Model</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Gym Buddy operates on a subscription basis. Access to the full features of the Service requires an active paid subscription.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.2 Pricing</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The current subscription price is $2.99 per month (USD). Subscription fees are subject to change upon thirty (30) days' advance notice as described in Section 13.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.3 Free Trial</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      New subscribers may be eligible for a 30-day free trial. If you do not cancel before the end of the free trial period, you will automatically be charged the monthly subscription fee.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.4 Billing and Automatic Renewal</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Subscriptions automatically renew each month unless cancelled at least 24 hours before the end of the current billing period</li>
                      <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
                      <li>Subscriptions may be managed and auto-renewal may be turned off by going to your Apple ID Account Settings</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.5 No Refunds</h4>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed">
                        All subscription fees are non-refundable except as required by law. No refunds will be provided for partial subscription periods, even if you do not use the Service during that time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Use of Service */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">4. USE OF THE SERVICE</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.1 License Grant</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service for your personal, non-commercial use.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.2 Permitted Uses</h4>
                    <p className="text-foreground/90 leading-relaxed">You may use the Service to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Create, modify, and track workout routines</li>
                      <li>Log exercise sessions, sets, repetitions, and weights</li>
                      <li>Track fitness goals and progress</li>
                      <li>Interact with the AI-powered "Buddy" feature</li>
                      <li>Integrate health and fitness data from Apple Health</li>
                      <li>Export your personal fitness data</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.3 Prohibited Uses</h4>
                    <p className="text-foreground/90 leading-relaxed">You agree NOT to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Use the Service for any illegal purpose</li>
                      <li>Reverse engineer or decompile the App</li>
                      <li>Use automated means to access or collect data from the Service</li>
                      <li>Interfere with or disrupt the Service</li>
                      <li>Attempt to gain unauthorized access to the Service</li>
                      <li>Remove proprietary notices from the Service</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5-8: Condensed for space */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">5. AI-POWERED FEATURES AND THIRD-PARTY AI SERVICES</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The Service includes an AI-powered "Buddy" feature. You may optionally connect third-party AI services using your own API keys, for which you are responsible for all costs and compliance with provider terms.
                  </p>
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      Buddy is not a certified personal trainer or medical professional. All recommendations are for informational purposes only.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">6. HEALTH AND FITNESS DATA</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The Service integrates with Apple Health. You control which data the Service can access through your device settings. Your data is stored in iCloud within the United States and will never be sold to third parties.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">7. INTELLECTUAL PROPERTY RIGHTS</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The Service and all content are owned by Momentum Build Ltd and protected by intellectual property laws. You retain rights to your personal fitness data but grant us a limited license to use it solely for providing the Service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">8. PRIVACY AND DATA PROTECTION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Your privacy is governed by our Privacy Policy. You may export or delete your data at any time through the App settings or by contacting support@momentumbuild.co.
                  </p>
                </div>

                {/* Section 9: Disclaimers */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">9. DISCLAIMERS AND ASSUMPTION OF RISK</h3>

                  <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-semibold text-foreground mb-3">9.1 NOT MEDICAL ADVICE</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      THE SERVICE IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE. ALWAYS CONSULT YOUR PHYSICIAN BEFORE BEGINNING ANY EXERCISE PROGRAM.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg mt-4">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      PHYSICAL EXERCISE INVOLVES INHERENT RISKS. BY USING THE SERVICE, YOU ACKNOWLEDGE AND ASSUME ALL RISKS ASSOCIATED WITH PHYSICAL ACTIVITY.
                    </p>
                  </div>
                </div>

                {/* Section 10: Limitation of Liability */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">10. LIMITATION OF LIABILITY</h3>
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOMENTUM BUILD LTD SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING PERSONAL INJURY, ILLNESS, DISABILITY, OR DEATH.
                    </p>
                    <p className="text-foreground/90 leading-relaxed mt-4 font-semibold">
                      OUR MAXIMUM LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE TWELVE (12) MONTHS PRIOR, OR $100.00, WHICHEVER IS GREATER.
                    </p>
                  </div>
                </div>

                {/* Section 11: Indemnification */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">11. INDEMNIFICATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You agree to indemnify and hold harmless Momentum Build Ltd from any claims, damages, or expenses arising from your use of the Service, violation of these Terms, or any injuries sustained while using the Service.
                  </p>
                </div>

                {/* Section 12: Termination */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">12. TERMINATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You may terminate your account at any time. We may suspend or terminate your access for violations of these Terms, payment failure, or prohibited conduct. Upon termination, your data will be permanently deleted and no refunds will be provided.
                  </p>
                </div>

                {/* Section 13: Changes */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">13. CHANGES TO THE SERVICE AND TERMS</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We reserve the right to modify these Terms or the Service at any time with thirty (30) days' notice for material changes. Price changes will apply upon renewal after the notice period.
                  </p>
                </div>

                {/* Section 14: Dispute Resolution */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">14. DISPUTE RESOLUTION AND ARBITRATION</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">14.1 Governing Law</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      These Terms shall be governed by the laws of the State of Colorado and the United States.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">14.2 Informal Dispute Resolution</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Before filing any formal dispute, you agree to first contact us at support@momentumbuild.co to attempt informal resolution.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">14.3 Binding Arbitration</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Any dispute that cannot be resolved informally shall be resolved exclusively through binding arbitration in Denver, Colorado, in accordance with the Commercial Arbitration Rules of the American Arbitration Association.
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">14.4 Class Action Waiver</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      YOU AND MOMENTUM BUILD LTD AGREE THAT EACH MAY BRING CLAIMS ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
                    </p>
                  </div>

                  <div className="space-y-3 mt-4">
                    <h4 className="text-lg font-semibold text-foreground">14.7 Opt-Out Right</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      You may opt out of binding arbitration within thirty (30) days of accepting these Terms by sending written notice to support@momentumbuild.co.
                    </p>
                  </div>
                </div>

                {/* Section 15: General Provisions */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">15. GENERAL PROVISIONS</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    These Terms, together with our Privacy Policy and EULA, constitute the entire agreement. The Service is controlled from the United States and intended for U.S. users.
                  </p>
                </div>

                {/* Section 16: Contact */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">16. CONTACT INFORMATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Momentum Build Ltd<br />
                    Email: support@momentumbuild.co<br />
                    Website: www.momentumbuild.co<br />
                    Location: Denver, Colorado, United States
                  </p>
                </div>

                {/* Section 17: Acknowledgment */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">17. ACKNOWLEDGMENT</h3>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold mb-4">
                      BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.
                    </p>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICE.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">Version: 1.0</p>
                  <p className="text-sm text-muted-foreground mt-2">© 2025 Momentum Build Ltd. All rights reserved.</p>
                </div>
              </div>
            </section>

            {/* Privacy Policy Section */}
            <section id="privacy-policy" className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h2>

              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Gym Buddy</p>
                  <p className="text-sm text-muted-foreground">Effective Date: October 17th, 2025</p>
                  <p className="text-sm text-muted-foreground">Last Updated: October 17th, 2025</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">INTRODUCTION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Momentum Build Ltd ("Company," "we," "us," or "our") operates the Gym Buddy mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our App and related services (collectively, the "Service").
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Your privacy is important to us. We are committed to protecting your personal information and being transparent about our data practices.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-foreground/90 leading-relaxed">
                      By using the App, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the App.
                    </p>
                  </div>
                </div>

                {/* Section 1: Information We Collect */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">1. INFORMATION WE COLLECT</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.1 Information You Provide Directly</h4>
                    <p className="text-foreground/90 leading-relaxed">We collect information you provide when using the App:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Account information (Apple ID, email, profile details)</li>
                      <li>Workout and fitness data (routines, exercise logs, goals)</li>
                      <li>AI conversation data (messages to Buddy, responses, preferences)</li>
                      <li>User settings and preferences</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.2 Apple Health (HealthKit) Data</h4>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed">
                        With your explicit permission, we may access health and fitness data from Apple Health including workout data, activity metrics, biometric data, and body measurements. You control what data we can access through your iOS device settings.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.3 Information We Do NOT Collect</h4>
                    <ul className="list-none space-y-1 ml-4 text-foreground/90">
                      <li>❌ Precise geolocation data</li>
                      <li>❌ Contact lists</li>
                      <li>❌ Financial information</li>
                      <li>❌ Sensitive personal information</li>
                      <li>❌ Government-issued identifiers</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: How We Use Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">2. HOW WE USE YOUR INFORMATION</h3>
                  <p className="text-foreground/90 leading-relaxed">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                    <li>Provide and maintain the Service</li>
                    <li>Personalize your experience and workout recommendations</li>
                    <li>Improve the Service and develop new features</li>
                    <li>Ensure safety and security</li>
                    <li>Communicate important service updates</li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mt-4">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      Note: We do NOT use your information for advertising or marketing purposes.
                    </p>
                  </div>
                </div>

                {/* Section 3: How We Share Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">3. HOW WE SHARE YOUR INFORMATION</h3>
                  <p className="text-foreground/90 leading-relaxed font-semibold">
                    We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.1 We Do NOT Share With:</h4>
                    <ul className="list-none space-y-1 ml-4 text-foreground/90">
                      <li>❌ Advertising companies</li>
                      <li>❌ Data brokers</li>
                      <li>❌ Social media platforms</li>
                      <li>❌ Insurance companies</li>
                      <li>❌ Marketing or analytics companies</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.2 Limited Sharing Circumstances</h4>
                    <p className="text-foreground/90 leading-relaxed">We may share information only:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>With your explicit consent</li>
                      <li>With Apple (for iCloud storage and subscriptions)</li>
                      <li>To comply with legal requirements</li>
                      <li>As aggregated, anonymized data that cannot identify you</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Apple Health Special Protections */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">4. APPLE HEALTH DATA - SPECIAL PROTECTIONS</h3>

                  <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Health Data Will NEVER Be:</h4>
                    <ul className="list-none space-y-2 ml-4 text-foreground/90">
                      <li>❌ Sold to any third party</li>
                      <li>❌ Used for advertising or marketing</li>
                      <li>❌ Shared without your explicit consent</li>
                      <li>❌ Used to train models for other users</li>
                    </ul>
                  </div>

                  <p className="text-foreground/90 leading-relaxed mt-4">
                    You control what health data we can access through iOS Settings and can revoke access at any time. When you delete your account, all health data is immediately deleted.
                  </p>
                </div>

                {/* Section 5: Data Storage and Security */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">5. DATA STORAGE AND SECURITY</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">5.1 Where We Store Your Data</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      All user data is stored in iCloud on servers located in the United States only. We do not transfer data to servers in other countries.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">5.2 How We Protect Your Data</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Encryption in transit (TLS/SSL) and at rest</li>
                      <li>Strict access controls and monitoring</li>
                      <li>Secure authentication via Sign in with Apple</li>
                      <li>Regular security assessments</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg mt-4">
                    <p className="text-foreground/90 leading-relaxed">
                      While we implement strong security measures, no method of electronic storage is 100% secure. You are responsible for maintaining the security of your Apple ID and device.
                    </p>
                  </div>
                </div>

                {/* Section 6: Data Retention */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">6. DATA RETENTION</h3>
                  <p className="text-foreground/90 leading-relaxed">We retain data as follows:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                    <li>Workout logs: Retained indefinitely while your account is active</li>
                    <li>AI conversation history: Automatically deleted after 90 days</li>
                    <li>Deleted accounts: All data permanently deleted immediately</li>
                  </ul>
                </div>

                {/* Section 7: Your Privacy Rights */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">7. YOUR PRIVACY RIGHTS AND CHOICES</h3>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                    <p className="text-foreground/90 leading-relaxed font-semibold mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Access all personal data we've collected</li>
                      <li>Export your information in machine-readable format</li>
                      <li>Correct or update your information</li>
                      <li>Delete your information or entire account</li>
                      <li>Revoke Apple Health permissions</li>
                      <li>Disconnect third-party AI services</li>
                    </ul>
                  </div>

                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Access these features in Settings → Account or contact support@momentumbuild.co
                  </p>

                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mt-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Do Not Sell My Personal Information</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      We do not sell personal information. This is a blanket policy for all users. No opt-out needed because we never sell data.
                    </p>
                  </div>
                </div>

                {/* Section 8: Children's Privacy */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">8. CHILDREN'S PRIVACY</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The App is intended for users aged 13 and older. Users under 18 should have parental consent. We do not knowingly collect information from children under 13.
                  </p>
                </div>

                {/* Section 9: California Privacy Rights */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">9. CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA)</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    California residents have additional rights including the right to know, delete, correct, and opt-out. We do not sell or share personal information, so there is nothing to opt out of.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    To exercise your rights, email support@momentumbuild.co with subject "California Privacy Rights Request"
                  </p>
                </div>

                {/* Section 10: International Users */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">10. INTERNATIONAL USERS AND DATA TRANSFERS</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Gym Buddy is operated from the United States. Data is transferred to, stored, and processed in the United States. European users have additional GDPR rights including access, rectification, erasure, and data portability.
                  </p>
                </div>

                {/* Section 11: Third-Party Services */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">11. THIRD-PARTY LINKS AND SERVICES</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The App integrates with Apple Health, iCloud, Apple Intelligence, and optionally OpenAI/Anthropic. These services have their own privacy policies. We are not responsible for third-party privacy practices.
                  </p>
                </div>

                {/* Section 12: Changes to Policy */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">12. CHANGES TO THIS PRIVACY POLICY</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We may update this Privacy Policy at any time. Material changes will be communicated 30 days in advance through in-app notifications. Continued use after changes take effect constitutes acceptance.
                  </p>
                </div>

                {/* Section 13: Contact */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">13. CONTACT US</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    For privacy questions, concerns, or requests:
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Momentum Build Ltd<br />
                    Email: support@momentumbuild.co<br />
                    Website: www.momentumbuild.co<br />
                    Location: Denver, Colorado, United States
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    We aim to respond to privacy inquiries within 7 business days.
                  </p>
                </div>

                {/* Section 14: Acceptance */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">14. ACCEPTANCE OF THIS POLICY</h3>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold mb-4">
                      BY USING GYM BUDDY, YOU ACKNOWLEDGE THAT:
                    </p>
                    <ul className="list-none space-y-2 ml-4 text-foreground/90">
                      <li>✓ You have read and understand this Privacy Policy</li>
                      <li>✓ You consent to the collection, use, and disclosure as described</li>
                      <li>✓ You understand your rights regarding your personal data</li>
                      <li>✓ You can withdraw consent or delete your account at any time</li>
                    </ul>
                    <p className="text-foreground/90 leading-relaxed font-semibold mt-4">
                      IF YOU DO NOT AGREE, PLEASE DO NOT USE THE APP.
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">SUMMARY OF KEY POINTS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">What we collect:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                        <li>Account info (Apple ID)</li>
                        <li>Workout logs</li>
                        <li>Health data (with permission)</li>
                        <li>AI conversation history</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">What we DON'T do:</p>
                      <ul className="list-none space-y-1 text-sm text-foreground/90">
                        <li>❌ Sell your data</li>
                        <li>❌ Use for advertising</li>
                        <li>❌ Share without consent</li>
                        <li>❌ Transfer outside U.S.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-foreground/90 mt-4">
                    <span className="font-semibold">Questions?</span> Email: support@momentumbuild.co
                  </p>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">Version: 1.0</p>
                  <p className="text-sm text-muted-foreground mt-2">© 2025 Momentum Build Ltd. All rights reserved.</p>
                </div>
              </div>
            </section>

            {/* Medical Disclaimer Section */}
            <section id="medical-disclaimer" className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Medical Disclaimer & Health Disclosures</h2>

              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Gym Buddy</p>
                  <p className="text-sm text-muted-foreground">Effective Date: October 17th, 2025</p>
                  <p className="text-sm text-muted-foreground">Last Updated: October 17th, 2025</p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-lg mb-2 text-foreground">IMPORTANT HEALTH AND SAFETY INFORMATION</p>
                  <p className="text-foreground/90 leading-relaxed font-semibold">
                    PLEASE READ THIS MEDICAL DISCLAIMER CAREFULLY BEFORE USING GYM BUDDY
                  </p>
                </div>

                {/* Section 1: Not Medical Advice */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">1. NOT MEDICAL ADVICE</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.1 General Disclaimer</h4>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed font-semibold">
                        GYM BUDDY IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE OR MEDICAL CONDITION.
                      </p>
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      The Gym Buddy application, including all features, content, workout recommendations, and AI-powered assistance (collectively, the "App"), is provided solely for informational, educational, and fitness tracking purposes. The App is designed to help you organize and track your workouts, but it is NOT a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.2 No Professional Medical Services</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The App does not provide medical services or professional healthcare advice. Momentum Build Ltd does not employ physicians, nurses, physical therapists, certified personal trainers, or other licensed healthcare or fitness professionals. None of the information, recommendations, or suggestions provided through the App should be considered professional medical or fitness advice.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.3 Consult Your Physician</h4>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed font-semibold mb-3">
                        YOU SHOULD ALWAYS CONSULT WITH A QUALIFIED PHYSICIAN OR HEALTHCARE PROVIDER BEFORE:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                        <li>Beginning any new exercise program</li>
                        <li>Making any changes to your existing exercise routine</li>
                        <li>Using this App if you have any pre-existing medical conditions</li>
                        <li>Using this App if you are pregnant or nursing</li>
                        <li>Using this App if you are taking any medications</li>
                        <li>Using this App if you have any concerns about your ability to safely exercise</li>
                      </ul>
                    </div>
                    <p className="text-foreground/90 leading-relaxed font-semibold mt-3">
                      DO NOT DISREGARD, AVOID, OR DELAY OBTAINING MEDICAL ADVICE FROM A QUALIFIED HEALTHCARE PROVIDER BECAUSE OF INFORMATION YOU HAVE RECEIVED FROM THIS APP.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">1.4 Emergency Situations</h4>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed font-semibold">
                        IF YOU EXPERIENCE A MEDICAL EMERGENCY, CALL 911 (OR YOUR LOCAL EMERGENCY NUMBER) IMMEDIATELY. DO NOT RELY ON THIS APP FOR EMERGENCY ASSISTANCE.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Exercise Risks */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">2. EXERCISE RISKS AND ASSUMPTION OF RISK</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.1 Inherent Risks of Physical Exercise</h4>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed font-semibold mb-3">
                        PHYSICAL EXERCISE INVOLVES INHERENT RISKS. Participation in any exercise program, including those tracked or suggested through this App, carries the risk of physical injury, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                        <li>Muscle strains, sprains, and tears</li>
                        <li>Joint injuries</li>
                        <li>Bone fractures</li>
                        <li>Cardiovascular events (heart attack, stroke)</li>
                        <li>Heat exhaustion or heat stroke</li>
                        <li>Dehydration</li>
                        <li>Dizziness, fainting, or loss of consciousness</li>
                        <li>Permanent disability</li>
                        <li>Death</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.2 You Assume All Risks</h4>
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      BY USING THIS APP, YOU ACKNOWLEDGE AND VOLUNTARILY ASSUME ALL RISKS ASSOCIATED WITH PHYSICAL EXERCISE AND PHYSICAL ACTIVITY.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">You understand that you are solely responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Determining whether you are physically capable of performing any exercise</li>
                      <li>Ensuring you use proper form and technique</li>
                      <li>Exercising in a safe environment with appropriate equipment</li>
                      <li>Listening to your body and stopping if you experience any concerning symptoms</li>
                      <li>Seeking medical attention if you are injured</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.3 Pre-Exercise Health Screening</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Before using this App or engaging in any exercise program, you should evaluate your health status. You should NOT begin an exercise program if you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Have been advised by a physician not to exercise</li>
                      <li>Experience chest pain during physical activity</li>
                      <li>Have developed chest pain in the past month when not doing physical activity</li>
                      <li>Lose your balance due to dizziness or lose consciousness</li>
                      <li>Have a bone or joint problem that could be worsened by physical activity</li>
                      <li>Are currently taking medication for blood pressure or a heart condition</li>
                      <li>Have any other medical condition that might be affected by exercise</li>
                      <li>Are recovering from an injury or surgery</li>
                      <li>Have any concerns about your ability to safely exercise</li>
                    </ul>
                    <p className="text-foreground/90 leading-relaxed font-semibold mt-3">
                      If any of these conditions apply to you, consult your physician before using this App.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">2.4 Stop Exercising Immediately If You Experience:</h4>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                        <li>Chest pain or tightness</li>
                        <li>Severe shortness of breath</li>
                        <li>Dizziness or lightheadedness</li>
                        <li>Nausea or vomiting</li>
                        <li>Unusual or severe fatigue</li>
                        <li>Irregular heartbeat or palpitations</li>
                        <li>Pain in your jaw, neck, arm, or shoulder</li>
                        <li>Severe joint or muscle pain</li>
                        <li>Any other unusual or concerning symptoms</li>
                      </ul>
                      <p className="text-foreground/90 leading-relaxed font-semibold mt-3">
                        If you experience any of these symptoms, stop exercising immediately and seek medical attention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: AI Buddy Disclaimer */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">3. AI-POWERED BUDDY FEATURE DISCLAIMER</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.1 Informational Purpose Only</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The "Buddy" AI assistant feature uses artificial intelligence to provide workout suggestions, exercise recommendations, and conversational support. All recommendations and information provided by Buddy are for informational and educational purposes only and should NOT be considered professional fitness advice or personalized training guidance.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.2 Not a Personal Trainer</h4>
                    <p className="text-foreground/90 leading-relaxed">Buddy is NOT:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>A certified personal trainer</li>
                      <li>A physical therapist</li>
                      <li>A medical professional</li>
                      <li>A substitute for professional fitness coaching</li>
                      <li>Capable of assessing your individual physical capabilities or limitations</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.3 Generalized Recommendations</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      All workout recommendations provided by Buddy are automated and generalized. Buddy cannot:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Assess your specific medical history or conditions</li>
                      <li>Evaluate your current fitness level or physical limitations</li>
                      <li>Observe your form or technique</li>
                      <li>Provide real-time corrections to prevent injury</li>
                      <li>Understand the full context of your health situation</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.4 Your Responsibility</h4>
                    <p className="text-foreground/90 leading-relaxed">YOU are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Evaluating whether Buddy's recommendations are appropriate for your fitness level and health status</li>
                      <li>Modifying or disregarding recommendations that don't feel right for your body</li>
                      <li>Using proper form and technique when performing exercises</li>
                      <li>Seeking professional guidance if you are unsure about any exercise</li>
                      <li>Consulting with a qualified personal trainer or healthcare provider for personalized advice</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">3.5 Third-Party AI Services</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      If you choose to connect third-party AI services (such as OpenAI or Anthropic) to enhance Buddy's functionality:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Those services are not affiliated with Momentum Build Ltd</li>
                      <li>The AI models are not trained specifically for fitness or medical advice</li>
                      <li>Recommendations may be inaccurate, inappropriate, or potentially harmful</li>
                      <li>You use third-party AI services entirely at your own risk</li>
                      <li>We are not responsible for any recommendations made by third-party AI systems</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: No Guarantees */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">4. NO GUARANTEES OR RESULTS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.1 Individual Results Vary</h4>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                      <p className="text-foreground/90 leading-relaxed font-semibold">
                        WE MAKE NO GUARANTEES, REPRESENTATIONS, OR WARRANTIES REGARDING:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90 mt-2">
                        <li>Weight loss or body composition changes</li>
                        <li>Muscle gain or strength improvements</li>
                        <li>Cardiovascular fitness improvements</li>
                        <li>Achievement of any specific fitness goals</li>
                        <li>Safety or effectiveness of any workout program</li>
                        <li>Accuracy of any calculations, recommendations, or data displayed in the App</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.2 No Promises of Outcomes</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Individual results from using the App and following workout programs vary greatly based on numerous factors including genetics, age, current fitness level, nutrition, sleep, stress, medical conditions, and consistency of effort. What works for one person may not work for another.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">4.3 Third-Party Data Accuracy</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The App integrates data from Apple Health and potentially other fitness tracking devices. We do not guarantee the accuracy of data collected by third-party devices or services. Calorie counts, heart rate measurements, and other biometric data may be estimates and should not be relied upon for medical decisions.
                    </p>
                  </div>
                </div>

                {/* Section 5: Limitations */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">5. LIMITATIONS AND DISCLAIMERS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">5.1 App Cannot Replace Professional Guidance</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      While the App can help you track workouts and stay organized, it cannot replace the value of working with qualified professionals, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>Physicians for medical clearance and health monitoring</li>
                      <li>Certified personal trainers for form correction and program design</li>
                      <li>Physical therapists for injury rehabilitation</li>
                      <li>Registered dietitians for nutrition guidance</li>
                      <li>Mental health professionals for psychological support</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">5.2 Exercise Database Limitations</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The exercise database included in the App contains general descriptions and instructions for various exercises. These descriptions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>May not include all safety precautions or contraindications</li>
                      <li>Cannot account for individual variations in body mechanics</li>
                      <li>Are not a substitute for professional instruction</li>
                      <li>May not be appropriate for all fitness levels</li>
                      <li>Should be supplemented with additional research or professional guidance</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">5.3 Technology Limitations</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      The App is a software application and is subject to technical limitations. Do not rely solely on the App for tracking critical health or fitness information.
                    </p>
                  </div>
                </div>

                {/* Section 6: Special Populations */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">6. SPECIAL POPULATIONS</h3>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">6.1 Pregnant or Nursing Women</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      If you are pregnant or nursing, consult your physician before using this App or beginning any exercise program. Exercise during pregnancy requires special considerations and modifications that the App cannot provide.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">6.2 Individuals with Medical Conditions</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      If you have ANY medical condition, you MUST consult with your physician before using this App or engaging in any exercise program.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">6.3 Older Adults</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      If you are over 65 years of age or have been sedentary for an extended period, consult your physician before beginning any exercise program. Older adults may require modified exercises and different intensity levels than those suggested by the App.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">6.4 Youth and Adolescents</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      While individuals ages 13-17 may use the App with parental consent, parents and guardians should supervise exercise programs for youth. Growing bodies have different needs and limitations than adults. Consider consulting a pediatrician or youth fitness specialist.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">6.5 Individuals with Injuries</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      If you are recovering from an injury or surgery, do NOT use this App without explicit clearance from your physician or physical therapist. Rehabilitation requires specialized programming that the App cannot provide.
                    </p>
                  </div>
                </div>

                {/* Section 7: User Representations */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">7. USER REPRESENTATIONS AND WARRANTIES</h3>
                  <p className="text-foreground/90 leading-relaxed">By using the Gym Buddy App, you represent and warrant that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                    <li>You have read and understand this Medical Disclaimer</li>
                    <li>You are in good physical condition and have no medical reasons preventing you from exercising</li>
                    <li>You have consulted with a physician if you have any medical conditions or concerns</li>
                    <li>You have obtained your physician's approval to use this App and engage in exercise if required</li>
                    <li>You will not hold Momentum Build Ltd liable for any injuries or health issues that may arise from using the App</li>
                    <li>You understand that exercise involves inherent risks and you voluntarily assume those risks</li>
                    <li>You will exercise good judgment and listen to your body</li>
                    <li>You will seek professional medical attention if you experience any injuries or concerning symptoms</li>
                    <li>You will not rely on the App as a substitute for professional medical or fitness advice</li>
                  </ul>
                </div>

                {/* Section 8: Liability Disclaimer */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">8. LIABILITY DISCLAIMER</h3>
                  <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-l-4 border-red-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOMENTUM BUILD LTD, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INJURIES, DAMAGES, LOSSES, OR HEALTH ISSUES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90 mt-3">
                      <li>Injuries sustained during exercise</li>
                      <li>Aggravation of pre-existing conditions</li>
                      <li>Cardiovascular events</li>
                      <li>Musculoskeletal injuries</li>
                      <li>Any other physical or mental health issues</li>
                    </ul>
                    <p className="text-foreground/90 leading-relaxed font-semibold mt-4">
                      YOU USE THIS APP ENTIRELY AT YOUR OWN RISK.
                    </p>
                  </div>
                </div>

                {/* Section 9: Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">9. CONTACT INFORMATION</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    If you have questions about this Medical Disclaimer or need assistance, contact us at:
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Momentum Build Ltd<br />
                    Email: support@momentumbuild.co<br />
                    Website: www.momentumbuild.co
                  </p>
                  <p className="text-foreground/90 leading-relaxed font-semibold">
                    For medical questions or emergencies, contact your healthcare provider or call 911.
                  </p>
                </div>

                {/* Section 10: Acknowledgment */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">10. ACKNOWLEDGMENT</h3>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <p className="text-foreground/90 leading-relaxed font-semibold mb-4">
                      BY CLICKING "I AGREE" OR BY USING THE GYM BUDDY APP, YOU ACKNOWLEDGE THAT:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/90">
                      <li>You have read and understand this Medical Disclaimer in its entirety</li>
                      <li>You understand the risks associated with physical exercise</li>
                      <li>You voluntarily assume all risks of using the App</li>
                      <li>You will consult a physician before beginning any exercise program if required</li>
                      <li>You will not rely on the App for medical advice</li>
                      <li>You release Momentum Build Ltd from all liability related to your use of the App</li>
                    </ul>
                    <p className="text-foreground/90 leading-relaxed font-semibold mt-4">
                      IF YOU DO NOT AGREE WITH THIS MEDICAL DISCLAIMER, DO NOT USE THE APP.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">Version: 1.0</p>
                  <p className="text-sm text-muted-foreground mt-2">© 2025 Momentum Build Ltd. All rights reserved.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
