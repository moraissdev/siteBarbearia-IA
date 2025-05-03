
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, MapPin, Phone, Mail } from 'lucide-react';
import Scissors from '@/components/Scissors';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { services } from '@/data/mockData';

const About = () => {
  return (
    <div className="min-h-screen bg-barber-light">
      {/* Header */}
      <div className="bg-barber-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">Sobre Nossa Barbearia</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Conheça nossa história, valores e o que nos torna a barbearia de referência na região.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-barber-black">Nossa História</h2>
            <div className="w-20 h-1 bg-barber-gold mb-6"></div>
            <div className="space-y-4 text-gray-700">
              <p>
                Fundada em 2010 por Roberto Almeida, mestre barbeiro com mais de 30 anos de experiência, 
                a BarberShop nasceu com a visão de resgatar a tradição das antigas barbearias enquanto 
                incorpora técnicas e tendências modernas.
              </p>
              <p>
                O que começou como um pequeno estabelecimento com apenas duas cadeiras se transformou, 
                ao longo dos anos, em um espaço de referência na cidade, mantendo sempre o compromisso 
                com a qualidade e a satisfação do cliente.
              </p>
              <p>
                Hoje, contamos com uma equipe de profissionais altamente qualificados, capazes de executar 
                desde os cortes mais clássicos até os estilos mais contemporâneos, tudo em um ambiente 
                acolhedor e sofisticado.
              </p>
              <p>
                Em 2015, expandimos nosso espaço para o endereço atual, triplicando nossa capacidade de atendimento 
                e incluindo uma área de convivência com bebidas e petiscos para nossos clientes. Em 2020, 
                celebramos uma década de história com a inauguração da nossa academia de barbeiros, onde 
                formamos novos talentos para o mercado.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-gray-200 h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg"
              alt="Barbearia" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-barber-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-barber-gold">Nossos Valores</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-barber-black border border-barber-gold/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-barber-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-gray-300">
                Buscamos a perfeição em cada corte e serviço, 
                utilizando técnicas refinadas e produtos de alta qualidade.
              </p>
            </div>
            
            <div className="bg-barber-black border border-barber-gold/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-barber-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Cada cliente é único e merece um atendimento exclusivo, 
                adaptado às suas preferências e necessidades.
              </p>
            </div>
            
            <div className="bg-barber-black border border-barber-gold/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-barber-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Tradição & Inovação</h3>
              <p className="text-gray-300">
                Preservamos técnicas tradicionais da barbearia clássica 
                enquanto abraçamos as inovações do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-barber-black">Serviços Oferecidos</h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-8">
            Nossa barbearia oferece uma gama completa de serviços para cuidar da sua aparência com o máximo de qualidade e profissionalismo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-barber-gold font-semibold">R$ {service.price.toFixed(2)}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
                <p className="text-sm text-gray-500 mt-2">Duração: {service.duration} minutos</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-barber-gold text-barber-black hover:bg-barber-gold/90">
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 bg-barber-wood text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-barber-black/20 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-10 h-10 bg-barber-gold/20 rounded-full flex items-center justify-center mr-3">
                  <User className="text-barber-gold" size={20} />
                </div>
                Profissionais Certificados
              </h3>
              <p>
                Nossa equipe é formada por profissionais com certificação internacional 
                e constante atualização em técnicas modernas.
              </p>
            </div>
            
            <div className="bg-barber-black/20 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-10 h-10 bg-barber-gold/20 rounded-full flex items-center justify-center mr-3">
                  <Scissors className="text-barber-gold" size={20} />
                </div>
                Produtos Premium
              </h3>
              <p>
                Utilizamos apenas produtos de alta qualidade, importados e 
                selecionados para proporcionar o melhor resultado.
              </p>
            </div>
            
            <div className="bg-barber-black/20 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-10 h-10 bg-barber-gold/20 rounded-full flex items-center justify-center mr-3">
                  <Calendar className="text-barber-gold" size={20} />
                </div>
                Agendamento Online
              </h3>
              <p>
                Facilidade para agendar seu horário diretamente pelo site ou aplicativo, 
                sem filas de espera ou ligações.
              </p>
            </div>
            
            <div className="bg-barber-black/20 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-10 h-10 bg-barber-gold/20 rounded-full flex items-center justify-center mr-3">
                  <Clock className="text-barber-gold" size={20} />
                </div>
                Ambiente Exclusivo
              </h3>
              <p>
                Espaço confortável com TV, bebidas, WiFi gratuito e 
                uma experiência completa de cuidado masculino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-barber-black">Nossa Localização</h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <MapPin size={48} className="text-barber-gold" />
                <span className="ml-2 text-xl font-bold">Mapa Indisponível</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Como Nos Encontrar</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-barber-gold flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p>Av. Principal, 1234, Centro</p>
                  <p>São Paulo - SP, 01001-000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-3 mt-1 text-barber-gold flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <p>(11) 9999-8888</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-3 mt-1 text-barber-gold flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold">E-mail</h4>
                  <p>contato@barbershop.com.br</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Transporte Público:</h4>
                <p>Estamos localizados a 200m da Estação República do Metrô</p>
                <p>Diversas linhas de ônibus param em frente ao estabelecimento</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Estacionamento:</h4>
                <p>Estacionamento conveniado com desconto para clientes</p>
                <p>Serviço de valet disponível</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="mr-2 text-barber-gold" />
              Horário de Funcionamento
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between pb-3 border-b">
                <span className="font-medium">Segunda a Sexta</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between pb-3 border-b">
                <span className="font-medium">Sábado</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-barber-gold" size={18} />
                <div>
                  <span className="font-medium block">Endereço</span>
                  <address className="not-italic">Av. Principal, 1234<br/>Centro, Cidade - Estado</address>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-barber-gold" size={18} />
                <div>
                  <span className="font-medium block">Telefone</span>
                  <a href="tel:+551199998888" className="hover:text-barber-gold">(11) 9999-8888</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-barber-gold" size={18} />
                <div>
                  <span className="font-medium block">E-mail</span>
                  <a href="mailto:contato@barbershop.com.br" className="hover:text-barber-gold">contato@barbershop.com.br</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barber-wood text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Venha Conhecer Nossa Barbearia</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experimente o melhor serviço de barbearia da região. 
            Nossa equipe está pronta para transformar seu visual.
          </p>
          <Button 
            size="lg" 
            className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover"
          >
            <Link to="/agendar">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Horário
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
