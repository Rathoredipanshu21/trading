
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Contactfrom from "./Contactfrom";
import { NavLink } from "react-router-dom";
import img74 from '../../../public/Images/img74.jpg';
const ContactUs = () => {
  
  return (
    <div className="bg-gray-100">
     
      <div 
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${img74})`,
          }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 
       flex flex-col justify-center items-center ">
        <h1 className="lg:text-4xl text-3xl font-bold">Get in Touch with Us</h1>
        <p className="text-lg mt-2 mx-5">For inquiries about our cotton products, feel free to reach out</p>
      </div>
      </div>
      {/* Contact Info Section */}
      <div className="max-w-5xl mx-auto mt-10 px-6 grid md:grid-cols-3 gap-6 text-white">
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-center">
          
          <p className="mt-2 text-xl  ">Our Location</p>
          <p className="mt-1 ">
           Barkar pincode 713324
          </p>

        </div>
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold"> Contact</h3>
          <p className="mt-4 font-semibold  flex items-center">
            <FiPhoneCall className=" mr-2" />
            <strong className=" font-[Montserrat]">Call:</strong>
            <a
              href="tel:+919876543210"
              className="text-white hover:underline ml-1 hover:text-gray-300"
            >
              + 91 987 654 3210
            </a>
          </p>
          <p className="mt-2 font-semibold  flex flex-col items-center
           sm:flex-row sm:items-center text-center sm:text-left">
            <span className="flex items-center">
              <MdEmail className=" mr-2" />
              <strong className=" font-[Montserrat]">Email:</strong>
            </span>
            <a
              href="mailto:info@.com "
              className="mt-1 sm:mt-0 font-serif lg:ml-2  "
            >
              abc@gmail.com
            </a>
          </p>
        </div>
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold"> Working Hours</h3>
          <p className="mt-2">Mon - San: 9:00 AM - 9:00 PM</p>
        </div>
      </div>

    {/* Contact Form Section */}
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-200 shadow-lg rounded-xl mt-10">
       <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Get In Touch</h2>
       {/* <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
           <label className="block text-gray-800 font-semibold">What is your Interest?</label>
           <select className="w-full border-b-2 border-gray-800 p-2 focus:outline-none bg-gray-200">
             <option>Data Consulting and Services</option>
             <option>Manufacturing Solutions</option>
             <option>Textile & Cotton Products</option>
           </select>
         </div>
         <div className="md:col-span-2">
           <label className="block text-gray-800 font-semibold">Enter Your Message</label>
           <textarea className="w-full border-b-2 border-gray-800 p-2 focus:outline-none h-20 bg-gray-200"></textarea>
         </div>
         <div className="md:col-span-2 text-center">
           <button className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-700 transition">Submit</button>
         </div>
       </form> */}

       <Contactfrom />
     </div> 
     <div className="w-full h-80 mt-12 rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen
        ></iframe>
          </div> 
      {/* Call to Action Section */}
      <div className="text-center mt-10 p-6 bg-gray-900 text-white mb-10">
        <h2 className="text-2xl font-bold">Need Bulk Orders?</h2>
        <p className="mt-2">Get a custom quote for your business needs.</p>
         <NavLink to="/enquiry">
        <button className="mt-4 bg-white text-black px-6 py-2  ">Request a Quote</button>
        </NavLink>
      </div>
     

          <div className="w-full   flex flex-col items-center">
     
      
    
    
   </div>

    </div>
  );
};

export default ContactUs;
















