
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
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

interface ServiceImageSliderProps {
  open: boolean;
  onClose: () => void;
}

const ServiceImageSlider: React.FC<ServiceImageSliderProps> = ({ open, onClose }) => {
  const [images, setImages] = useState([
    { id: 1, url: '/lovable-uploads/1c9cc78b-0878-4fd4-af13-04ee4380a53a.png', alt: 'Hurricanian Enterprises - Property Services' },
    { id: 2, url: '/lovable-uploads/65e2c288-1fdc-484f-8f61-5d5af426711e.png', alt: 'Hurricanian Gems - Gemstone Services' },
    { id: 3, url: '/lovable-uploads/f9961fd6-c7b1-49f9-9b95-bc30186c72d1.png', alt: 'Hurricanian LiveStock - Animal Trading' },
    { id: 4, url: '/lovable-uploads/ee97023b-6804-4f8b-9ef0-1bd438a331cc.png', alt: 'Hurricanian Pink Salt - Salt Products' },
    { id: 5, url: '/lovable-uploads/c57a64f2-cf18-41f1-9c0e-553f47530e9d.png', alt: 'Hurricanian Technologies - Tech Services' },
  ]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageAlt, setNewImageAlt] = useState('');
  const { toast } = useToast();

  const handleAddImage = () => {
    if (!newImageUrl || !newImageAlt) {
      toast({
        title: "Missing information",
        description: "Please provide both image URL and description.",
        variant: "destructive",
      });
      return;
    }

    const newImage = {
      id: Date.now(),
      url: newImageUrl,
      alt: newImageAlt
    };

    setImages([...images, newImage]);
    setNewImageUrl('');
    setNewImageAlt('');
    
    toast({
      title: "Image added",
      description: "New image has been added to the slider.",
    });
  };

  const handleDeleteImage = (imageId: number) => {
    setImages(images.filter(img => img.id !== imageId));
    toast({
      title: "Image deleted",
      description: "Image has been removed from the slider.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage Service Images</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Add New Image */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Image
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  placeholder="Enter image URL"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="imageAlt">Image Description</Label>
                <Input
                  id="imageAlt"
                  placeholder="Enter image description"
                  value={newImageAlt}
                  onChange={(e) => setNewImageAlt(e.target.value)}
                />
              </div>
            </div>
            <Button 
              onClick={handleAddImage} 
              className="mt-4"
              disabled={!newImageUrl || !newImageAlt}
            >
              <Upload className="w-4 h-4 mr-2" />
              Add Image
            </Button>
          </div>

          {/* Current Images */}
          <div>
            <h3 className="font-semibold mb-4">Current Images ({images.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="border rounded-lg p-3 bg-white">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-sm text-gray-600 mb-2">{image.alt}</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="w-full">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Image</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to remove this image from the slider? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteImage(image.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceImageSlider;
