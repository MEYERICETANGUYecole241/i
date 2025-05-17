"use client"

import { Menu, X, Lock} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';



export default function Header () {
const [isOpen, setIsOpen] = useState(false);

return (
// Header principal, avec flexbox pour aligner horizontalement les éléments.
    <header className="flex justify-between  items-center px-6 py-10 bg-gray-100 shadow-md relative z-30">
      
      {/* SECTION 1 : Logo + nom du site */}
      <div className=" justify-between flex items-center space-x-2 w-full">
       
        {/* Nom de la startup, stylisé */}
        <h1 className="text-xl font-bold text-blue-700"> RIVERSIDE </h1>

        {/* SECTION 2 : Liens de navigation (visibles uniquement sur écran moyen et plus grand) */}
      <nav className="hidden md:flex space-x-6 text-sm items-center text-black">
           <Link href="/" className="hover:text-[#FFC059]">Home</Link>
           <Link href="/about" className="hover:text-[#FFC059]">About us</Link>
           <Link href="/rooms" className="hover:text-[#FFC059]">Rooms</Link>
           <Link href="/events" className="hover:text-[#FFC059]">Events</Link>
           <Link href="/cuisines" className="hover:text-[#FFC059]">Cuisines</Link>
           <Link href="/contact" className="hover:text-[#FFC059]">Contact us</Link>
         </nav>

        {/* SECTION 3 : Boutons d’action visibles uniquement sur desktop */}
<button className="bg-blue-700 text-white px-20 py-2 rounded-none hover:bg-blue-200 hover:text-black transition-colors duration-300">
  BOOK
</button>



      {/* SECTION 4 : Bouton burger pour le menu mobile (visible uniquement sur petit écran) */}
      <button
        className="md:hidden text-gray-700 z-20"
        onClick={() => setIsOpen(!isOpen)} // Inverse l’état du menu à chaque clic
      >
        {/* Affiche soit l’icône "X" si le menu est ouvert, soit "Menu" s'il est fermé */}
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* SECTION 5 : Menu mobile (affiché uniquement quand isOpen est true) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-6 md:hidden z-10 text-black">
          
          {/* Liens de navigation version mobile */}
          <a href="#" className="hover:text-[#FFC059]">About us</a>
        <a href="#" className="hover:text-[#FFC059]">Rooms</a>
        <a href="#" className="hover:text-[#FFC059]">Events</a>
        <a href="#" className="hover:text-[#FFC059]">cuisines</a>
        <a href="#" className="hover:text-[#FFC059]">contact us</a>
          {/* Bouton de connexion en version mobile, visible ici contrairement au desktop */}
          <button className="flex items-center gap-2 text-black px-3 py-2 rounded w-full border border-gray-200">
            <Lock size={16} />
            Login
          </button>

          {/* Bouton Get Started en plein écran mobile */}
          <button className="bg-[#FFC059] text-black px-3 py-2 rounded w-full text-center">
            Get Started
          </button>
        </div>
      )}

</div>





</header>
)

}
