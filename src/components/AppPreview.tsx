import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import screenshot1 from "@/assets/screenshots/1.png";
import screenshot2 from "@/assets/screenshots/2.png";
import screenshot3 from "@/assets/screenshots/3.png";
import screenshot4 from "@/assets/screenshots/4.png";
import screenshot5 from "@/assets/screenshots/5.png";
import screenshot6 from "@/assets/screenshots/6.png";
import screenshot7 from "@/assets/screenshots/7.png";
import screenshot8 from "@/assets/screenshots/8.png";
import screenshot9 from "@/assets/screenshots/9.png";
import screenshot10 from "@/assets/screenshots/10.png";

const screenshots = [
  { src: screenshot1, alt: "Gym Spark App - Screen 1" },
  { src: screenshot2, alt: "Gym Spark App - Screen 2" },
  { src: screenshot3, alt: "Gym Spark App - Screen 3" },
  { src: screenshot4, alt: "Gym Spark App - Screen 4" },
  { src: screenshot5, alt: "Gym Spark App - Screen 5" },
  { src: screenshot6, alt: "Gym Spark App - Screen 6" },
  { src: screenshot7, alt: "Gym Spark App - Screen 7" },
  { src: screenshot8, alt: "Gym Spark App - Screen 8" },
  { src: screenshot9, alt: "Gym Spark App - Screen 9" },
  { src: screenshot10, alt: "Gym Spark App - Screen 10" },
];

const AppPreview = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="preview" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Personal Trainer in Your Pocket
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Gym Spark combines AI and your fitness insights to create
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

          <div className="flex flex-col items-center">
            <Carousel
              setApi={setApi}
              className="w-full max-w-sm"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-80 max-w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-gray-800"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 lg:-left-12 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
              <CarouselNext className="right-0 lg:-right-12 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
            </Carousel>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
