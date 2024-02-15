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

function Ghq() {

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

















      <h1 className="text-4xl font-bold mb-4 text-center">General Health Queries</h1>
      <div >

        <div className='bg-[#F5F5F5] p-10 mb-4'>
          <h1 className="text-2xl font-semibold ">Dengue</h1>
          <p className="text-xl font-normal">There are no specific antiviral drugs to treat dengue infection.Acetaminophen or paracetamol can be taken to control muscle aches, pains, and fever. Non-steroidal anti-inflammatory drugs such as ibuprofen and aspirin should be avoided.Hospitalised dengue patients must be closely observed and their fluid intake carefully managed, according to strict guidelines.In countries where early detection and such medical care is available, the fatality rate from dengue has dropped to below 1%.The currently available vaccine is limited to people aged 9-45 years old who have had at least one previous episode of dengue virus infection.Several additional dengue vaccine candidates are under evaluation.The lack of treatment options increases the risk of people developing severe dengue, which is potentially fatal.

          </p>
        </div>

        <div className='bg-[#F5F5F5] p-10 mb-4'>
          <h1 className="text-2xl font-semibold ">Gastric</h1>
          <p className="text-xl font-normal">Upper endoscopy is a test that enables your doctor to examine your oesophagus, stomach and a small part of the small intestine. Upper endoscopy is also known as esophagogastroduodenoscopy or OGD. A thin and flexible tube, called an endoscope, is put into your mouth and gradually proceeded through the throat into the food pipe, stomach and intestines. At the end of the tube is a camera that enables your doctor to view your stomach and small intestine thoroughly.</p>
        </div>

        <div className='bg-[#F5F5F5] p-10 mb-4'>
          <h1 className="text-2xl font-semibold ">Diarrhea</h1>
          <p className="text-xl font-normal">Mild cases of acute diarrhea may resolve without treatment.For persistent or chronic diarrhea, a doctor will treat any underlying causes in addition to the symptoms of diarrhea.The sections below will discuss some possible treatment options in more detail.</p>
        </div>

        <div className='bg-[#F5F5F5] p-10 mb-4'>
          <h1 className="text-2xl font-semibold ">COVID-19</h1>
          <p className="text-xl font-normal">Some treatments might have side effects or interact with other medications you are taking. Ask a healthcare provider if medications to treat COVID-19 are right for you. If you do not have a healthcare provider, visit a Test to Treat location or contact your local community health center or health department.If you are hospitalized, your healthcare provider might use other types of treatments, depending on how sick you are. These could include medications to treat the virus, reduce an overactive immune response, or treat COVID-19 complications.

          </p>
        </div>

        <div className='bg-[#F5F5F5] p-10 mb-4'>
          <h1 className="text-2xl font-semibold ">Fever</h1>
          <p className="text-xl font-normal">A fever is a common sign of illness, but thats not necessarily a bad thing. In fact, fevers seem to play a key role in fighting infections. So should you treat a fever or let the fever run its course? Heres help making the call.These recommendations are for people who are generally healthy — for instance, those who are not immunocompromised or taking chemotherapy drugs and have not recently had surgery.The values listed in the table below are for temperatures taken with rectal and oral thermometers. These thermometers provide the most accurate measurement of core body temperature. Other types of thermometers, such as ear (tympanic membrane) or forehead (temporal artery) thermometers, although convenient, provide less accurate temperature measurements.</p>
        </div>

      </div>


    </Fragment>
  )

}
export default Ghq;