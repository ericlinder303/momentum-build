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
              <h2 className="text-3xl font-bold mb-4 text-foreground">Terms and Conditions</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground/90">
                  By using Momentum Build's services and applications, you agree to the following terms and conditions:
                </p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    By accessing and using our applications, you accept and agree to be bound by these Terms and Conditions.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">2. Use of Services</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Our services are intended to support your fitness journey. You are responsible for consulting with healthcare professionals before beginning any fitness program.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">3. User Responsibilities</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    You agree to provide accurate information, maintain the security of your account, and use our services in compliance with applicable laws and regulations.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">4. Privacy</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    We are committed to protecting your privacy. Your data will be handled in accordance with our Privacy Policy and applicable data protection laws.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Momentum Build provides fitness technology tools and is not liable for any injuries, health complications, or other damages that may result from your use of our services.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">6. Modifications</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
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
