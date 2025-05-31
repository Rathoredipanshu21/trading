import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
  
  import Contactfrom from "./Contactfrom";
  const ContactUsPage = () => {
    return (
      <>
        <div className="bg-gray-200 py-12 overflow-x-hidden  font-serif  mt-10">
          <div className="mx-auto px-6 md:px-12">
            <h1 className="text-2xl md:text-5xl font-bold text-center text-[#0d2451] mb-4 lg:mb-10">
              Get In Touch With Us
            </h1>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div>
                  <Contactfrom />
                </div>
              </div>
            
  
  
  
  
  <div className="bg-[#0d2451] p-4 sm:p-8 rounded-lg shadow-2xl text-white ">
    
        <div className="p-5 sm:p-8 bg-white text-black rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#0d2451]">
            Our Contact Info
          </h2>
  
          <div className="border-b border-gray-300 pb-4 mb-4 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0d2451]">Our Address</h3>
            <p className="text-gray-700 text-sm sm:text-base">Bypass Road, Khemnichak, Near Vishal Mega Mart, Patna-27</p>
          </div>
  
          
          <div className="border-b border-gray-300 pb-4 mb-4 text-center sm:text-left">
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0d2451]">Contact Us</h3>
    
    <p className="flex items-center justify-center sm:justify-start space-x-2">
      <i className="ri-phone-fill text-[#0d2451]"></i>
      <a href="tel:+916203433616" className="text-blue-500 hover:text-blue-700 text-sm sm:text-base">
        +91 620 343 3616
      </a>
    </p>
    
    <p className="flex items-center justify-center sm:justify-start space-x-2">
      <i className="ri-phone-fill text-[#0d2451]"></i>
      <a href="tel:+918084827897" className="text-blue-500 hover:text-blue-700 text-sm sm:text-base">
        +91 808 482 7897
      </a>
    </p>
  
    <p>
              <i class="ri-phone-fill"></i>{" "}
                <a href="tel:+918789941951" className="text-blue-400">
                  +91 878 994 1951
                </a>
              </p>
              <p>
              <i class="ri-phone-fill"></i>{" "}
                <a href="tel:+919162570799" className="text-blue-400">
                  +91 916 257 0799
                </a>
              </p>
  
  
            
            <p className="text-sm sm:text-base">
              Email:{" "}
              <a href="mailto:jpsgroupofinstitutionaltrust@gmail.com" className="text-blue-500 hover:text-blue-700">
                jpsgroupofinstitutionaltrust@gmail.com
              </a>
            </p>
            </div>  
  
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#0d2451]">Follow us on Social Media</h3>
            <div className="flex justify-center space-x-4 text-lg sm:text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#4267B2] transition duration-300">
                <FaFacebookF size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1DA1F2] transition duration-300">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C13584] transition duration-300">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition duration-300">
                <FaLinkedinIn size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
            </div>
  
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border-4 border-[#0d2451] mt-10">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.31472089903!2d77.2167218!3d28.6448005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd69b9e43f7b%3A0x4b2ef5f0b3e10eeb!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1647584798845!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ContactUsPage;