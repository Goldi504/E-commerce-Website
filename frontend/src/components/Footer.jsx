// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             <div>
//                 <img src={assets.logo} className='mb-5 w-32 alt' alt="" />
//                 <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took gallery of type and scrambled it to make a type specimen book</p>
//             </div>
        
//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>
//         <div>
//             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>+1-212-456-7890</li>
//                 <li>contact@foreveryou.com</li>
//             </ul>
//         </div>
//          </div>
//           <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copylight 2025@ forever.com - All Right Reserved</p>

//     </div>
      
//     </div>
    
   
   

   
    
    
    
//   )
// }

// export default Footer
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10">
      <div className='grid gap-14 sm:grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm'>
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright © 2025 foreveryou.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

