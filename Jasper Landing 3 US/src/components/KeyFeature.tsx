
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface KeyFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  price?: string;
  image?: string;
}

const KeyFeature = ({ icon, title, description, price, image }: KeyFeatureProps) => {
  return (
    <Card className="overflow-hidden border-none rounded-xl hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      <div className="p-6 text-center">
        <div className="text-primary mb-4 flex justify-center">
          <div className="p-3 bg-primary/10 rounded-full">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {price && <p className="text-primary font-semibold mb-3">{price}</p>}
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default KeyFeature;
