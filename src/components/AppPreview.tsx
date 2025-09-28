import gymBuddyApp from "@/assets/gym-buddy-app.png";

const AppPreview = () => {
  return (
    <section id="preview" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Personal Trainer in Your Pocket
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Gym Buddy combines cutting-edge AI with proven fitness science to create 
              a truly personalized workout experience that evolves with you.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Whether you're starting your fitness journey or pushing new limits, 
              our AI adapts to your needs and helps you build unstoppable momentum 
              toward your goals.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Say goodbye to static workout plans and hello to dynamic, 
              intelligent fitness coaching that grows with your progress.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300 hover:rotate-1">
                <img 
                  src={gymBuddyApp}
                  alt="Momentum Build App Interface"
                  className="w-80 max-w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-gray-800"
                />
              </div>
              {/* Floating elements for enhanced visual appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;