import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            About Momentum Build
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Empowering Your Fitness Journey Through Innovation
          </p>

          <div className="space-y-12">
            <section>
              <p className="text-lg leading-relaxed text-foreground/90">
                At Momentum Build, we're passionate about helping people lead healthier lives. We believe that fitness should be accessible, easy to understand, and personalized to your individual journey—this is why we're committed to creating top-tier technology that supports you in reaching your goals.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                We exist to optimize your workouts and provide a streamlined experience that fits seamlessly into your life. Through innovative applications and thoughtful design, we help you hit your fitness goals and continuously build your health capabilities—one workout at a time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                We envision a world where everyone has the support, guidance, and resources they need to take control of their health. By putting powerful, intelligent fitness technology in your hands, we're making that vision a reality—helping you build momentum toward the healthiest version of yourself.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4 font-semibold">
                Momentum Build—Building Your Path to Better Health
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Approach</h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                As a technology-focused company, we're committed to creating frictionless experiences that remove barriers between you and your fitness aspirations. We combine cutting-edge technology with deep understanding of what makes workouts effective and sustainable. The result? Tools that work as hard as you do.
              </p>
            </section>

            <section id="terms">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
