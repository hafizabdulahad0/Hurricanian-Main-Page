
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceEditDialogProps {
  open: boolean;
  onClose: () => void;
  service: any;
  onSave: (updatedService: any) => void;
}

const ServiceEditDialog: React.FC<ServiceEditDialogProps> = ({ open, onClose, service, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    bgColor: '',
    borderColor: '',
    hoverColor: ''
  });

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title || '',
        description: service.description || '',
        url: service.url || '',
        bgColor: service.bgColor || '',
        borderColor: service.borderColor || '',
        hoverColor: service.hoverColor || ''
      });
    }
  }, [service]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const updatedService = {
      ...service,
      ...formData
    };
    onSave(updatedService);
  };

  const colorOptions = [
    { value: 'bg-cyan-600', label: 'Cyan', preview: 'bg-cyan-600' },
    { value: 'bg-orange-500/80', label: 'Orange', preview: 'bg-orange-500' },
    { value: 'bg-indigo-400/80', label: 'Indigo', preview: 'bg-indigo-400' },
    { value: 'bg-yellow-500/80', label: 'Yellow', preview: 'bg-yellow-500' },
    { value: 'bg-lime-500/80', label: 'Lime', preview: 'bg-lime-500' },
    { value: 'bg-purple-400/80', label: 'Purple', preview: 'bg-purple-400' },
    { value: 'bg-teal-500/80', label: 'Teal', preview: 'bg-teal-500' },
    { value: 'bg-amber-700/80', label: 'Amber', preview: 'bg-amber-700' },
    { value: 'bg-rose-500/80', label: 'Rose', preview: 'bg-rose-500' },
    { value: 'bg-blue-600/80', label: 'Blue', preview: 'bg-blue-600' },
    { value: 'bg-pink-500/80', label: 'Pink', preview: 'bg-pink-500' },
    { value: 'bg-gray-800/80', label: 'Gray', preview: 'bg-gray-800' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Service: {service?.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter service title"
              />
            </div>
            
            <div>
              <Label htmlFor="url">Service URL</Label>
              <Input
                id="url"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                placeholder="https://example.com"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter service description"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="bgColor">Background Color</Label>
              <Select value={formData.bgColor} onValueChange={(value) => handleInputChange('bgColor', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {colorOptions.map((color) => (
                    <SelectItem key={color.value} value={color.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${color.preview}`}></div>
                        {color.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="borderColor">Border Color</Label>
              <Input
                id="borderColor"
                value={formData.borderColor}
                onChange={(e) => handleInputChange('borderColor', e.target.value)}
                placeholder="border-cyan-700"
              />
            </div>
            
            <div>
              <Label htmlFor="hoverColor">Hover Color</Label>
              <Input
                id="hoverColor"
                value={formData.hoverColor}
                onChange={(e) => handleInputChange('hoverColor', e.target.value)}
                placeholder="hover:bg-cyan-700"
              />
            </div>
          </div>
          
          {/* Preview */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <Label>Preview</Label>
            <div className={`service-card mt-2 ${formData.bgColor} ${formData.hoverColor} border-2 ${formData.borderColor} p-4 rounded-lg text-white max-w-xs`}>
              <h3 className="font-bold text-sm">{formData.title || 'Service Title'}</h3>
              <p className="text-xs mt-1 text-white/90">{formData.description || 'Service description'}</p>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceEditDialog;
