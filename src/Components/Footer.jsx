import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { footerData } from './DataJson';
import { bannerData } from './DataJson';
import Form from './Form'; 

function Footer() {
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
            <div className="text-center py-5">
                <div className='mx-auto max-w-screen-xl  p-5'>
                    <h4 className="text-lg font-semibold mb-6">{footerData.agentrera}</h4>
                    <h4 className="text-lg font-semibold mb-6">{footerData.projectrera}</h4>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        <strong>Disclaimer : </strong>{footerData.disclaimer}
                    </p>
                </div>
            </div>
            {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
            <div className="lg:hidden bg-green-600 p-1 fixed bottom-0 w-full">
                <nav className="flex justify-between items-center justify-items-center">
                    <div onClick={toggleForm} className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md">
                        Email
                    </div>|
                    <Link to={bannerData.whatsappLink} className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md">
                        WhatsApp
                    </Link>|
                    <Link to={bannerData.phoneLink} className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md">
                        Call Us
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Footer;
