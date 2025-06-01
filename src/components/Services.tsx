
import React, { useState } from 'react';
import { Globe, Diamond, Briefcase, FileSpreadsheet, UtensilsCrossed, Store, Tv, Dog, Building, Smartphone, MessageCircle, Car, Package, CreditCard, Server, Gem, Plane, Megaphone, Apple, ShoppingBag, Newspaper, PawPrint, Home, Users, Monitor, Code, TrendingUp, Factory, Sparkles, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Updated service data with unique icons for each service
  const availableServices = [{
    icon: <Server className="w-10 h-10" />,
    title: "HURRICANIAN DOMAINS",
    description: "BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)",
    url: "https://domains.hurricanian.com",
    bgColor: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    borderColor: "border-cyan-700"
  }, {
    icon: <Gem className="w-10 h-10" />,
    title: "HURRICANIAN GEMS",
    description: "BUY/SELL GEMSTONES",
    url: "https://gems.hurricanian.com",
    bgColor: "bg-orange-500/80",
    hoverColor: "hover:bg-orange-600/80",
    borderColor: "border-orange-600/80"
  }, {
    icon: <Plane className="w-10 h-10" />,
    title: "HURRICANIAN TRAVELS",
    description: "GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)",
    url: "https://travels.hurricanian.com",
    bgColor: "bg-indigo-400/80",
    hoverColor: "hover:bg-indigo-500/80",
    borderColor: "border-indigo-500/80"
  }, {
    icon: <Megaphone className="w-10 h-10" />,
    title: "HURRICANIAN ADS",
    description: "UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE",
    url: "https://ads.hurricanian.com",
    bgColor: "bg-yellow-500/80",
    hoverColor: "hover:bg-yellow-600/80",
    borderColor: "border-yellow-600/80"
  }, {
    icon: <Apple className="w-10 h-10" />,
    title: "HURRICANIAN FOODS",
    description: "BUY/SELL FOOD PRODUCTS",
    url: "https://foods.hurricanian.com",
    bgColor: "bg-lime-500/80",
    hoverColor: "hover:bg-lime-600/80",
    borderColor: "border-lime-600/80"
  }, {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "HURRICANIAN STORE",
    description: "ONLINE E-COMMERCE STORE",
    url: "https://store.hurricanian.com",
    bgColor: "bg-purple-400/80",
    hoverColor: "hover:bg-purple-500/80",
    borderColor: "border-purple-500/80"
  }, {
    icon: <Newspaper className="w-10 h-10" />,
    title: "HURRICANIAN NEWS",
    description: "DAILY NEWS ONLINE",
    url: "https://news.hurricanian.com",
    bgColor: "bg-teal-500/80",
    hoverColor: "hover:bg-teal-600/80",
    borderColor: "border-teal-600/80"
  }, {
    icon: <PawPrint className="w-10 h-10" />,
    title: "HURRICANIAN LIVESTOCKS",
    description: "BUY/SELL ANIMALS",
    url: "https://livestock.hurricanian.com",
    bgColor: "bg-amber-700/80",
    hoverColor: "hover:bg-amber-800/80",
    borderColor: "border-amber-800/80"
  }, {
    icon: <Home className="w-10 h-10" />,
    title: "HURRICANIAN ENTERPRISES",
    description: "BUY/SELL PROPERTY",
    url: "https://enterprises.hurricanian.com",
    bgColor: "bg-rose-500/80",
    hoverColor: "hover:bg-rose-600/80",
    borderColor: "border-rose-600/80"
  }];

  // Additional services with unique icons
  const additionalServices = [{
    icon: <Users className="w-10 h-10" />,
    title: "HURRICANIAN ASSOCIATES",
    description: "PROFESSIONAL SERVICES",
    url: "https://associates.hurricanian.com",
    bgColor: "bg-gray-800/80",
    hoverColor: "hover:bg-gray-900/80",
    borderColor: "border-gray-900/80"
  }, {
    icon: <Monitor className="w-10 h-10" />,
    title: "HURRICANIAN TV",
    description: "ENTERTAINMENT",
    url: "https://tv.hurricanian.com",
    bgColor: "bg-fuchsia-500/80",
    hoverColor: "hover:bg-fuchsia-600/80",
    borderColor: "border-fuchsia-600/80"
  }, {
    icon: <Code className="w-10 h-10" />,
    title: "HURRICANIAN TECHNOLOGIES",
    description: "TECH SERVICES",
    url: "https://technologies.hurricanian.com",
    bgColor: "bg-blue-600/80",
    hoverColor: "hover:bg-blue-700/80",
    borderColor: "border-blue-700/80"
  }, {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "HURRICANIAN TRADERS",
    description: "TRADING SERVICES",
    url: "https://traders.hurricanian.com",
    bgColor: "bg-lime-400/80",
    hoverColor: "hover:bg-lime-500/80",
    borderColor: "border-lime-500/80"
  }, {
    icon: <Camera className="w-10 h-10" />,
    title: "HURRICANIAN PRODUCTION",
    description: "MEDIA PRODUCTION",
    url: "https://production.hurricanian.com",
    bgColor: "bg-orange-600/80",
    hoverColor: "hover:bg-orange-700/80",
    borderColor: "border-orange-700/80"
  }, {
    icon: <Sparkles className="w-10 h-10" />,
    title: "PINK SALT",
    description: "PREMIUM SALT PRODUCTS",
    url: "https://salt.hurricanian.com",
    bgColor: "bg-pink-500/80",
    hoverColor: "hover:bg-pink-600/80",
    borderColor: "border-pink-600/80"
  }];

  // Coming soon services with new unique colors
  const comingSoonServices = [{
    icon: <Smartphone className="w-10 h-10" />,
    title: "SOCIAL MEDIA APP",
    description: "COMING SOON!",
    bgColor: "bg-emerald-400/70", // New color
    borderColor: "border-emerald-500"
  }, {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "MESSENGER",
    description: "COMING SOON!",
    bgColor: "bg-indigo-300/70", // New color
    borderColor: "border-indigo-400"
  }, {
    icon: <Car className="w-10 h-10" />,
    title: "DRIVER APP",
    description: "COMING SOON!",
    bgColor: "bg-sky-400/70", // New color
    borderColor: "border-sky-500"
  }, {
    icon: <Package className="w-10 h-10" />,
    title: "DELIVERY APP",
    description: "COMING SOON!",
    bgColor: "bg-rose-300/70", // New color
    borderColor: "border-rose-400"
  }, {
    icon: <CreditCard className="w-10 h-10" />,
    title: "MOBILE BANKING APP",
    description: "COMING SOON!",
    bgColor: "bg-purple-300/70", // New color
    borderColor: "border-purple-400"
  }];

  // Show all services - no more toggling
  const allServices = [...availableServices, ...additionalServices];

  const handleServiceClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return <section id="services" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {allServices.map((service, index) => <div key={index} className={`service-card cursor-pointer transition-all duration-300 hover:scale-105 ${service.bgColor} ${service.hoverColor} border-2 ${service.borderColor} shadow-lg hover:shadow-xl active:scale-95 active:shadow-inner`} onClick={() => handleServiceClick(service.url)}>
              <div className="service-icon text-white">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/90">{service.description}</p>
            </div>)}
        </div>
        
        <h2 className="section-title text-gray-800 dark:text-white">Coming Soon</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {comingSoonServices.map((service, index) => <div key={index} className={`coming-soon-card border-2 ${service.borderColor} ${service.bgColor}`}>
              <div className="service-icon text-white/90">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/80">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Services;
