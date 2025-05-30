
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "The services provided by Hurricanian were outstanding! They helped me set up my domain and hosting in no time. I'm very satisfied with their quick response and professional service."
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=100&h=100",
      rating: 4,
      text: "Great company with excellent customer service. I highly recommend their travel visa services. The process was smooth and they guided me through every step."
    },
    {
      id: 3,
      name: "Mark Wilson",
      avatar: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "I purchased gemstones through their platform and was impressed with the quality and authenticity. Will definitely use again! The verification process gives me confidence in my purchase."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=100&h=100",
      rating: 4,
      text: "Their online store has a great selection of products and the shipping was faster than expected. I love how easy it is to navigate their website."
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "The domain hosting service is reliable and affordable. I've been using it for my business website for over a year now with no issues."
    },
    {
      id: 6,
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=100&h=100",
      rating: 4,
      text: "Excellent travel visa service! They made the complicated process straightforward and saved me a lot of time."
    }
  ];

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
        <h2 className="section-title text-gray-800 dark:text-white">Customer Reviews</h2>
        
        <div className="mt-10 px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-green-600 dark:border-green-500 h-full">
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
      </div>
    </section>
  );
};

export default Reviews;
