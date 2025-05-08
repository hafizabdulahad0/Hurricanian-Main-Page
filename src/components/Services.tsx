
import { useState } from 'react';
import { Globe, Diamond, Briefcase, FileSpreadsheet, UtensilsCrossed, Store, Tv, Dog, Building, Smartphone, MessageCircle, Car, Package, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Updated service data with theme colors
  const availableServices = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "HURRICANIAN DOMAINS",
      description: "BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)",
      url: "https://example.com/domains",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      borderColor: "border-blue-700"
    },
    {
      icon: <Diamond className="w-10 h-10" />,
      title: "HURRICANIAN GEMS",
      description: "BUY/SELL GEMSTONES",
      url: "https://example.com/gems",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      borderColor: "border-purple-700"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "HURRICANIAN TRAVELS",
      description: "GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)",
      url: "https://example.com/travels",
      bgColor: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
      borderColor: "border-amber-600"
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10" />,
      title: "HURRICANIAN ADS",
      description: "UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE",
      url: "https://example.com/ads",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      borderColor: "border-red-600"
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: "HURRICANIAN FOODS",
      description: "BUY/SELL FOOD PRODUCTS",
      url: "https://example.com/foods",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      borderColor: "border-orange-600"
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "HURRICANIAN STORE",
      description: "ONLINE E-COMMERCE STORE",
      url: "https://example.com/store",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      borderColor: "border-emerald-700"
    },
    {
      icon: <Tv className="w-10 h-10" />,
      title: "HURRICANIAN NEWS",
      description: "DAILY NEWS ONLINE",
      url: "https://example.com/news",
      bgColor: "bg-sky-600",
      hoverColor: "hover:bg-sky-700",
      borderColor: "border-sky-700"
    },
    {
      icon: <Dog className="w-10 h-10" />,
      title: "HURRICANIAN LIVESTOCKS",
      description: "BUY/SELL ANIMALS",
      url: "https://example.com/livestocks",
      bgColor: "bg-lime-600",
      hoverColor: "hover:bg-lime-700",
      borderColor: "border-lime-700"
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "HURRICANIAN ENTERPRISES",
      description: "BUY/SELL PROPERTY",
      url: "https://example.com/enterprises",
      bgColor: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700",
      borderColor: "border-indigo-700"
    }
  ];

  // Coming soon services with theme colors
  const comingSoonServices = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "SOCIAL MEDIA APP",
      description: "COMING SOON!",
      bgColor: "bg-pink-500/60",
      borderColor: "border-pink-600"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "MESSENGER",
      description: "COMING SOON!",
      bgColor: "bg-violet-500/60",
      borderColor: "border-violet-600"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "DRIVER APP",
      description: "COMING SOON!",
      bgColor: "bg-cyan-500/60",
      borderColor: "border-cyan-600"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "DELIVERY APP",
      description: "COMING SOON!",
      bgColor: "bg-amber-500/60",
      borderColor: "border-amber-600"
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "MOBILE BANKING APP",
      description: "COMING SOON!",
      bgColor: "bg-teal-500/60",
      borderColor: "border-teal-600"
    }
  ];

  const displayedServices = showAllServices ? availableServices : availableServices.slice(0, 5);
  const displayedComingSoon = showAllServices ? comingSoonServices : comingSoonServices.slice(0, 5);

  const handleServiceClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index} 
              className={`service-card cursor-pointer transition-all duration-300 hover:scale-105 ${service.bgColor} ${service.hoverColor} border-2 ${service.borderColor} shadow-lg hover:shadow-xl active:scale-95 active:shadow-inner`}
              onClick={() => handleServiceClick(service.url)}
            >
              <div className="service-icon text-white">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/90">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <Button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110 transform active:scale-95"
          >
            {showAllServices ? "See Less Services" : "See More Services"}
          </Button>
        </div>
        
        <h2 className="section-title text-gray-800 dark:text-white">Coming Soon</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedComingSoon.map((service, index) => (
            <div key={index} className={`coming-soon-card border-2 ${service.borderColor} ${service.bgColor}`}>
              <div className="service-icon text-white/90">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110 transform active:scale-95"
          >
            {showAllServices ? "See Less Projects" : "See More Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
