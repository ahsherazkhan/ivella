import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const SubmissionPortal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    hairType: '',
    concerns: [],
    timeframe: '',
    products: [],
    testimonial: '',
    beforeImage: null,
    afterImage: null,
    consent: false,
    marketing: false
  });

  const [dragActive, setDragActive] = useState({ before: false, after: false });

  const hairTypeOptions = [
    { value: 'straight', label: 'Straight' },
    { value: 'wavy', label: 'Wavy' },
    { value: 'curly', label: 'Curly' },
    { value: 'coily', label: 'Coily' }
  ];

  const timeframeOptions = [
    { value: '2-weeks', label: '2 Weeks' },
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6+ Months' }
  ];

  const concernOptions = [
    'Dryness', 'Damage', 'Frizz Control', 'Thinning Hair', 'Scalp Health', 'Hair Growth'
  ];

  const productOptions = [
    'Nourishing Hair Oil', 'Scalp Revival Serum', 'Intensive Repair Mask', 
    'Daily Ritual Oil', 'Growth Stimulating Oil', 'Protective Hair Mist'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev?.[field], value]
        : prev?.[field]?.filter(item => item !== value)
    }));
  };

  const handleDrag = (e, type) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === 'dragenter' || e?.type === 'dragover') {
      setDragActive(prev => ({ ...prev, [type]: true }));
    } else if (e?.type === 'dragleave') {
      setDragActive(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleDrop = (e, type) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(prev => ({ ...prev, [type]: false }));
    
    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleInputChange(`${type}Image`, e?.dataTransfer?.files?.[0]);
    }
  };

  const handleFileSelect = (e, type) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      handleInputChange(`${type}Image`, e?.target?.files?.[0]);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const FileUploadArea = ({ type, file }) => (
    <div
      className={`border-2 border-dashed rounded-organic p-6 text-center transition-colors duration-200 ${
        dragActive?.[type] 
          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
      }`}
      onDragEnter={(e) => handleDrag(e, type)}
      onDragLeave={(e) => handleDrag(e, type)}
      onDragOver={(e) => handleDrag(e, type)}
      onDrop={(e) => handleDrop(e, type)}
    >
      {file ? (
        <div className="space-y-2">
          <Icon name="CheckCircle" size={24} className="text-success mx-auto" />
          <p className="text-foreground font-medium">{file?.name}</p>
          <p className="text-sm text-muted-foreground">
            {(file?.size / 1024 / 1024)?.toFixed(2)} MB
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Icon name="Upload" size={32} className="text-muted-foreground mx-auto" />
          <div>
            <p className="text-foreground font-medium mb-1">
              Upload {type} photo
            </p>
            <p className="text-sm text-muted-foreground">
              Drag and drop or click to select
            </p>
          </div>
        </div>
      )}
      
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileSelect(e, type)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );

  return (
    <div className="bg-card rounded-organic p-8 luxury-shadow">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Share Your Transformation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Inspire others with your hair journey! Submit your before/after photos and story 
          to be featured in our gallery and earn exclusive rewards.
        </p>
      </div>
      {/* Incentives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-background rounded-lg p-4 text-center">
          <Icon name="Gift" size={24} className="text-secondary mx-auto mb-2" />
          <h3 className="font-medium text-foreground mb-1">$50 Product Credit</h3>
          <p className="text-sm text-muted-foreground">For featured stories</p>
        </div>
        <div className="bg-background rounded-lg p-4 text-center">
          <Icon name="Star" size={24} className="text-secondary mx-auto mb-2" />
          <h3 className="font-medium text-foreground mb-1">VIP Status</h3>
          <p className="text-sm text-muted-foreground">Early access to new products</p>
        </div>
        <div className="bg-background rounded-lg p-4 text-center">
          <Icon name="Users" size={24} className="text-secondary mx-auto mb-2" />
          <h3 className="font-medium text-foreground mb-1">Community Feature</h3>
          <p className="text-sm text-muted-foreground">Spotlight on social media</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            required
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            placeholder="Enter your full name"
          />
          <Input
            label="Email Address"
            type="email"
            required
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            placeholder="your@email.com"
          />
        </div>

        <Input
          label="Instagram Handle (Optional)"
          type="text"
          value={formData?.instagram}
          onChange={(e) => handleInputChange('instagram', e?.target?.value)}
          placeholder="@yourusername"
          description="We may feature you on our social media"
        />

        {/* Hair Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Hair Type"
            required
            options={hairTypeOptions}
            value={formData?.hairType}
            onChange={(value) => handleInputChange('hairType', value)}
            placeholder="Select your hair type"
          />
          <Select
            label="Transformation Timeframe"
            required
            options={timeframeOptions}
            value={formData?.timeframe}
            onChange={(value) => handleInputChange('timeframe', value)}
            placeholder="How long did it take?"
          />
        </div>

        {/* Hair Concerns */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Hair Concerns Addressed *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {concernOptions?.map((concern) => (
              <Checkbox
                key={concern}
                label={concern}
                checked={formData?.concerns?.includes(concern)}
                onChange={(e) => handleArrayChange('concerns', concern, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        {/* Products Used */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Ivella Products Used *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {productOptions?.map((product) => (
              <Checkbox
                key={product}
                label={product}
                checked={formData?.products?.includes(product)}
                onChange={(e) => handleArrayChange('products', product, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        {/* Photo Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Before Photo *
            </label>
            <div className="relative">
              <FileUploadArea type="before" file={formData?.beforeImage} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              After Photo *
            </label>
            <div className="relative">
              <FileUploadArea type="after" file={formData?.afterImage} />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Transformation Story *
          </label>
          <textarea
            required
            value={formData?.testimonial}
            onChange={(e) => handleInputChange('testimonial', e?.target?.value)}
            placeholder="Tell us about your hair journey with Ivella. What changes did you notice? How did it make you feel?"
            className="w-full h-32 px-4 py-3 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Minimum 100 words. Share your honest experience!
          </p>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-3">
          <Checkbox
            label="I consent to Ivella using my photos and story for marketing purposes"
            required
            checked={formData?.consent}
            onChange={(e) => handleInputChange('consent', e?.target?.checked)}
          />
          <Checkbox
            label="I'd like to receive updates about new products and exclusive offers"
            checked={formData?.marketing}
            onChange={(e) => handleInputChange('marketing', e?.target?.checked)}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            size="lg"
            className="bg-golden-gradient hover:opacity-90 px-8"
            iconName="Send"
            iconPosition="right"
          >
            Submit My Story
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            We'll review your submission within 3-5 business days
          </p>
        </div>
      </form>
    </div>
  );
};

export default SubmissionPortal;