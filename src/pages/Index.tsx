
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import ValuationForm from '@/components/ValuationForm';
import TestimonialCard from '@/components/TestimonialCard';
import TeamMember from '@/components/TeamMember';

const Index = () => {
  // Mock data for featured properties
  const featuredProperties = [
    {
      id: '1',
      title: 'Modern Waterfront House',
      address: '42 Marine Drive, Sandy Bay, TAS 7005',
      price: '$1,450,000',
      bedrooms: 4,
      bathrooms: 3,
      carspaces: 2,
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      isFeatured: true
    },
    {
      id: '2',
      title: 'Luxury Apartment with Views',
      address: '15/23 Hunter Street, Hobart, TAS 7000',
      price: '$875,000',
      bedrooms: 3,
      bathrooms: 2,
      carspaces: 1,
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Renovated Heritage Home',
      address: '78 Arthur Street, North Hobart, TAS 7000',
      price: '$925,000',
      bedrooms: 4,
      bathrooms: 2,
      carspaces: 2,
      imageUrl: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      isFeatured: true
    }
  ];

  // Mock data for team members
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Principal',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      email: 'sarah@derwentrealestate.com.au',
      phone: '0412 345 678'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Sales Consultant',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      email: 'michael@derwentrealestate.com.au',
      phone: '0423 456 789'
    },
    {
      name: 'Emma Wilson',
      role: 'Property Manager',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      email: 'emma@derwentrealestate.com.au',
      phone: '0434 567 890'
    }
  ];

  // Mock testimonials
  const testimonials = [
    {
      content: "Derwent Real Estate made selling our home stress-free. Their market knowledge and professional approach resulted in a quick sale above our expected price.",
      author: "James & Linda Thompson",
      role: "Seller in Battery Point"
    },
    {
      content: "As first-time buyers, we were guided through every step of the process. Our agent was patient, informative and helped us find our dream home within budget.",
      author: "Tom & Anna Morris",
      role: "Buyer in Sandy Bay"
    },
    {
      content: "The property management team has been exceptional. Responsive, thorough and professional in handling all aspects of our investment property.",
      author: "David Williams",
      role: "Property Investor"
    }
  ];

  return (
    <div>
      {/* Hero Section with Property Valuation */}
      <section 
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Trusted Partner in Tasmanian Real Estate
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-slide-up">
            Find your perfect property with Derwent Real Estate, Tasmania's leading real estate agency since 1993
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <ValuationForm />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link to="/buy">
              <Button className="text-lg px-8 py-6 bg-derwent-blue hover:bg-derwent-darkblue">
                Browse Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="text-lg px-8 py-6 bg-white text-derwent-blue hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium properties available across Tasmania
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/buy">
              <Button variant="outline" className="text-derwent-blue border-derwent-blue hover:bg-derwent-blue hover:text-white">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-property text-center">
              <div className="bg-derwent-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-derwent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Sales</h3>
              <p className="text-gray-600 mb-6">Expert guidance through the entire selling process to achieve the best possible outcome.</p>
              <Link to="/sell" className="text-derwent-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-property text-center">
              <div className="bg-derwent-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-derwent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Management</h3>
              <p className="text-gray-600 mb-6">Comprehensive management services for residential and commercial properties.</p>
              <Link to="/rent" className="text-derwent-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-property text-center">
              <div className="bg-derwent-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-derwent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Appraisal</h3>
              <p className="text-gray-600 mb-6">Accurate property valuations backed by extensive local market knowledge.</p>
              <Link to="/contact" className="text-derwent-blue font-medium hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Valuation CTA Section */}
      <section className="py-16 bg-derwent-blue">
        <div className="container-custom">
          <ValuationForm variant="light" />
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are here to assist you with all your real estate needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline" className="text-derwent-blue border-derwent-blue hover:bg-derwent-blue hover:text-white">
                View All Team Members
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied clients have to say about their experience with Derwent Real Estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Move?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your real estate needs and how we can help you achieve your property goals
          </p>
          <Link to="/contact">
            <Button className="bg-derwent-blue hover:bg-derwent-darkblue text-lg px-8 py-3">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
