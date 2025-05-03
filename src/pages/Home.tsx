import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services, barbers, testimonials } from '../data/mockData';
import { Calendar, Clock, Star, MessageSquare, Scissors } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-barber-gold">
              Estilo e Tradição em Cada Corte
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Transforme seu visual com os melhores profissionais do mercado. 
              Nossa barbearia combina técnicas clássicas com tendências modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover"
              >
                <Link to="/agendar">Agendar Horário</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-barber-gold text-barber-gold hover:bg-barber-gold/90 hover:text-barber-black btn-hover"
              >
                <Link to="/servicos">Ver Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços para atender às suas necessidades,
              com a qualidade que você merece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
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
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-barber-gold font-bold mb-3">R$ {service.price.toFixed(2).replace('.', ',')}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{service.duration} minutos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="default" 
              size="lg"
              asChild
              className="bg-barber-black hover:bg-barber-black/90 btn-hover"
            >
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Barbers Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossos Barbeiros</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossa equipe de profissionais especializados, 
              prontos para oferecer o melhor serviço.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {barbers.map((barber) => (
              <div 
                key={barber.id} 
                className="bg-barber-light rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200">
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                  <p className="text-barber-gold font-medium mb-2">{barber.role}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Experiência:</span> {barber.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-barber-gold text-barber-black hover:bg-barber-gold/10 btn-hover"
            >
              <Link to="/barbeiros">Conhecer Todos os Barbeiros</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 bg-barber-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-barber-gold">Depoimentos</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nós.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="bg-barber-black border border-barber-gold/30 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-barber-gold">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.rating ? "text-barber-gold" : "text-gray-400"}`} 
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-2">"{testimonial.comment}"</p>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline"
              className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-black btn-hover"
            >
              <Link to="/depoimentos">
                Ver todos os Depoimentos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barber-wood text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Estilo?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agende agora seu horário e experimente o melhor serviço de barbearia da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover"
            >
              <Link to="/agendar">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Horário
              </Link>
            </Button>
            <Button 
              size="lg" 
              asChild
              className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover"
            >
              <Link to="/contato">
                <MessageSquare className="mr-2 h-4 w-4" />
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
