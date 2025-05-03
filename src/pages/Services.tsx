
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <span className="bg-barber-gold text-barber-black py-1 px-3 rounded-full text-sm font-medium">
                    R$ {service.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{service.duration} minutos</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-barber-gold text-barber-gold hover:bg-barber-gold/10"
                  >
                    <Link to={`/agendar?servico=${service.id}`}>
                      <Scissors size={14} className="mr-1" />
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

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover"
          >
            <Link to="/agendar">Agendar Horário</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
