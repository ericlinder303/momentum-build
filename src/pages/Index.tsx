import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppPreview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
