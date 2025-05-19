import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';


export default function Footer() {
  return (
    // Conteneur principal du footer avec fond bleu foncé et texte blanc
    
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      
      {/* Titre centré : RIVERSIDE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">RIVERSIDE</h1>
      </div>

      <div className=" flex justify-between  items-center w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 px-8 py-10 text-center md:text-left">
  
  
  {/* Colonne About */}
  <div>
    <h2 className="text-xl font-semibold mb-4 text-white">About</h2>
    <ul className="space-y-2 text-gray-300">
      <li>About Us</li>
      <li>Careers</li>
      <li>Contact Us</li>
    </ul>
  </div>

  {/* Colonne Reservations */}
  <div>
    <h2 className="text-xl font-semibold  text-white">Reservations</h2>
    <ul className="space-y-2 text-gray-300">
      <li>Request an invoice</li>
      <li>Find a reservation</li>
      <li>Email Preferences</li>
    </ul>
  </div>

  {/* Colonne News */}
  <div>
    <h2 className="text-xl font-semibold text-white">News</h2>
    <ul className="space-y-2 text-gray-300">
      <li>Press Room</li>
      <li>New Openings</li>
      <li>Magazine</li>
      <li>Newsletter</li>
    </ul>
  </div>
</div>


      {/* Réseaux sociaux en bas */}
      <div className="flex justify-center space-x-6 mt-10 text-white text-2xl">
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaYoutube /></a>
      <a href="#"><FaFacebook/></a>
    </div>

    {/* Ligne de séparation blanche */}
<hr className="border-t border-white opacity-30 my-6 w-3/4 mx-auto" />

      {/* Mentions légales */}
      <div className="text-center text-sm text-gray-300 mt-6 px-4">
        <p className="mb-1">Legal Notice · Privacy Policy · Cookie Preferences · Cookie Accessibility Policy</p>
        <p>Riverside Hotel 1997–2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
