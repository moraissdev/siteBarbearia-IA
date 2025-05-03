import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '../data/mockData';
import { Clock, Search, Scissors } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-barber-light">
      {/* Header */}
      <div className="bg-barber-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">Nossos Serviços</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços executados por profissionais experientes, 
            utilizando produtos de alta qualidade.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Buscar serviços..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Services List */}
      <section className="py-8 pb-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 sm:h-56 bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold">{service.name}</h3>
                  <span className="bg-barber-gold text-barber-black py-1 px-3 rounded-full text-sm font-medium w-fit">
                    R$ {service.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Clock size={14} className="mr-1 sm:mr-2" />
                    <span>{service.duration} minutos</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="border-barber-gold text-barber-gold hover:bg-barber-gold/10 btn-hover text-xs sm:text-sm min-h-[32px] px-3 py-1 max-w-[120px]"
                  >
                    <Link to={`/agendar?servico=${service.id}`}>
                      <Scissors size={12} className="mr-1" />
                      Agendar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">Nenhum serviço encontrado</h3>
            <p className="text-gray-600">Tente ajustar sua busca.</p>
          </div>
        )}

        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg btn-hover min-h-[44px] max-w-[200px]"
          >
            <Link to="/agendar">
              Agendar Horário
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
