
import { House, MapPin, DollarSign, ChartBarIncreasing, Building, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import BenefitCard from "@/components/BenefitCard";
import KeyFeature from "@/components/KeyFeature";
import CTASection from "@/components/CTASection";

const Index = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Contact request received",
      description: "We'll get back to you shortly!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Welcome to Jasper Brookshire</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're an investor or a newcomer to the U.S., owning property is one sure way to build wealth. 
              Jasper Brookshire is a modern, all-in-one development that blends living, working, and leisure spaces seamlessly. 
              It is located in Brookshire, Texas, a fast-growing city just outside Houston.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              This isn't just an investment; it's an opportunity to own a slice of America's booming real estate market. 
              With Jasper Brookshire, you're not just securing a property, but a brighter financial future for yourself and your family.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">What Makes Jasper Brookshire Perfect for You?</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our premium development offers unique advantages for investors and residents alike
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<MapPin className="h-6 w-6" />}
              title="Strategic Location"
              description="Minutes from Houston, benefiting from Texas' vibrant economy and job growth"
            />
            <Feature
              icon={<ChartBarIncreasing className="h-6 w-6" />}
              title="Financial Growth"
              description="Projected annual returns of 20-25% in the first 5 years"
            />
            <Feature
              icon={<Handshake className="h-6 w-6" />}
              title="Perfect for Immigrants"
              description="Build generational wealth with our tailored ownership process"
            />
            <Feature
              icon={<House className="h-6 w-6" />}
              title="Smart Living"
              description="Eco-friendly homes with modern energy-efficient systems"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Key Features of Jasper Brookshire</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Discover the exceptional amenities and properties that make our development stand out
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <KeyFeature
              icon={<Building className="h-6 w-6" />}
              title="Luxury Homes"
              price="Starting at $350,000"
              description="Premium living spaces designed for modern comfort"
              image="/Office complex interior 3.jpg"
            />
            <KeyFeature
              icon={<Building className="h-6 w-6" />}
              title="Mixed-Use Spaces"
              description="Ideal for businesses, creating an integrated community"
              image="/Brookshire Image 1.jpg"
            />
            <KeyFeature
              icon={<Building className="h-6 w-6" />}
              title="Premium Amenities"
              description="Coworking spaces, green parks, and recreational facilities"
              image="/BROOKSHIRE Image 3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Investment Benefits</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Why Jasper Brookshire is the perfect choice for both U.S. and immigrant investors
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<DollarSign className="h-6 w-6" />}
              title="Passive Income"
              description="High demand for rentals ensures consistent revenue"
            />
            <BenefitCard
              icon={<ChartBarIncreasing className="h-6 w-6" />}
              title="Diverse Portfolio"
              description="Diversify your assets in one of America's most dynamic states"
            />
            <BenefitCard
              icon={<Handshake className="h-6 w-6" />}
              title="Legal Guidance"
              description="We simplify the process, guiding you every step of the way"
            />
          </div>
        </div>
      </section>

      <CTASection onContact={handleContact} />
    </div>
  );
};

export default Index;
