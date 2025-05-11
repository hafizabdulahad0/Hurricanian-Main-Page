import { useState } from 'react';
import { Globe, Diamond, Briefcase, FileSpreadsheet, UtensilsCrossed, Store, Tv, Dog, Building, Smartphone, MessageCircle, Car, Package, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Updated service data with theme colors and actual URLs
  const availableServices = [{
    icon: <Globe className="w-10 h-10" />,
    title: "HURRICANIAN DOMAINS",
    description: "BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)",
    url: "https://domains.hurricanian.com",
    bgColor: "bg-cyan-600",
    // Cool blue-green
    hoverColor: "hover:bg-cyan-700",
    borderColor: "border-cyan-700"
  }, {
    icon: <Diamond className="w-10 h-10" />,
    title: "HURRICANIAN GEMS",
    description: "BUY/SELL GEMSTONES",
    url: "https://gems.hurricanian.com",
    bgColor: "bg-orange-500",
    // Light warm orange
    hoverColor: "hover:bg-orange-600",
    borderColor: "border-orange-600"
  }, {
    icon: <Briefcase className="w-10 h-10" />,
    title: "HURRICANIAN TRAVELS",
    description: "GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)",
    url: "https://travels.hurricanian.com",
    bgColor: "bg-indigo-400",
    // Light Cool - Periwinkle
    hoverColor: "hover:bg-indigo-500",
    borderColor: "border-indigo-500"
  }, {
    icon: <FileSpreadsheet className="w-10 h-10" />,
    title: "HURRICANIAN ADS",
    description: "UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE",
    url: "https://ads.hurricanian.com",
    bgColor: "bg-yellow-500",
    // Light warm yellow
    hoverColor: "hover:bg-yellow-600",
    borderColor: "border-yellow-600"
  }, {
    icon: <UtensilsCrossed className="w-10 h-10" />,
    title: "HURRICANIAN FOODS",
    description: "BUY/SELL FOOD PRODUCTS",
    url: "https://foods.hurricanian.com",
    bgColor: "bg-lime-500",
    // Light warm green
    hoverColor: "hover:bg-lime-600",
    borderColor: "border-lime-600"
  }, {
    icon: <Store className="w-10 h-10" />,
    title: "HURRICANIAN STORE",
    description: "ONLINE E-COMMERCE STORE",
    url: "https://store.hurricanian.com",
    bgColor: "bg-purple-400",
    // Light Cool - Plum
    hoverColor: "hover:bg-purple-500",
    borderColor: "border-purple-500"
  }, {
    icon: <Tv className="w-10 h-10" />,
    title: "HURRICANIAN NEWS",
    description: "DAILY NEWS ONLINE",
    url: "https://news.hurricanian.com",
    bgColor: "bg-teal-500",
    // Light Cool-turquoise
    hoverColor: "hover:bg-teal-600",
    borderColor: "border-teal-600"
  }, {
    icon: <Dog className="w-10 h-10" />,
    title: "HURRICANIAN LIVESTOCKS",
    description: "BUY/SELL ANIMALS",
    url: "https://livestock.hurricanian.com",
    bgColor: "bg-amber-700",
    // Light warm brown
    hoverColor: "hover:bg-amber-800",
    borderColor: "border-amber-800"
  }, {
    icon: <Building className="w-10 h-10" />,
    title: "HURRICANIAN ENTERPRISES",
    description: "BUY/SELL PROPERTY",
    url: "https://enterprises.hurricanian.com",
    bgColor: "bg-rose-500",
    // Light Cool - Red
    hoverColor: "hover:bg-rose-600",
    borderColor: "border-rose-600"
  }];

  // Additional services
  const additionalServices = [{
    icon: <Building className="w-10 h-10" />,
    title: "HURRICANIAN ASSOCIATES",
    description: "PROFESSIONAL SERVICES",
    url: "https://associates.hurricanian.com",
    bgColor: "bg-gray-800",
    // Cool - black
    hoverColor: "hover:bg-gray-900",
    borderColor: "border-gray-900"
  }, {
    icon: <Tv className="w-10 h-10" />,
    title: "HURRICANIAN TV",
    description: "ENTERTAINMENT",
    url: "https://tv.hurricanian.com",
    bgColor: "bg-fuchsia-500",
    // Magenta
    hoverColor: "hover:bg-fuchsia-600",
    borderColor: "border-fuchsia-600"
  }, {
    icon: <Globe className="w-10 h-10" />,
    title: "HURRICANIAN TECHNOLOGIES",
    description: "TECH SERVICES",
    url: "https://technologies.hurricanian.com",
    bgColor: "bg-blue-600",
    // Cool - blue
    hoverColor: "hover:bg-blue-700",
    borderColor: "border-blue-700"
  }, {
    icon: <Briefcase className="w-10 h-10" />,
    title: "HURRICANIAN TRADERS",
    description: "TRADING SERVICES",
    url: "https://traders.hurricanian.com",
    bgColor: "bg-lime-400",
    // Light warm - chartreuse
    hoverColor: "hover:bg-lime-500",
    borderColor: "border-lime-500"
  }, {
    icon: <FileSpreadsheet className="w-10 h-10" />,
    title: "HURRICANIAN PRODUCTION",
    description: "MEDIA PRODUCTION",
    url: "https://production.hurricanian.com",
    bgColor: "bg-orange-600",
    // Warm - orange
    hoverColor: "hover:bg-orange-700",
    borderColor: "border-orange-700"
  }, {
    icon: <Diamond className="w-10 h-10" />,
    title: "PINK SALT",
    description: "PREMIUM SALT PRODUCTS",
    url: "https://salt.hurricanian.com",
    bgColor: "bg-pink-500",
    // Pink
    hoverColor: "hover:bg-pink-600",
    borderColor: "border-pink-600"
  }];

  // Coming soon services with theme colors
  const comingSoonServices = [{
    icon: <Smartphone className="w-10 h-10" />,
    title: "SOCIAL MEDIA APP",
    description: "COMING SOON!",
    bgColor: "bg-pink-500/60",
    borderColor: "border-pink-600"
  }, {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "MESSENGER",
    description: "COMING SOON!",
    bgColor: "bg-violet-500/60",
    borderColor: "border-violet-600"
  }, {
    icon: <Car className="w-10 h-10" />,
    title: "DRIVER APP",
    description: "COMING SOON!",
    bgColor: "bg-cyan-500/60",
    borderColor: "border-cyan-600"
  }, {
    icon: <Package className="w-10 h-10" />,
    title: "DELIVERY APP",
    description: "COMING SOON!",
    bgColor: "bg-amber-500/60",
    borderColor: "border-amber-600"
  }, {
    icon: <CreditCard className="w-10 h-10" />,
    title: "MOBILE BANKING APP",
    description: "COMING SOON!",
    bgColor: "bg-teal-500/60",
    borderColor: "border-teal-600"
  }];
  const allServices = [...availableServices, ...additionalServices];
  const displayedServices = showAllServices ? allServices : availableServices.slice(0, 5);
  const displayedComingSoon = showAllServices ? comingSoonServices : comingSoonServices.slice(0, 3);
  const handleServiceClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  return <section id="services" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {displayedServices.map((service, index) => <div key={index} className={`service-card cursor-pointer transition-all duration-300 hover:scale-105 ${service.bgColor} ${service.hoverColor} border-2 ${service.borderColor} shadow-lg hover:shadow-xl active:scale-95 active:shadow-inner`} onClick={() => handleServiceClick(service.url)}>
              <div className="service-icon text-white">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/90">{service.description}</p>
            </div>)}
        </div>
        
        <div className="text-center mb-16">
          <Button onClick={() => setShowAllServices(!showAllServices)} className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-110 transform active:scale-95">
            {showAllServices ? "See Less Services" : "See More Services"}
          </Button>
        </div>
        
        <h2 className="section-title text-gray-800 dark:text-white">Coming Soon</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedComingSoon.map((service, index) => <div key={index} className={`coming-soon-card border-2 ${service.borderColor} ${service.bgColor}`}>
              <div className="service-icon text-white/90">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/80">{service.description}</p>
            </div>)}
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => setShowAllServices(!showAllServices)} className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-110 transform active:scale-95">
            {showAllServices ? "See Less Projects" : "See More Projects"}
          </Button>
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default Services;
