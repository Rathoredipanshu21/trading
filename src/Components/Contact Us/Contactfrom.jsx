import React from 'react'

const Contactfrom = () => {
  return (
    <div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div>
           <label className="block text-gray-800 font-semibold">Full Name *</label>
           <input type="text" className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200" />
         </div>
         <div>
           <label className="block text-gray-800 font-semibold">Email *</label>
           <input type="email" className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200" />
         </div>
         <div>
           <label className="block text-gray-800 font-semibold">Phone No *</label>
           <input type="text" className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200" />
         </div>
         <div>
           <label className="block text-gray-800 font-semibold">City *</label>
           <input type="text" className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200" />
         </div>
         <div>
           <label className="block text-gray-800 font-semibold">Postal Code *</label>
           <input type="text" className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200" />
         </div>
         <div>
  <label className="block text-gray-800 font-semibold">What is your area of interest?</label>
  <select className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200">
    <option>Cotton Yarn & Fabric</option>
    <option>Ready-Made Garments Manufacturing</option>
    <option>Textile Machinery & Equipment</option>
    <option>Cotton Farming & Processing</option>
    <option>Home Textiles & Furnishings</option>
  </select>
</div>

         <div className="md:col-span-2">
           <label className="block text-gray-800 font-semibold">Enter Your Message</label>
           <textarea className="w-full border-b-2 border-gray-800 p-2 focus:outline-none h-20 bg-gray-200"></textarea>
         </div>
         <div className="md:col-span-2 text-center">
           <button className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-700 transition">Submit</button>
         </div>
       </form>
    </div>
  )
}

export default Contactfrom
