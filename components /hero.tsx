import React from 'react';

export default function Header() {
  return (
    <>
     {/* Bannière image en fond */}
<header className="relative flex items-center justify-center bg-white">
  <img src="image.svg" alt="Bannière" className="max-h-full max-w-full object-contain" />
</header>

{/* Titre placé en dessous de l’image avec un écart */}
<section className="px-6 py-12 bg-white ">
  <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-20">
    About us
  </h1>
  
</section>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit dolor nihil sapiente repellendus mollitia dolorem, cum velit iste ex est officiis nisi asperiores recusandae fuga! Asperiores non corrupti eveniet.</p>

    </>
  );
}

      
    









  
