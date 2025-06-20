
import { Button } from "@/components/ui/button";

const Hero = () => {
  return <div className="bg-gradient-to-r from-gray-100 to-[#d6f5f2] dark:from-gray-900 dark:to-[#194a45] py-4 px-4">
      <div className="container mx-auto text-center">
        {/* Top Banner - Full size on mobile */}
        <div className="mb-4 p-4 sm:p-6 bg-[#3EA99F] dark:bg-[#3EA99F] text-white rounded-lg shadow-lg w-full">
          <h3 className="text-lg sm:text-xl font-bold">Special Offer!</h3>
          <p className="text-xs sm:text-sm">Get 20% off on all domain registrations this month. Limited time offer!</p>
        </div>
      </div>
    </div>;
};

export default Hero;
