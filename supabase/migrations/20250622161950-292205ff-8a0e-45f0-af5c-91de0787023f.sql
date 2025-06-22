
-- Create a table for reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for services
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT,
  icon_name TEXT,
  bg_color TEXT NOT NULL,
  hover_color TEXT,
  border_color TEXT,
  category TEXT NOT NULL DEFAULT 'available', -- 'available', 'additional', 'coming_soon'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) for reviews
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to view reviews (public data)
CREATE POLICY "Anyone can view reviews" ON public.reviews FOR SELECT USING (true);

-- Create policy that allows anyone to insert reviews (public submission)
CREATE POLICY "Anyone can create reviews" ON public.reviews FOR INSERT WITH CHECK (true);

-- Add Row Level Security (RLS) for services  
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to view services (public data)
CREATE POLICY "Anyone can view services" ON public.services FOR SELECT USING (true);

-- Create policy that allows anyone to insert/update services (for admin functionality)
CREATE POLICY "Anyone can manage services" ON public.services FOR ALL USING (true);

-- Insert default services data
INSERT INTO public.services (service_id, title, description, url, icon_name, bg_color, hover_color, border_color, category) VALUES
('domains', 'HURRICANIAN DOMAINS', 'BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)', 'https://domains.hurricanian.com', 'Server', 'bg-cyan-600', 'hover:bg-cyan-700', 'border-cyan-700', 'available'),
('gems', 'HURRICANIAN GEMS', 'BUY/SELL GEMSTONES', 'https://gems.hurricanian.com', 'Gem', 'bg-orange-500/80', 'hover:bg-orange-600/80', 'border-orange-600/80', 'available'),
('travels', 'HURRICANIAN TRAVELS', 'GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)', 'https://travels.hurricanian.com', 'Plane', 'bg-indigo-400/80', 'hover:bg-indigo-500/80', 'border-indigo-500/80', 'available'),
('ads', 'HURRICANIAN ADS', 'UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE', 'https://ads.hurricanian.com', 'Megaphone', 'bg-yellow-500/80', 'hover:bg-yellow-600/80', 'border-yellow-600/80', 'available'),
('foods', 'HURRICANIAN FOODS', 'BUY/SELL FOOD PRODUCTS', 'https://foods.hurricanian.com', 'Apple', 'bg-lime-500/80', 'hover:bg-lime-600/80', 'border-lime-600/80', 'available'),
('store', 'HURRICANIAN STORE', 'ONLINE E-COMMERCE STORE', 'https://store.hurricanian.com', 'ShoppingBag', 'bg-purple-400/80', 'hover:bg-purple-500/80', 'border-purple-500/80', 'available'),
('news', 'HURRICANIAN NEWS', 'DAILY NEWS ONLINE', 'https://news.hurricanian.com', 'Newspaper', 'bg-teal-500/80', 'hover:bg-teal-600/80', 'border-teal-600/80', 'available'),
('livestock', 'HURRICANIAN LIVESTOCKS', 'BUY/SELL ANIMALS', 'https://livestock.hurricanian.com', 'PawPrint', 'bg-amber-700/80', 'hover:bg-amber-800/80', 'border-amber-800/80', 'available'),
('enterprises', 'HURRICANIAN ENTERPRISES', 'BUY/SELL PROPERTY', 'https://enterprises.hurricanian.com', 'Home', 'bg-rose-500/80', 'hover:bg-rose-600/80', 'border-rose-600/80', 'available'),
('associates', 'HURRICANIAN ASSOCIATES', 'PROFESSIONAL SERVICES', 'https://associates.hurricanian.com', 'Users', 'bg-gray-800/80', 'hover:bg-gray-900/80', 'border-gray-900/80', 'additional'),
('tv', 'HURRICANIAN TV', 'ENTERTAINMENT', 'https://tv.hurricanian.com', 'Monitor', 'bg-fuchsia-500/80', 'hover:bg-fuchsia-600/80', 'border-fuchsia-600/80', 'additional'),
('technologies', 'HURRICANIAN TECHNOLOGIES', 'TECH SERVICES', 'https://technologies.hurricanian.com', 'Code', 'bg-blue-600/80', 'hover:bg-blue-700/80', 'border-blue-700/80', 'additional'),
('traders', 'HURRICANIAN TRADERS', 'TRADING SERVICES', 'https://traders.hurricanian.com', 'TrendingUp', 'bg-lime-400/80', 'hover:bg-lime-500/80', 'border-lime-500/80', 'additional'),
('production', 'HURRICANIAN PRODUCTION', 'MEDIA PRODUCTION', 'https://production.hurricanian.com', 'Camera', 'bg-orange-600/80', 'hover:bg-orange-700/80', 'border-orange-700/80', 'additional'),
('salt', 'PINK SALT', 'PREMIUM SALT PRODUCTS', 'https://salt.hurricanian.com', 'Sparkles', 'bg-pink-500/80', 'hover:bg-pink-600/80', 'border-pink-600/80', 'additional'),
('social', 'SOCIAL MEDIA APP', 'COMING SOON!', NULL, 'Smartphone', 'bg-emerald-400/70', NULL, 'border-emerald-500', 'coming_soon'),
('messenger', 'MESSENGER', 'COMING SOON!', NULL, 'MessageCircle', 'bg-indigo-300/70', NULL, 'border-indigo-400', 'coming_soon'),
('driver', 'DRIVER APP', 'COMING SOON!', NULL, 'Car', 'bg-sky-400/70', NULL, 'border-sky-500', 'coming_soon'),
('delivery', 'DELIVERY APP', 'COMING SOON!', NULL, 'Package', 'bg-rose-300/70', NULL, 'border-rose-400', 'coming_soon'),
('banking', 'MOBILE BANKING APP', 'COMING SOON!', NULL, 'CreditCard', 'bg-purple-300/70', NULL, 'border-purple-400', 'coming_soon');
