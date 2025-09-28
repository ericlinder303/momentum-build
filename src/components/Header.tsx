import { useState, useEffect } from "react";
import momentumLogo from "@/assets/momentum-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg border-b border-border shadow-lg" 
          : "glass"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={momentumLogo} 
              alt="Momentum Build Logo" 
              className="w-10 h-10 animate-float"
            />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Momentum Build
            </span>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {[
              { label: "Features", id: "features" },
              { label: "Preview", id: "preview" },
              { label: "Updates", id: "updates" }
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`transition-opacity duration-300 hover:opacity-80 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;