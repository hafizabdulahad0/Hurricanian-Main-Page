
import React, { useState, useEffect } from 'react';
import { Star, Upload, User, Share } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useReviews } from '@/hooks/useReviews';

interface ReviewFormData {
  name: string;
  rating: number;
  text: string;
  avatar?: string;
}

const ReviewForm = () => {
  const { addReview } = useReviews();
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    rating: 0,
    text: '',
    avatar: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll to this section if #review-form is in URL
  useEffect(() => {
    if (window.location.hash === '#review-form') {
      const el = document.getElementById('review-form');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.text.trim() || formData.rating === 0) {
      toast({
        title: "Please fill all required fields",
        description: "Name, rating, and review text are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const reviewToSubmit = {
        ...formData,
        avatar: formData.avatar || `https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=100&h=100`
      };

      await addReview(reviewToSubmit);
      setFormData({ name: '', rating: 0, text: '', avatar: '' });
    } catch (error) {
      // Error handling is done in the hook
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, avatar: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShare = async () => {
    const reviewSectionUrl = `${window.location.origin}${window.location.pathname}#review-form`;

    try {
      if (navigator.share && navigator.canShare) {
        await navigator.share({
          title: 'Submit a Review - Hurricanian',
          text: 'Share your experience with Hurricanian services!',
          url: reviewSectionUrl,
        });
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing our review form.",
        });
      } else {
        await navigator.clipboard.writeText(reviewSectionUrl);
        toast({
          title: "Link copied!",
          description: "Review form link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Share this link",
        description: reviewSectionUrl,
      });
    }
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => {
      const starValue = index + 1;
      return (
        <Star
          key={index}
          className={`w-8 h-8 cursor-pointer transition-colors ${
            starValue <= (hoveredRating || formData.rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, rating: starValue }))}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
        />
      );
    });
  };

  return (
    <div
      id="review-form"
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md relative"
      style={{
        border: "2px solid #3ea99f"
      }}
    >
      {/* Share Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleShare}
        className="absolute top-4 right-4 w-8 h-8"
        title="Share review form"
      >
        <Share className="w-4 h-4" />
      </Button>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Submit Your Review
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your name"
            className="w-full"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-1">
            {renderStars()}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Avatar (Optional)
          </label>
          <div className="flex items-center space-x-4">
            {formData.avatar ? (
              <img
                src={formData.avatar}
                alt="Avatar preview"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
            )}
            <label className="cursor-pointer">
              <div className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <Upload className="w-4 h-4" />
                <span className="text-sm">Upload Avatar</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isSubmitting}
              />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Review <span className="text-red-500">*</span>
          </label>
          <Textarea
            value={formData.text}
            onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
            placeholder="Write your review here..."
            rows={4}
            className="w-full"
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-white hover:opacity-90"
          style={{ backgroundColor: "#3ea99f" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
