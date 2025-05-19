import React from 'react'

export default function Our_cuisines() {
  return (
    <div>
      <section className="px-6 py-6 bg-white mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
          Our Cuisines
        </h1>
      </section>

      <section className="px-6 py-6 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image à gauche – occupe 2/3 de l’espace */}
          <div className="w-full md:w-2/3">
            <img src="2.svg" alt="Room" className="w-full h-auto object-cover" />
          </div>
          
          {/* Texte à droite – occupe 1/3 de l’espace */}
         <div className="w-full md:w-1/3 text-right">
  <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">GASTRONOMY</h2>
  <p className="text-gray-700 mb-6 leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit dolor nihil sapiente repellendus mollitia
    dolorem, cum velit iste ex est officiis nisi asperiores recusandae fuga! Asperiores non corrupti eveniet.
  </p>
  <div className="flex justify-center">
    <button className="bg-blue-700 text-white px-20 py-2 rounded-none hover:bg-blue-200 hover:text-black transition-colors duration-300">
      EXPLORE MORE
    </button>
  </div>
</div>


        </div>
      </section>
    </div>
  )
}
