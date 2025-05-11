
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="bg-gradient-to-r from-gray-100 to-emerald-50 dark:from-gray-900 dark:to-emerald-900 py-8 px-4">
      <div className="container mx-auto text-center">
        {/* Top Banner */}
        <div className="mb-8 p-6 bg-emerald-600 dark:bg-emerald-700 text-white rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold">Special Offer!</h3>
          <p className="text-sm">Get 20% off on all domain registrations this month. Limited time offer!</p>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-8 p-6 bg-emerald-600 dark:bg-emerald-700 text-white rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold">Join Our Newsletter</h3>
          <p className="text-sm">Stay updated with our latest services and offers.</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l text-black focus:outline-none" />
            <Button className="rounded-r border-2 border-emerald-700 dark:border-emerald-600 shadow-lg rounded-xl bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-900 dark:hover:bg-emerald-800 text-zinc-50">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
