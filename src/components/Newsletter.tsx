
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-r from-gray-100 to-[#d6f5f2] dark:from-gray-900 dark:to-[#194a45]">
      <div className="container mx-auto text-center">
        <div className="p-4 sm:p-6 bg-[#3EA99F] dark:bg-[#3EA99F] text-white rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold">Join Our Newsletter</h3>
          <p className="text-xs sm:text-sm mb-4">Stay updated with our latest services and offers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded text-black focus:outline-none flex-1 max-w-xs" 
            />
            <Button className="rounded border-2 border-[#35908a] dark:border-[#35908a] shadow-lg bg-[#2d7a76] hover:bg-[#35908a] dark:bg-[#2d7a76] dark:hover:bg-[#35908a] text-zinc-50">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
