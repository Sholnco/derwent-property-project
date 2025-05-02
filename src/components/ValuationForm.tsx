
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface ValuationFormProps {
  variant?: 'light' | 'dark';
}

const ValuationForm = ({ variant = 'dark' }: ValuationFormProps) => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      toast.success("Request submitted successfully!");
      // Redirect to valuation system would happen here
      // window.location.href = "https://valuation.derwentrealestate.com.au";
      console.log("Address submitted:", address);
      setAddress('');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold ${variant === 'light' ? 'text-white' : 'text-derwent-dark'} mb-2`}>
          What's My Property Worth?
        </h3>
        <p className={`${variant === 'light' ? 'text-gray-200' : 'text-gray-600'}`}>
          Get an instant property valuation now
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Enter your property address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="h-12 bg-white border-gray-300"
          />
        </div>
        <Button 
          type="submit"
          disabled={loading || !address}
          className="h-12 bg-derwent-blue hover:bg-derwent-darkblue text-white font-medium px-6"
        >
          {loading ? 'Processing...' : 'Get Valuation'}
        </Button>
      </div>
    </form>
  );
};

export default ValuationForm;
