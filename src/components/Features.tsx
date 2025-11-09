import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Workout Companion",
      description: "Chat naturally with your AI trainer. Get personalized recommendations and modify workouts on the fly through simple conversation.",
      isFuture: false
    },
    {
      icon: "📊",
      title: "Smart Progress Tracking",
      description: "Automatically track sets, reps, weights, and duration. Build a comprehensive fitness history that learns from your performance.",
      isFuture: false
    },
    {
      icon: "🎯",
      title: "Personalized Programming",
      description: "Get workout suggestions based on your history and your specific fitness goals.",
      isFuture: false
    },
    {
      icon: "🏋️",
      title: "Complete Exercise Library",
      description: "Access exercises for all equipment types - barbells, dumbbells, kettlebells, bodyweight, TRX, and cardio workouts.",
      isFuture: false
    },
    {
      icon: "✨",
      title: "Dynamic Adaptation",
      description: "Your workouts adapt in real-time based on how you're feeling, your performance, and your recovery status.",
      isFuture: true
    },
    {
      icon: "⚡",
      title: "Momentum Analytics",
      description: "Visualize your progress with advanced analytics that show your momentum building over time across all fitness metrics.",
      isFuture: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Why Choose Gym Buddy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combine the power of AI with your dedication to create unstoppable momentum in your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-orange-200 bg-card/80 backdrop-blur-sm hover:transform hover:scale-105 relative overflow-hidden"
            >
              {feature.isFuture && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-1 text-sm font-semibold transform rotate-0 translate-x-0 translate-y-0 z-10 rounded-bl-lg shadow-lg">
                  Future
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;