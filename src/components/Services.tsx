
import React, { useState } from 'react';
import { Globe, Diamond, Briefcase, FileSpreadsheet, UtensilsCrossed, Store, Tv, Dog, Building, Smartphone, MessageCircle, Car, Package, CreditCard, Server, Gem, Plane, Megaphone, Apple, ShoppingBag, Newspaper, PawPrint, Home, Users, Monitor, Code, TrendingUp, Factory, Sparkles, Camera, Trash2, Edit, Plus, Shield, Images } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ServiceImageSlider from './ServiceImageSlider';
import ServiceEditDialog from './ServiceEditDialog';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [showImageSlider, setShowImageSlider] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showAddServiceDialog, setShowAddServiceDialog] = useState(false);
  const [addingToComingSoon, setAddingToComingSoon] = useState(false);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    url: '',
    bgColor: 'bg-blue-500/80',
    hoverColor: 'hover:bg-blue-600/80',
    borderColor: 'border-blue-600/80'
  });
  const { toast } = useToast();

  const ADMIN_PASSWORD = "AliSherazi";

  // Updated service data with unique icons for each service
  const [availableServices, setAvailableServices] = useState([{
    id: 'domains',
    icon: <Server className="w-10 h-10" />,
    title: "HURRICANIAN DOMAINS",
    description: "BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)",
    url: "https://domains.hurricanian.com",
    bgColor: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    borderColor: "border-cyan-700"
  }, {
    id: 'gems',
    icon: <Gem className="w-10 h-10" />,
    title: "HURRICANIAN GEMS",
    description: "BUY/SELL GEMSTONES",
    url: "https://gems.hurricanian.com",
    bgColor: "bg-orange-500/80",
    hoverColor: "hover:bg-orange-600/80",
    borderColor: "border-orange-600/80"
  }, {
    id: 'travels',
    icon: <Plane className="w-10 h-10" />,
    title: "HURRICANIAN TRAVELS",
    description: "GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)",
    url: "https://travels.hurricanian.com",
    bgColor: "bg-indigo-400/80",
    hoverColor: "hover:bg-indigo-500/80",
    borderColor: "border-indigo-500/80"
  }, {
    id: 'ads',
    icon: <Megaphone className="w-10 h-10" />,
    title: "HURRICANIAN ADS",
    description: "UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE",
    url: "https://ads.hurricanian.com",
    bgColor: "bg-yellow-500/80",
    hoverColor: "hover:bg-yellow-600/80",
    borderColor: "border-yellow-600/80"
  }, {
    id: 'foods',
    icon: <Apple className="w-10 h-10" />,
    title: "HURRICANIAN FOODS",
    description: "BUY/SELL FOOD PRODUCTS",
    url: "https://foods.hurricanian.com",
    bgColor: "bg-lime-500/80",
    hoverColor: "hover:bg-lime-600/80",
    borderColor: "border-lime-600/80"
  }, {
    id: 'store',
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "HURRICANIAN STORE",
    description: "ONLINE E-COMMERCE STORE",
    url: "https://store.hurricanian.com",
    bgColor: "bg-purple-400/80",
    hoverColor: "hover:bg-purple-500/80",
    borderColor: "border-purple-500/80"
  }, {
    id: 'news',
    icon: <Newspaper className="w-10 h-10" />,
    title: "HURRICANIAN NEWS",
    description: "DAILY NEWS ONLINE",
    url: "https://news.hurricanian.com",
    bgColor: "bg-teal-500/80",
    hoverColor: "hover:bg-teal-600/80",
    borderColor: "border-teal-600/80"
  }, {
    id: 'livestock',
    icon: <PawPrint className="w-10 h-10" />,
    title: "HURRICANIAN LIVESTOCKS",
    description: "BUY/SELL ANIMALS",
    url: "https://livestock.hurricanian.com",
    bgColor: "bg-amber-700/80",
    hoverColor: "hover:bg-amber-800/80",
    borderColor: "border-amber-800/80"
  }, {
    id: 'enterprises',
    icon: <Home className="w-10 h-10" />,
    title: "HURRICANIAN ENTERPRISES",
    description: "BUY/SELL PROPERTY",
    url: "https://enterprises.hurricanian.com",
    bgColor: "bg-rose-500/80",
    hoverColor: "hover:bg-rose-600/80",
    borderColor: "border-rose-600/80"
  }]);

  // Additional services with unique icons
  const [additionalServices, setAdditionalServices] = useState([{
    id: 'associates',
    icon: <Users className="w-10 h-10" />,
    title: "HURRICANIAN ASSOCIATES",
    description: "PROFESSIONAL SERVICES",
    url: "https://associates.hurricanian.com",
    bgColor: "bg-gray-800/80",
    hoverColor: "hover:bg-gray-900/80",
    borderColor: "border-gray-900/80"
  }, {
    id: 'tv',
    icon: <Monitor className="w-10 h-10" />,
    title: "HURRICANIAN TV",
    description: "ENTERTAINMENT",
    url: "https://tv.hurricanian.com",
    bgColor: "bg-fuchsia-500/80",
    hoverColor: "hover:bg-fuchsia-600/80",
    borderColor: "border-fuchsia-600/80"
  }, {
    id: 'technologies',
    icon: <Code className="w-10 h-10" />,
    title: "HURRICANIAN TECHNOLOGIES",
    description: "TECH SERVICES",
    url: "https://technologies.hurricanian.com",
    bgColor: "bg-blue-600/80",
    hoverColor: "hover:bg-blue-700/80",
    borderColor: "border-blue-700/80"
  }, {
    id: 'traders',
    icon: <TrendingUp className="w-10 h-10" />,
    title: "HURRICANIAN TRADERS",
    description: "TRADING SERVICES",
    url: "https://traders.hurricanian.com",
    bgColor: "bg-lime-400/80",
    hoverColor: "hover:bg-lime-500/80",
    borderColor: "border-lime-500/80"
  }, {
    id: 'production',
    icon: <Camera className="w-10 h-10" />,
    title: "HURRICANIAN PRODUCTION",
    description: "MEDIA PRODUCTION",
    url: "https://production.hurricanian.com",
    bgColor: "bg-orange-600/80",
    hoverColor: "hover:bg-orange-700/80",
    borderColor: "border-orange-700/80"
  }, {
    id: 'salt',
    icon: <Sparkles className="w-10 h-10" />,
    title: "PINK SALT",
    description: "PREMIUM SALT PRODUCTS",
    url: "https://salt.hurricanian.com",
    bgColor: "bg-pink-500/80",
    hoverColor: "hover:bg-pink-600/80",
    borderColor: "border-pink-600/80"
  }]);

  // Coming soon services with new unique colors
  const [comingSoonServices, setComingSoonServices] = useState([{
    id: 'social',
    icon: <Smartphone className="w-10 h-10" />,
    title: "SOCIAL MEDIA APP",
    description: "COMING SOON!",
    bgColor: "bg-emerald-400/70",
    borderColor: "border-emerald-500"
  }, {
    id: 'messenger',
    icon: <MessageCircle className="w-10 h-10" />,
    title: "MESSENGER",
    description: "COMING SOON!",
    bgColor: "bg-indigo-300/70",
    borderColor: "border-indigo-400"
  }, {
    id: 'driver',
    icon: <Car className="w-10 h-10" />,
    title: "DRIVER APP",
    description: "COMING SOON!",
    bgColor: "bg-sky-400/70",
    borderColor: "border-sky-500"
  }, {
    id: 'delivery',
    icon: <Package className="w-10 h-10" />,
    title: "DELIVERY APP",
    description: "COMING SOON!",
    bgColor: "bg-rose-300/70",
    borderColor: "border-rose-400"
  }, {
    id: 'banking',
    icon: <CreditCard className="w-10 h-10" />,
    title: "MOBILE BANKING APP",
    description: "COMING SOON!",
    bgColor: "bg-purple-300/70",
    borderColor: "border-purple-400"
  }]);

  const allServices = [...availableServices, ...additionalServices];

  const handleAdminToggle = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
    } else {
      setShowPasswordDialog(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminMode(true);
      setShowPasswordDialog(false);
      setPassword('');
      toast({
        title: "Admin mode activated",
        description: "You can now manage services and images.",
      });
    } else {
      toast({
        title: "Incorrect password",
        description: "Please enter the correct admin password.",
        variant: "destructive",
      });
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
    setPassword('');
  };

  const handleDeleteService = (serviceId: string, isComingSoon = false) => {
    if (isComingSoon) {
      setComingSoonServices(comingSoonServices.filter(service => service.id !== serviceId));
    } else {
      // Check if it's in availableServices or additionalServices
      const isInAvailable = availableServices.some(service => service.id === serviceId);
      if (isInAvailable) {
        setAvailableServices(availableServices.filter(service => service.id !== serviceId));
      } else {
        setAdditionalServices(additionalServices.filter(service => service.id !== serviceId));
      }
    }
    
    toast({
      title: "Service deleted",
      description: `Service has been removed.`,
    });
  };

  const handleEditService = (service: any) => {
    setEditingService(service);
    setShowEditDialog(true);
  };

  const handleAddService = () => {
    if (!newService.title || !newService.description) {
      toast({
        title: "Missing information",
        description: "Please provide both title and description.",
        variant: "destructive",
      });
      return;
    }

    const serviceToAdd = {
      id: Date.now().toString(),
      icon: <Store className="w-10 h-10" />,
      title: newService.title,
      description: newService.description,
      url: newService.url || undefined,
      bgColor: newService.bgColor,
      hoverColor: newService.hoverColor,
      borderColor: newService.borderColor
    };

    if (addingToComingSoon) {
      setComingSoonServices([...comingSoonServices, serviceToAdd]);
    } else {
      setAvailableServices([...availableServices, serviceToAdd]);
    }

    setNewService({
      title: '',
      description: '',
      url: '',
      bgColor: 'bg-blue-500/80',
      hoverColor: 'hover:bg-blue-600/80',
      borderColor: 'border-blue-600/80'
    });
    setShowAddServiceDialog(false);
    
    toast({
      title: "Service added",
      description: `New service has been added to ${addingToComingSoon ? 'Coming Soon' : 'Available Services'}.`,
    });
  };

  const handleServiceClick = url => {
    if (url && !isAdminMode) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1"></div>
          <h2 className="section-title text-gray-800 dark:text-white text-center">OUR SERVICES</h2>
          
          <div className="flex-1 flex justify-end gap-2">
            {isAdminMode && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setAddingToComingSoon(false);
                    setShowAddServiceDialog(true);
                  }}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Service
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowImageSlider(true)}
                  className="flex items-center gap-2"
                >
                  <Images className="w-4 h-4" />
                  Images
                </Button>
              </>
            )}
            
            <Button
              variant={isAdminMode ? "destructive" : "outline"}
              size="sm"
              onClick={handleAdminToggle}
            >
              <Shield className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Password Dialog */}
        <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Admin Access Required</DialogTitle>
              <DialogDescription>
                Please enter the admin password to access admin mode.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handlePasswordCancel}>
                Cancel
              </Button>
              <Button onClick={handlePasswordSubmit}>
                Enter Admin Mode
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Add Service Dialog */}
        <Dialog open={showAddServiceDialog} onOpenChange={setShowAddServiceDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Add a new service to {addingToComingSoon ? 'Coming Soon' : 'Available Services'}.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="serviceTitle">Service Title</Label>
                <Input
                  id="serviceTitle"
                  placeholder="Enter service title"
                  value={newService.title}
                  onChange={(e) => setNewService({...newService, title: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="serviceDescription">Description</Label>
                <Input
                  id="serviceDescription"
                  placeholder="Enter service description"
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                />
              </div>
              {!addingToComingSoon && (
                <div>
                  <Label htmlFor="serviceUrl">URL (Optional)</Label>
                  <Input
                    id="serviceUrl"
                    placeholder="Enter service URL"
                    value={newService.url}
                    onChange={(e) => setNewService({...newService, url: e.target.value})}
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddServiceDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddService}>
                Add Service
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {allServices.map((service, index) => (
            <div key={service.id} className={`service-card cursor-pointer transition-all duration-300 hover:scale-105 ${service.bgColor} ${service.hoverColor} border-2 ${service.borderColor} shadow-lg hover:shadow-xl active:scale-95 active:shadow-inner relative`}>
              
              {/* Admin Controls */}
              {isAdminMode && (
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-6 h-6"
                    onClick={() => handleEditService(service)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="w-6 h-6"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Service</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{service.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteService(service.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}

              <div onClick={() => handleServiceClick(service.url)}>
                <div className="service-icon text-white flex justify-center">
                  {service.icon}
                </div>
                <h3 className="service-title text-white font-bold">{service.title}</h3>
                <p className="service-description text-white/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1"></div>
          <h2 className="section-title text-gray-800 dark:text-white text-center">Coming Soon</h2>
          <div className="flex-1 flex justify-end">
            {isAdminMode && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setAddingToComingSoon(true);
                  setShowAddServiceDialog(true);
                }}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Coming Soon
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {comingSoonServices.map((service, index) => (
            <div key={service.id} className={`coming-soon-card border-2 ${service.borderColor} ${service.bgColor} relative`}>
              
              {/* Admin Controls for Coming Soon */}
              {isAdminMode && (
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-6 h-6"
                    onClick={() => handleEditService(service)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="w-6 h-6"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Service</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{service.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteService(service.id, true)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}

              <div className="service-icon text-white/90 flex justify-center">
                {service.icon}
              </div>
              <h3 className="service-title text-white font-bold">{service.title}</h3>
              <p className="service-description text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Image Slider Management */}
        {showImageSlider && (
          <ServiceImageSlider 
            open={showImageSlider} 
            onClose={() => setShowImageSlider(false)} 
          />
        )}

        {/* Service Edit Dialog */}
        {showEditDialog && editingService && (
          <ServiceEditDialog
            open={showEditDialog}
            onClose={() => setShowEditDialog(false)}
            service={editingService}
            onSave={(updatedService) => {
              // In a real app, this would update the backend
              toast({
                title: "Service updated",
                description: `${updatedService.title} has been updated.`,
              });
              setShowEditDialog(false);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
