
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  email?: string;
  phone?: string;
  className?: string;
}

const TeamMember = ({
  name,
  role,
  imageUrl,
  email,
  phone,
  className
}: TeamMemberProps) => {
  return (
    <div className={cn(
      'bg-white rounded-lg overflow-hidden shadow-property transition-transform duration-300 hover:-translate-y-1',
      className
    )}>
      <div className="h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-derwent-dark">{name}</h3>
        <p className="text-derwent-blue font-medium mt-1">{role}</p>
        
        {(email || phone) && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            {email && (
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="text-sm text-gray-600 hover:text-derwent-blue">
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${phone}`} className="text-sm text-gray-600 hover:text-derwent-blue">
                  {phone}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
