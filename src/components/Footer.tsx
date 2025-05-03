
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barber-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-barber-gold font-playfair">Barber<span className="text-white">Shop</span></h2>
            </Link>
            <p className="text-gray-300 mb-6">
              Oferecemos os melhores serviços de barbearia, combinando técnicas tradicionais com tendências modernas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/barbeiros" className="text-gray-300 hover:text-barber-gold transition-colors">
                  Nossos Barbeiros
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-barber-gold transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-barber-gold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-gray-300 hover:text-barber-gold transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="text-gray-300 hover:text-barber-gold transition-colors">
                  Agendar Horário
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 mt-1 text-barber-gold flex-shrink-0" size={18} />
                <span>Av. Principal, 1234<br />Centro, Cidade - Estado</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-barber-gold flex-shrink-0" size={18} />
                <a href="tel:+551199998888" className="hover:text-barber-gold">
                  (11) 9999-8888
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-barber-gold flex-shrink-0" size={18} />
                <a href="mailto:contato@barbershop.com.br" className="hover:text-barber-gold">
                  contato@barbershop.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BarberShop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
