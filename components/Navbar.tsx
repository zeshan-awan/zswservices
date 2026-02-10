'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar bg-primary text-white fixed w-full top-0 z-50 h-[70px]">
      <div className="container mx-auto px-4 h-full max-w-7xl">
        <div className="flex justify-between items-center h-full">
          <h2 className="text-2xl font-bold">ZWS Courier</h2>

          <nav className={`flex items-center gap-6 ${menuOpen ? 'flex-col absolute top-[70px] left-0 w-full bg-primary p-4' : 'flex-row'}`}>
            <Link href="/" className="hover:text-gray-200 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-200 transition">About Us</Link>
            <Link href="/domestic" className="hover:text-gray-200 transition">Domestic</Link>
            <Link href="/express" className="hover:text-gray-200 transition">Express</Link>
            <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
            <Link href="/admin" className="bg-red-900 px-4 py-2 rounded hover:bg-red-800 transition">
              <i className="fas fa-lock mr-1"></i> Admin
            </Link>
          </nav>

          <button
            className="menu-toggle md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
