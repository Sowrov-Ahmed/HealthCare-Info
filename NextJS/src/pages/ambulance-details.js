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

function AD() {

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













      
      <h1 className="text-4xl font-bold text-center">Ambulance Details</h1>
        
        <div className='bg-[#F5F5F5] mx-auto p-20 px-36'>
        <table className=''>
          
          
        
        <h2 className='text-2xl font-semibold'>Cardiac Ambulance</h2>
        
        <tr>
          <td>1.</td>
          <td>Gulshan, Banani, Baridhara, DOHS (Baridhara), Radission Hotel (Return Trip)</td>
          <td className="">3500</td>
          <td>01712478543</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Airport Area (beyond Khilkhet Rail Gate), Mohakhali (beyond bridge), DOHS (Mohakhali), Cantonment, DOHS<div>(Cantonment), Kafrul, Badda, Tejgaon, Nakhalpara, Old Airport Area, Uttara (Return trip)</div> </td>
          <td>5000</td>
          <td>01798541265</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Rest of the City</td>
          <td>7500</td>
          <td>01778456324</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Areas Outside Dhaka (upto a distance of 50 km – return trip)</td>
          <td>15000</td>
          <td>01674563258</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Areas Outside Dhaka (upto a distance of 50 km – 100 km - return trip)</td>
          <td>20000</td>
          <td>01774563214</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>Areas Outside Dhaka (upto a distance of 100 km – 150 km - return trip)</td>
          <td>30000</td>
          <td>01787456329</td>
        </tr>
        <tr>
          <td>7.</td>
          <td>Areas Outside Dhaka (upto a distance of 150 km – 200 km - return trip)</td>
          <td>40000</td>
          <td>01874521598</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>Areas Outside Dhaka (upto a distance of more than 200 km - return trip)</td>
          <td>50000</td>
          <td>0161021475</td>
        </tr>
      </table>


      <h2 className='text-2xl font-semibold mt-20'>Normal Ambulance</h2>
      <table>
        
          
        
        <tr>
          <td>1.</td>
          <td>Gulshan, Banani, Baridhara, DOHS (Baridhara), Radisson Hotel (Return Trip)</td>
          <td>2000</td>
          <td>01812047569</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Airport Area (beyond Khilkhet Rail Gate), Mohakhali (beyond bridge), DOHS (Mohakhali), Cantonment, DOHS <div>(Cantonment), Kafrul, Badda, Tejgaon, Nakhalpara, Old Airport Area, Uttara (Return trip)</div>
          </td>
          <td>3000</td>
          <td>01784563214</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Rest of the City</td>
          <td>5000</td>
          <td>01645123042</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Areas Outside Dhaka (upto a distance of 50 km – return trip)</td>
          <td>10000</td>
          <td>01784563214</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Areas Outside Dhaka (upto a distance of 50 km – 100 km - return trip)</td>
          <td>15000</td>
          <td>01798563214</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>Areas Outside Dhaka (upto a distance of 100 km – 150 km - return trip)</td>
          <td>18000</td>
          <td>01645214785</td>
        </tr>
        <tr>
          <td>7.</td>
          <td>Areas Outside Dhaka (upto a distance of 150 km – 200 km - return trip)</td>
          <td>22000</td>
          <td>01654127412</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>Areas Outside Dhaka (upto a distance of more than 200 km - return trip)</td>
          <td>25000</td>
          <td>01701232015</td>
        </tr>
      </table>

        </div>
      

    </Fragment >
  )

}
export default AD;