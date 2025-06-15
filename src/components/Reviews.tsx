
import React, { useState, useEffect } from 'react';
import { Star, Trash2, Shield } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReviewForm from './ReviewForm';

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const ADMIN_PASSWORD = "AliSherazi";

  useEffect(() => {
    // Load user reviews from localStorage
    const userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    setAllReviews(userReviews);
  }, []);

  const handleNewReview = (review: any) => {
    setAllReviews(prev => [...prev, review]);
  };

  const handleDeleteReview = (reviewId: number) => {
    const updatedReviews = allReviews.filter((review: any) => review.id !== reviewId);
    setAllReviews(updatedReviews);
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
    
    toast({
      title: "Review deleted",
      description: "The review has been successfully removed.",
    });
  };

  const handleAdminToggle = () => {
    if (isAdminMode) {
      // Exit admin mode
      setIsAdminMode(false);
    } else {
      // Prompt for password to enter admin mode
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
        description: "You can now delete reviews.",
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1"></div>
          <h2 className="section-title text-gray-800 dark:text-white text-center">Customer Reviews</h2>
          
          {/* Admin Toggle */}
          <div className="flex-1 flex justify-end">
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
        
        {allReviews.length > 0 ? (
          <div className="mt-10 px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {allReviews.map((review) => (
                  <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-green-600 dark:border-green-500 h-full relative">
                      {/* Admin Delete Button */}
                      {isAdminMode && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 w-8 h-8"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Review</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this review by {review.name}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteReview(review.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}

                      <div className="flex items-center mb-4">
                        <img 
                          src={review.avatar} 
                          alt={`${review.name}'s avatar`} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800 dark:text-white">{review.name}</h3>
                          <div className="flex mt-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-300">No reviews yet. Be the first to leave a review!</p>
          </div>
        )}

        {/* Review Form Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <ReviewForm onReviewSubmit={handleNewReview} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
