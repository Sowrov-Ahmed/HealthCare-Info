import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CarouselComponent from './components/Carousel';
import SessionCheck from './components/sessionCheck';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Session from './components/session';

const Home = () => {
  return (
    <>
      <Session />

      <div className='bg-gray-900 text-white'>
        <title>Home</title>
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/resize.png" alt="Logo" width={200} height={200} />
            </Link>
            <Link href="/" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Home</Link>
            <Link href="/dr-profile" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Doctor Profile</Link>
            <Link href="/ambulance-details" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Ambulance Details</Link>
            <Link href="/ghq" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">General Health Query</Link>
          </div>

          <div className="flex items-center">
            <Link href="logout" className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600">Logout</Link>
          </div>
        </div>
      </div>



















      <main >

        <div  className="bg-[url('/images/dlogo.jpg')] h-[750px] bg-cover">
         
          <div className="w-1/4">
            <h1 className="text-4xl font-bold mb-10 pt-40">provide an exceptional patient experience</h1>
            <p className="text-gray-600 text-2xl font-semibold">We prioritize your comfort and care, ensuring a seamless patient experience at every step. Our dedicated team goes above and beyond to provide personalized treatment, clear communication, and a supportive environment. Your well-being is our focus, guiding us to deliver exceptional healthcare with empathy and excellence.</p>

          </div>
        </div>


        
          <div className="flex mt-6 bg-[#F5F5F5] p-6 ">
              <div className= "w-2/3">
                <h1 className="text-4xl text-center font-bold">About Us</h1>
                <p className="text-2xl text-center">we are driven by a patient-centric approach, delivering exceptional medical care with compassion. With a history of excellence, our experienced professionals bring cutting-edge expertise to every treatment. We prioritize individual well-being, offering tailored solutions that span prevention to recovery. Through innovation and a commitment to quality, we empower healthier lives, making a difference in the communities we serve.</p>
              </div>
              <div>
                <Image src="/images/chiness.jpg" alt="Logo" width={500} height={300} />
            </div>
          </div>
        

        <div className="mt-6 bg-[#F5F5F5] p-6">
          <h1 className="text-4xl text-center font-bold">Gallery</h1>
          <div>
            <div  className="flex justify-center m-4 ">
             <div className="mx-2">
             <Image src="/images/gal1.jpg" alt="Logo" width={500} height={300} />

</div>

<div className="mx-2">
  <Image src="/images/gal2.jpg" alt="Logo" width={500} height={300} />

</div>

<div className="mx-2">
  <Image src="/images/gal3.jpg" alt="Logo" width={500} height={300} />

</div>
             </div>

           

            
          </div>
        </div>


        <div className="flex justify-center mt-4 bg-[#F5F5F5] p-6">
        <div className="mx-2  ">
              <Image src="/images/gal5.jpg" alt="Logo" width={500} height={300} />

            </div>

            <div className="mx-2">
              <Image src="/images/gal6.jpg" alt="Logo" width={500} height={300} />

            </div>
          
            <div className="mx-2">
              <Image src="/images/cute.jpg" alt="Logo" width={500} height={300} />

            </div>
        </div>

            <div className="mt-6 bg-[#F5F5F5] p-6">
              <h1 className="text-4xl text-center font-bold">why chose us </h1>

              
                <div className="text-2xl  font-medium">
                  <div >
                    <i ></i>
                  </div>
                  <div>
                    <p >Emphasize the specialized expertise and qualifications of your healthcare professionals. Highlight the credentials, experience, and areas of specialization of your doctors, nurses, therapists, and other medical staff.</p>
                  </div>
                </div>

                <div >




                  <div className="text-2xl  font-medium">
                    <p >Differentiate your health service provider by focusing on your patient-centered approach. Highlight how you prioritize patient well-being, comfort, and satisfaction throughout their healthcare journey. </p>
                  </div>
                </div>

                <div >

                  <div className="text-2xl  font-medium">
                    <p >Showcase any advanced technologies, state-of-the-art facilities, or cutting-edge treatments that set your health service provider apart.  </p>
                  </div>
                </div>
              </div>


            
          
        



        <div className="bg-[#F5F5F5] mt-8 p-8">
          <h1 className="text-4xl text-center font-bold">Our special doctors</h1>

          <div className="flex justify-center ">
            <div className="m-2">
              <Image src="/images/gal3.jpg" alt="Logo" width={500} height={300} />


            </div>

            <div className="m-2">
              <Image src="/images/gal2.jpg" alt="Logo" width={500} height={300} />


            </div>

            <div className="m-2">
              <Image src="/images/gal5.jpg" alt="Logo" width={500} height={300} />



            </div>
          </div>


        </div>









      </main >
    </>
  );
};

export default Home;
