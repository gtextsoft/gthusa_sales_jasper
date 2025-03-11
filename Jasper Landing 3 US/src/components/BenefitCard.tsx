
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white rounded-xl">
      <div className="text-primary mb-6 flex justify-center">
        <div className="p-4 bg-primary/10 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Card>
  );
};

export default BenefitCard;
