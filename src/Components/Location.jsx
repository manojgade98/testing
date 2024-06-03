import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {locationData} from './DataJson'


function Location() {
  useEffect(() => {
    const handleScroll = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scrollEvent',
        scrollDepth: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <div className="text-center py-10" id='location'>
      <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">Virtual / Location</h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl p-5">
        <div className="flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">{locationData.virtualTour.heading}</h2>
          <img src={locationData.virtualTour.imageSrc} alt="Virtual" className="object-cover object-center w-full h-full rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">{locationData.locationMap.heading}</h2>
          <img src={locationData.locationMap.imageSrc} alt="Map" className="object-cover object-center w-full h-full rounded-lg shadow-md" />
        </div>
      </div>
      <div className="mt-8 mx-auto max-w-screen-xl p-5">
        <ol className="flex flex-wrap text-left justify-center">
          {locationData.nearbyLocations.map((location, index) => (
            <li key={index} className="w-full md:w-1/2 px-4 py-3 sm:px-0 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {location}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Location;
