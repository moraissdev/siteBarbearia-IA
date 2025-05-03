
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-barber-light">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-barber-gold">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-barber-black">Página Não Encontrada</h2>
        <p className="text-xl text-gray-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Button className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 btn-hover">
          <Link to="/">Voltar para o Início</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
