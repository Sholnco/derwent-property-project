
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  carspaces: number;
  imageUrl: string;
  className?: string;
  isFeatured?: boolean;
  propertyType?: string;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  carspaces,
  imageUrl,
  className,
  isFeatured,
  propertyType = "For Sale",
}: PropertyCardProps) => {
  return (
    <div 
      className={cn(
        'property-card overflow-hidden',
        className
      )}
    >
      <div className="relative">
        <Link to={`/property/${id}`}>
          <div className="relative h-56 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
            {isFeatured && (
              <div className="absolute top-3 right-3 bg-derwent-blue text-white py-1 px-3 text-xs font-medium rounded-full">
                Featured
              </div>
            )}
            <div className="absolute top-3 left-3 bg-derwent-darkblue text-white py-1 px-3 text-xs font-medium rounded-full">
              {propertyType}
            </div>
          </div>
        </Link>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold truncate hover:text-derwent-blue transition-colors">
          <Link to={`/property/${id}`}>{title}</Link>
        </h3>
        <p className="text-gray-500 text-sm mt-1 truncate">{address}</p>
        <p className="text-derwent-blue font-bold text-lg mt-2">{price}</p>
        
        <div className="flex justify-between mt-4 border-t pt-4 border-gray-100">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{carspaces}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
