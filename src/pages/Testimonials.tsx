import React, { useState } from 'react';
import { testimonials } from '../data/mockData';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialModal from '@/components/TestimonialModal';

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-barber-light">
      {/* Header */}
      <div className="bg-barber-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">Depoimentos</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Confira o que nossos clientes dizem sobre a experiência na nossa barbearia.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-8 sm:py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 overflow-hidden mr-3 sm:mr-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-barber-gold">{testimonial.service}</p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${i < testimonial.rating ? "text-barber-gold" : "text-gray-300"}`} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-2 sm:mb-3 text-sm sm:text-base">"{testimonial.comment}"</p>
              <p className="text-xs sm:text-sm text-gray-500 text-right">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Testimonial CTA */}
      <section className="pb-8 sm:pb-16 container mx-auto px-4">
        <div className="bg-barber-black text-white rounded-lg p-4 sm:p-8 text-center max-w-2xl mx-auto shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-barber-gold">Compartilhe sua Experiência!</h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Nos ajude a melhorar nosso serviço deixando um depoimento sobre sua experiência em nossa barbearia.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover text-sm sm:text-base min-h-[40px] px-6 py-2 max-w-[200px]"
            >
              Deixar Depoimento
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <TestimonialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Testimonials;
