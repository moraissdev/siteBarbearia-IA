
import React from 'react';
import { testimonials } from '../data/mockData';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
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
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-barber-gold">{testimonial.service}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < testimonial.rating ? "text-barber-gold" : "text-gray-300"}`} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">"{testimonial.comment}"</p>
              <p className="text-sm text-gray-500 text-right">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Testimonial CTA */}
      <section className="pb-16 container mx-auto px-4">
        <div className="bg-barber-black text-white rounded-lg p-8 text-center max-w-2xl mx-auto shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-barber-gold">Compartilhe sua Experiência!</h2>
          <p className="mb-6">
            Nos ajude a melhorar nosso serviço deixando um depoimento sobre sua experiência em nossa barbearia.
          </p>
          <div className="flex justify-center">
            <Link to="#" className="inline-block bg-barber-gold text-barber-black py-2 px-4 rounded-md font-medium hover:bg-barber-gold/90 transition-colors">
              Deixar Depoimento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
