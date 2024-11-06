import React from 'react';
import Banner1 from '../../assets/Banner1.png';
import Banner2 from '../../assets/Banner1.png';
import Banner3 from '../../assets/Banner1.png';

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${Banner1})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div> 
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Semana de Descontos!
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-6">
          Até 50% de desconto em todos os artigos esportivos
        </p>
        <p className="text-lg text-blue-200 mb-8">
          Aproveite nossos preços exclusivos!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
          Ver Ofertas
        </button>
      </div>
    </section>
  );
};
