import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel';
import ProductCard from './components/ProductCard/ProductCard';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
  const products = [
    { 
      name: "Camisa 3 Atlético Mineiro 24",
      price: 129.99,
      image: "https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F161109293-628-628%2F-csa-adidas-atletico-mg-masc-iii-24-2xl-gg1.jpg%3Fv%3D638615096838230000"
    },
    {
      name: "Mochila - NH Arpenaz 100 Quechua",
      price: 79.99,
      image: "https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F101103111-628-628%2Fbackpack-nh-arpenaz-100-10l-cya-no-size-unica-unico1.jpg%3Fv%3D638393723533230000"
    },
    {
      name: "Kit Bola De Basquete Penalty + Bomba De Ar",
      price: 37.99,
      image: "https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F162149692-628-628%2F17265218935973.jpg%3Fv%3D638634330958330000"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <Carousel/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};


