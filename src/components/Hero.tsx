import { Button } from "@/components/ui/button";
import momentumLogo from "@/assets/momentum-logo.png";

const Hero = () => {
  const scrollToUpdates = () => {
    const section = document.getElementById("updates");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up [animation-delay:0.2s] opacity-0">
            Build Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Momentum
            </span> using Gym Spark
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up [animation-delay:0.4s] opacity-0 max-w-3xl mx-auto leading-relaxed">
            The AI-powered fitness platform that adapts to your needs, tracks your progress, 
            and builds unstoppable momentum in your fitness journey.
          </p>
          
          <Button 
            onClick={scrollToUpdates}
            size="lg"
            className="animate-fade-in-up [animation-delay:0.6s] opacity-0 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
          >
            Start Building Momentum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;