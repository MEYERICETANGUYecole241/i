import { Divide } from 'lucide-react'
import React from 'react'

export default function Our_events() {
  return (

    
   <section className="px-6 py-12 bg-white mt-8">

      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-20">
    Our Events
  </h1>


  <div className="flex flex-col md:flex-row md:gap-x-6 justify-between">
    
    <div className="w-full md:w-1/3">
  <img src="1.svg" alt="Room 1" className="w-full h-auto object-cover" />
  
  {/* Contenu textuel centré */}
  <div className="text-center mt-4">
    <h4 className="text-lg font-semibold">Cocktails & Bites</h4>
    <p className="text-sm text-gray-600">RIVERSIDE VALENCIA</p>
  </div>
</div>


    <div className="w-full md:w-1/3">
  <img src="évènements_2.svg" alt="Room 1" className="w-full h-auto object-cover" />
  
  {/* Contenu textuel centré */}
  <div className="text-center mt-4">
    <h4 className="text-lg font-semibold">Weekends Brunch</h4>
    <p className="text-sm text-gray-600">RIVERSIDE MALAGIA</p>
  </div>
</div>


    <div className="w-full md:w-1/3">
  <img src="évènements_3.svg" alt="Room 1" className="w-full h-auto object-cover" />
  
  {/* Contenu textuel centré */}
  <div className="text-center mt-4">
    <h4 className="text-lg font-semibold">Piano Night</h4>
    <p className="text-sm text-gray-600">RIVERSIDE ATOCHA</p>
  </div>
</div>

 </div>


<div className="flex justify-center mt-6">
  <button className="bg-blue-700 text-white px-20 py-2 rounded-none hover:bg-blue-200 hover:text-black transition-colors duration-300">
    BOOK
  </button>
</div>
</section>




    
   
    
    
  )
}
