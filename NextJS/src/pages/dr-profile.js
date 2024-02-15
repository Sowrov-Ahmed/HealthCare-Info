import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CarouselComponent from './components/Carousel';
import SessionCheck from './components/sessionCheck';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Session from './components/session';
const { Fragment } = require("react");

function DrP() {

  return (
    <Fragment>
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
















      <h1 className="text-4xl text-center font-bold mb-4 ">Doctor Profile</h1>

      <main className=''>

        
        <div className=' grid grid-cols-3'>
        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'>Dr. Raihan Rabbani</h3>
          <h4 className='text-2xl font-bold'>Speciality : <span className='font-normal'>Senior Consultant, Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'>MBBS, FCPS, US Board Certified in Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01645217852</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'>Dr. Shihan Mahmud Redwanul Huq</h3>
          <h4 className='text-2xl font-bold'> Speciality : <span className='font-normal'>Associate Consultant, Internal Medicine & ICU</span></h4>
          <h4 className='text-2xl font-bold'> Degree : <span>MBBS, MRCP (UK), MRCPE, Fellowship in Intensive Care Medicine (India)</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>0168740126</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'>Dr. Tasnova Mahin</h3>
          <h4 className='text-2xl font-bold'> Speciality : <span className='font-normal'>Associate Consultant, Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'> Degree : <span className='font-normal'> MBBS, FCPS (Medicine), MRCP</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01741201536</span></h4>
        </div>
        </div>

        <div className='grid grid-cols-3'>
        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'>Dr. Jahangir Alam </h3>
          <h4 className='text-2xl font-bold'> Speciality : <span className='font-normal'>Senior Consultant, Internal Medicine and Diabetes</span></h4>
          <h4 className='text-2xl font-bold'> Degree : <span className='font-normal'>MBBS (DMC), MRCP (UK), FRCP (Edin)</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01874563210</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'> Prof. Dr. Md. Abu Bakar</h3>
          <h4 className='text-2xl font-bold'>Speciality : <span className='font-normal'>Senior Consultant - Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'>MBBS, FCPS (Internal Medicine), FACP (USA), FRCP (Edin)</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01789654123</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'>Dr. Pratik Dewan</h3>
          <h4 className='text-2xl font-bold'>Speciality : <span className='font-normal'>Consultant, Internal Medicine and Endocrinology</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'>MBBS, DEM, MD (Internal Medicine), BIRDEM Academy</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01732140122</span></h4>
        </div>

        </div>
        <div className='grid grid-cols-3'>
        <div className='bg-[#F5F5F5] m-4 p-2 '>
          <h3 className='text-2xl font-bold'>Dr. Deepankar Kumar Basak </h3>
          <h4 className='text-2xl font-bold'>Speciality : <span className='font-normal'>Consultant, Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'>MBBS (DMC), FCPS (Internal Medicine)</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01687456321</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'> Dr. Rozana Rouf</h3>
          <h4 className='text-2xl font-bold'>Speciality : <span className='font-normal'>Associate Consultant, Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'>MBBS, FCPS</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01745120358</span></h4>
        </div>

        <div className='bg-[#F5F5F5] m-4 p-2'>
          <h3 className='text-2xl font-bold'> Dr. Farzana Shumy</h3>
          <h4 className='text-2xl font-bold'> Speciality : <span className='font-normal'>Associate Consultant- Rheumatology and Internal Medicine</span></h4>
          <h4 className='text-2xl font-bold'>Degree : <span className='font-normal'> FCPS (Medicine), MRCP (UK), MD (Rheumatology)</span></h4>
          <h4 className='text-2xl font-bold'>Contact : <span className='font-normal'>01774569852</span></h4>
        </div>


        </div>

      </main>

    </Fragment>
  )

}
export default DrP;