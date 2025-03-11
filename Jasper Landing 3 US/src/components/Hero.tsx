
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: 'url("/BROOKSHIRE Image 2.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Secure Your Future in Real Estate: Jasper Brookshire Awaits You
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Invest in a thriving estate in Brookshire, Texas—your gateway to wealth, stability, and sustainable returns.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = "#contact"}
        >
          Reserve Your Unit Today
        </Button>
      </div>
    </div>
  );
};

export default Hero;
