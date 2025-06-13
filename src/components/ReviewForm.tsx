
import React, { useState } from 'react';
import { Star, Upload, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ReviewFormData {
  name: string;
  rating: number;
  text: string;
  avatar?: string;
}

const ReviewForm = ({ onReviewSubmit }: { onReviewSubmit: (review: ReviewFormData) => void }) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    rating: 0,
    text: '',
    avatar: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.text.trim() || formData.rating === 0) {
      toast({
        title: "Please fill all required fields",
        description: "Name, rating, and review text are required.",
        variant: "destructive"
      });
      return;
    }

    // Check if user already submitted a review (using localStorage)
    const existingReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    const userAlreadyReviewed = existingReviews.some((review: any) => 
      review.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (userAlreadyReviewed) {
      toast({
        title: "Review already submitted",
        description: "You have already submitted a review with this name.",
        variant: "destructive"
      });
      return;
    }

    const newReview = {
      ...formData,
      id: Date.now(),
      avatar: formData.avatar || `https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=100&h=100`
    };

    // Save to localStorage
    const updatedReviews = [...existingReviews, newReview];
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));

    onReviewSubmit(newReview);
    
    // Reset form
    setFormData({ name: '', rating: 0, text: '', avatar: '' });
    
    toast({
      title: "Review submitted successfully!",
      description: "Thank you for your feedback.",
    });
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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-green-600 dark:border-green-500">
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
          />
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
