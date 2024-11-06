// Header.jsx
import React from 'react';
import { ShoppingCart, Menu, Volleyball } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="flex text-2xl font-bold tracking-tight"><span className='flex justify-center p-1'><Volleyball /></span>Synthica Outlet</h1>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {['Home', 'Roupas', 'Calçados', 'Acessórios'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-100 hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                            <ShoppingCart className="h-6 w-6" />
                        </button>
                        <button className="md:hidden p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};