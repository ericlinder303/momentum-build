import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Momentum Build!",
        description: `We'll notify ${email} when we launch. Thanks for joining our fitness revolution!`,
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="updates" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the First to <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Build Momentum
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get early access to Momentum Build and join our community of athletes, 
            fitness enthusiasts, and momentum builders!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 font-semibold"
            >
              {isLoading ? "Joining..." : "Get Early Access"}
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            We'll never spam you. Unsubscribe anytime. Build momentum responsibly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;