import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              Desenvolvido por: <span className="font-semibold">Vitor Alves Titus Eskes - RM555137</span> | <span className="font-semibold">Nathan Craveiro Gonçalves Amin - RM555508</span> | <span className="font-semibold">Gabriel Matias Simões - RM556171</span>
            </p>
            <p className="mt-2 text-xs text-gray-400">© 2024 Synthica Outlet. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            {['facebook', 'instagram', 'twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">{social}</span>
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
