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
              Momentum Build combines cutting-edge AI with proven fitness science to create 
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
              <div className="bg-gray-900 rounded-[3rem] p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-800 rounded-[2.5rem] p-6 w-72 h-[500px] flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-white text-lg font-semibold">Welcome, Alex</h3>
                    <p className="text-gray-400 text-sm">Ready to build momentum?</p>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="bg-gray-700 rounded-2xl p-4 space-y-3">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl text-sm">
                        Hey! I see you crushed yesterday's workout. How about we focus on building momentum with a dynamic upper body session today?
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl text-sm">
                        I've customized a workout based on your energy levels and equipment. Want to see it?
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <p className="text-white font-semibold mb-2">Today's Goal</p>
                      <p className="text-gray-300 text-sm">Upper Body Power • 45 min</p>
                      <p className="text-blue-400 text-sm mt-2">Momentum Score: 92% ⚡</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;