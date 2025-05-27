
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white mb-10">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/0lE_GR4VPy4?autoplay=1&mute=1" 
              className="w-full h-full"
              title="About Hurricanian" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Hurricanian, our mission is to revolutionize digital services by providing innovative solutions that connect businesses with their customers worldwide. We are dedicated to creating platforms that enable seamless transactions, communications, and growth opportunities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Through our ecosystem of specialized services, we aim to empower entrepreneurs and established businesses alike with the tools they need to thrive in today's digital landscape. Our commitment to quality, security, and customer satisfaction drives everything we do.
            </p>
            <div className="flex justify-end">
              <Button 
                className="bg-[#3EA99F] hover:bg-[#35908a] transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a href="https://group.hurricanian.com/" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
