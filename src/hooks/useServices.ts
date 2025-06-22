
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Service {
  id: string;
  service_id: string;
  title: string;
  description: string;
  url?: string;
  icon_name: string;
  bg_color: string;
  hover_color?: string;
  border_color: string;
  category: 'available' | 'additional' | 'coming_soon';
  created_at: string;
  updated_at: string;
}

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      // Type cast the database response to ensure category is properly typed
      const typedServices: Service[] = (data || []).map(service => ({
        ...service,
        category: service.category as 'available' | 'additional' | 'coming_soon'
      }));

      setServices(typedServices);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error loading services",
        description: "Failed to load services from database.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addService = async (serviceData: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert([{ ...serviceData, updated_at: new Date().toISOString() }])
        .select()
        .single();

      if (error) throw error;

      // Type cast the response
      const typedService: Service = {
        ...data,
        category: data.category as 'available' | 'additional' | 'coming_soon'
      };

      setServices(prev => [...prev, typedService]);
      
      toast({
        title: "Service added",
        description: `New service has been added successfully.`,
      });

      return typedService;
    } catch (error) {
      console.error('Error adding service:', error);
      toast({
        title: "Error adding service",
        description: "Failed to add the service. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateService = async (id: string, updates: Partial<Service>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // Type cast the response
      const typedService: Service = {
        ...data,
        category: data.category as 'available' | 'additional' | 'coming_soon'
      };

      setServices(prev => prev.map(service => 
        service.id === id ? typedService : service
      ));
      
      toast({
        title: "Service updated",
        description: "Service has been updated successfully.",
      });

      return typedService;
    } catch (error) {
      console.error('Error updating service:', error);
      toast({
        title: "Error updating service",
        description: "Failed to update the service. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteService = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setServices(prev => prev.filter(service => service.id !== id));
      
      toast({
        title: "Service deleted",
        description: "Service has been removed successfully.",
      });
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: "Error deleting service",
        description: "Failed to delete the service. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const getServicesByCategory = (category: 'available' | 'additional' | 'coming_soon') => {
    return services.filter(service => service.category === category);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    addService,
    updateService,
    deleteService,
    getServicesByCategory,
    refetch: fetchServices
  };
};
