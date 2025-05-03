import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { barbers } from '../data/mockData';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Barbers = () => {
  return (
    <div className="min-h-screen bg-barber-light">
      {/* Header */}
      <div className="bg-barber-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">Nossos Barbeiros</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Conheça nossa equipe de profissionais altamente qualificados, 
            cada um com habilidades únicas e especializações para atender suas necessidades.
          </p>
        </div>
      </div>

      {/* Barbeiros Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {barbers.map((barber) => (
              <Card key={barber.id} className="overflow-hidden shadow-lg border-none">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  <div className="h-48 sm:h-64 md:h-full bg-gray-200 md:col-span-1">
                    <img 
                      src={barber.image} 
                      alt={barber.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8 md:col-span-2 flex flex-col">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-barber-black">{barber.name}</h2>
                          <p className="text-barber-gold font-medium text-sm sm:text-base">{barber.role}</p>
                        </div>
                        <span className="bg-barber-black text-white py-1 px-3 rounded-full text-xs sm:text-sm w-fit">
                          {barber.experience}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {barber.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Especialidades:</h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {barber.specialties.map((specialty, index) => (
                            <span key={index} className="bg-barber-gold/10 text-barber-black py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Disponibilidade:</h3>
                        <div className="space-y-1">
                          {barber.availability.map((avail, index) => (
                            <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                              <Calendar size={14} className="mr-1 sm:mr-2" />
                              <span className="font-medium mr-1 sm:mr-2">{avail.day}:</span>
                              <Clock size={14} className="mr-1 sm:mr-2" />
                              <span>{avail.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 sm:mt-12">
            <Button 
              asChild
              className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg btn-hover min-h-[44px]"
            >
              <Link to="/agendar">
                Agendar Horário
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barbers;
