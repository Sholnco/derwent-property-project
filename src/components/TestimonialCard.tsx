
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  imageUrl,
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      'bg-white p-6 rounded-lg shadow-property',
      className
    )}>
      <div className="mb-4">
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 4.5H9.75C8.505 4.5 7.5 5.505 7.5 6.75V12C7.5 13.245 8.505 14.25 9.75 14.25H13.5C14.745 14.25 15.75 13.245 15.75 12V9C15.75 7.755 14.745 6.75 13.5 6.75H12C12 5.505 12.755 3.75 15 3.75V4.5ZM6 4.5H0.75C-0.495 4.5 -1.5 5.505 -1.5 6.75V12C-1.5 13.245 -0.495 14.25 0.75 14.25H4.5C5.745 14.25 6.75 13.245 6.75 12V9C6.75 7.755 5.745 6.75 4.5 6.75H3C3 5.505 3.755 3.75 6 3.75V4.5Z" fill="#1A5B91" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed">{content}</p>
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img
              src={imageUrl}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-derwent-dark">{author}</p>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
