
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Barbeiros", path: "/barbeiros" },
    { name: "Serviços", path: "/servicos" },
    { name: "Sobre", path: "/sobre" },
    { name: "Depoimentos", path: "/depoimentos" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-barber-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-barber-gold font-playfair">Barber<span className="text-white">Shop</span></h1>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative font-medium ${
                isActive(link.path) 
                  ? "text-barber-gold" 
                  : "text-white hover:text-barber-gold transition-colors"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-barber-gold after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left ${
                isActive(link.path) && "after:scale-x-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover">
            <Link to="/agendar">Agendar</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-barber-black md:hidden p-4 flex flex-col gap-4 shadow-lg animate-fade-in">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`py-2 px-4 rounded-md ${isActive(link.path) ? "bg-barber-gold/20 text-barber-gold" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 w-full">
              <Link to="/agendar" onClick={() => setIsMenuOpen(false)}>
                Agendar
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
