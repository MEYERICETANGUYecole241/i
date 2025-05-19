import React from 'react'

export default function Contact_Us() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
    Contact Us
  </h1>
  <section className="bg-white py-6">
  <div className="max-w-4xl mx-auto px-4">
    
    <form className="bg-gray-300 p-8 rounded shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Name*" className="border-b p-2 outline-none" />
        <input type="text" placeholder="Surname*" className="border-b p-2 outline-none" />
        <input type="text" placeholder="City" className="border-b p-2 outline-none" />
        <input type="text" placeholder="Country" className="border-b p-2 outline-none" />
        <input type="tel" placeholder="Phone" className="border-b p-2 outline-none" />
        <input type="email" placeholder="Email*" className="border-b p-2 outline-none" />
      </div>

      <div className="mt-6">
        <textarea
          rows="4"
          placeholder="Message*"
          className="w-full border p-2 outline-none"
        ></textarea>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white px-10 py-2 hover:bg-blue-400 transition-colors duration-300">
          SEND
        </button>
      </div>
    </form>
  </div>
</section>

    </div>
  )
}
