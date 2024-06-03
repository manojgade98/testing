import React, { useState, useRef, useEffect } from 'react';
import {floorPlans } from './DataJson'
import Form from './Form'; 

function FloorPlan() {
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
        <div>
            <section className="py-20" id='price'>
                <h2 className="text-center text-xl font-bold mb-5">
                    <span className="border-b-2 border-green-500">Floor Plan</span>
                </h2>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
                    {floorPlans.map((plan, index) => (
                        <article key={index} className="flex flex-col justify-between h-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200  hover:translate-y-2">
                            <img className="h-48 w-full object-cover shadow-md rounded-t-lg blur-sm" alt="featured image" src={plan.image} />
                            <div className="p-4">
                                <p className="mb-3 text-md font-medium text-green-500">{plan.type}</p>
                                <p className="mb-3 text-md font-medium text-gray-800">Area: {plan.area}</p>
                                <p className="mb-4 text-2xl font-medium text-gray-800">{plan.price}</p>
                                <div className="m-4">
                                    <button 
                                    onClick={toggleForm}
                                    className="text-white font-bold py-3 px-6 rounded effetGradient mx-auto block">Enquiry Now</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
        </div>
    );
}

export default FloorPlan;
