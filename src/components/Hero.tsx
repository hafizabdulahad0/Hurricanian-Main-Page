import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="bg-gradient-to-r from-gray-100 to-green-50 dark:from-gray-900 dark:to-green-900 py-8 px-4">
      <div className="container mx-auto text-center">
        {/* Top Banner */}
        <div className="mb-8 p-6 bg-green-700 text-white rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold">Special Offer!</h3>
          <p className="text-sm">Get 20% off on all domain registrations this month. Limited time offer!</p>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-8 p-6 bg-green-700 text-white rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold">Join Our Newsletter</h3>
          <p className="text-sm">Stay updated with our latest services and offers.</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l text-black focus:outline-none" />
            <Button className="rounded-r border-2 border-green-800 shadow-lg rounded-xl bg-emerald-950 hover:bg-emerald-800 text-zinc-50">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;