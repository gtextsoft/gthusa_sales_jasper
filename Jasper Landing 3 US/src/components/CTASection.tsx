
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContact: () => void;
}

const CTASection = ({ onContact }: CTASectionProps) => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          🌟 Don't Miss Out on Brookshire's Next Big Investment Opportunity!
        </h2>
        <div className="max-w-xl mx-auto">
          <Button 
            variant="secondary"
            size="lg"
            className="w-full md:w-auto mb-4 md:mb-0 md:mr-4"
            onClick={() => window.location.href = "https://wa.link/6yfj33"}
          >
            Reserve Your Unit Today
          </Button>
          <p className="text-xl mt-4">Call us: +1 (443) 790-3925</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
