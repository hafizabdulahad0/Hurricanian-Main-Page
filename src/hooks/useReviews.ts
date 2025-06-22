
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
  created_at: string;
}

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast({
        title: "Error loading reviews",
        description: "Failed to load reviews from database.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addReview = async (reviewData: Omit<Review, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([reviewData])
        .select()
        .single();

      if (error) throw error;

      setReviews(prev => [data, ...prev]);
      
      toast({
        title: "Review submitted successfully!",
        description: "Thank you for your feedback.",
      });

      return data;
    } catch (error) {
      console.error('Error adding review:', error);
      toast({
        title: "Error submitting review",
        description: "Failed to submit your review. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteReview = async (reviewId: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);

      if (error) throw error;

      setReviews(prev => prev.filter(review => review.id !== reviewId));
      
      toast({
        title: "Review deleted",
        description: "The review has been successfully removed.",
      });
    } catch (error) {
      console.error('Error deleting review:', error);
      toast({
        title: "Error deleting review",
        description: "Failed to delete the review. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    loading,
    addReview,
    deleteReview,
    refetch: fetchReviews
  };
};
