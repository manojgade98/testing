import React, { useState, useRef, useEffect } from 'react';
import { FaRegBuilding, FaVectorSquare } from "react-icons/fa";
import { FaLocationDot, FaBed, FaKey, FaIndianRupeeSign } from "react-icons/fa6";
import { propertyData } from './DataJson';
import { FaRegFilePdf } from "react-icons/fa";
import Form from './Form'; 

function OverView() {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
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
    const toggleForm = () => {
        setShowForm(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='my-8' id='overview'>
            <h2 className="text-center text-xl font-bold mb-5">
                <span className="border-b-2 border-green-500">Overview</span>
            </h2>
            <h1 className="text-center text-4xl font-semibold mb-4 ">{propertyData.heading}</h1>
            <div className="my-10 mx-auto md:w-3/4 justify-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {Object.entries(propertyData.details).map(([key, value]) => (
                    <div className="flex md:items-center w-3/5 flex-col lg:flex-row" key={key}>
                        {getIconByKey(key)}
                        <div className='flex flex-col'>
                            <span className="text-lg font-bold">{value.title}</span>
                            <span>{value.description}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button 
                onClick={toggleForm}
                 className="mx-auto  bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                    <FaRegFilePdf className="inline-block mr-2 text-xl" />
                    Download Brochure
                </button>
            </div>
            {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
        </div>
    );
}

function getIconByKey(key) {
    switch (key) {
        case 'building':
            return <FaRegBuilding className="text-5xl text-green-500 mr-2" />;
        case 'location':
            return <FaLocationDot className="text-5xl text-green-500 mr-2" />;
        case 'bedrooms':
            return <FaBed className="text-5xl text-green-500 mr-2" />;
        case 'possession':
            return <FaKey className="text-5xl text-green-500 mr-2" />;
        case 'dimension':
            return <FaVectorSquare className="text-5xl text-green-500 mr-2" />;
        case 'price':
            return <FaIndianRupeeSign className="text-5xl text-green-500 mr-2" />;
        default:
            return null;
    }
}

export default OverView;
