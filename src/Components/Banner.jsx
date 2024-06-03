import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoCall } from "react-icons/io5";
import { bannerData } from "./DataJson";
import Form from "./Form";
import { initializeGTM, trackEvent } from "../ReactGA4";

const Banner = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    initializeGTM
    ();
  }, []);

  const toggleForm = (elementName) => {
    setShowForm((prevState) => !prevState);
    trackEvent("Click", { element: elementName });
  };

  const handleClickOutside = (event, elementName) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
      trackEvent("Click", { element: elementName });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (elementName) => {
    trackEvent("Click", { element: elementName });
  };

  return (
    <div className="relative">
      <img
        className="w-full md:h-[700px] bg-cover bg-center"
        src={bannerData.bgimage}
        alt="Banner"
      />
      <div className="hidden md:block absolute w-full md:w-96 md:m-1 top-1 left-0 p-4 text-black bg-white bg-opacity-90">
        <h2 className="text-md text-center font-bold">{bannerData.title}</h2>
        <h1 className="text-center text-xl font-bold">
          {bannerData.projectName}
        </h1>
        <p className="text-center">{bannerData.location}</p>
        <p className="text-center">{bannerData.developer}</p>
        <div className="mt-4">
          <p className="mb-1 text-center bg-gray-400 p-2">
            <span>
              {bannerData.detailsone} : {bannerData.landParcel}
            </span>
            <br />
            <span>
              {bannerData.detailstwo} : {bannerData.totalUnits}
            </span>
            <br />
            <span>
              {bannerData.detailsthree} : {bannerData.typology}
            </span>
            <br />
          </p>
          <div className="text-center effetGradient p-2 mt-2">
            {bannerData.highlights.map((highlight, index) => (
              <p key={index} className="mb-1">
                {highlight}
              </p>
            ))}
          </div>
          <div className="text-center effetGradient animate-bounceIn mt-2">
            <p className="mb-1 p-1">{bannerData.investmentOpportunity}</p>
          </div>
          <h3 className="mt-1 text-center font-normal">
            {bannerData.apartmentStarts}
          </h3>
          <h2 className="text-center font-medium text-xl">
            {" "}
            &#x20b9; {bannerData.startPrice} Onwards
          </h2>
          <div className="m-2">
            <button
              onClick={() => toggleForm("Enquiry Button")}
              className="text-white font-bold py-2 px-6 rounded effetGradient mx-auto block"
            >
              Enquiry Now
            </button>
          </div>
          <div className="mb-2 ">
            <h3 className="text-lg text-center font-semibold">
              Why you should consider <br /> {bannerData.projectName}?
            </h3>
            <ul className="list-disc list-inside">
              {bannerData.reasonsToConsider.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
          <div className="flex  flex-col md:flex-row justify-center gap-2 ">
            <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
              <Link className="flex flex-wrap" to={bannerData.whatsappLink} onClick={() => handleClick("WhatsApp Link")}>
                <IoLogoWhatsapp className="mr-2" size={24} />
                <span>WhatsApp</span>
              </Link>
            </button>
            <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
              <Link className="flex flex-wrap" to={bannerData.phoneLink} onClick={() => handleClick("Phone Link")}>
                <IoCall className="mr-2" size={24} />
                <span>{bannerData.phoneNumber}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div ref={formRef}>
          <Form onClose={() => toggleForm("Close Form")} />
        </div>
      )}
      <div className="md:hidden p-2">
        <h2 className="text-md text-center font-bold">{bannerData.title}</h2>
        <h2 className="text-center text-xl font-bold">
          {bannerData.projectName}
        </h2>
        <p className="text-center">{bannerData.location}</p>
        <p className="text-center">{bannerData.developer}</p>
        <div className="mt-4">
        <p className="mb-1 text-center bg-gray-400 p-2">
            <span>
              {bannerData.detailsone} : {bannerData.landParcel}
            </span>
            <br />
            <span>
              {bannerData.detailstwo} : {bannerData.totalUnits}
            </span>
            <br />
            <span>
              {bannerData.detailsthree} : {bannerData.typology}
            </span>
            <br />
          </p>
          <div className="text-center effetGradient p-2 mt-2">
            {bannerData.highlights.map((highlight, index) => (
              <p key={index} className="mb-1">
                {highlight}
              </p>
            ))}
          </div>
          <div className="text-center effetGradient animate-bounceIn mt-2">
            <p className="mb-1 effetGradient p-1">
              {bannerData.investmentOpportunity}
            </p>
          </div>
          <h3 className="mt-1 text-center font-normal">
            {bannerData.apartmentStarts}
          </h3>
          <h2 className="text-center font-medium text-xl">
            {" "}
            &#x20b9; {bannerData.startPrice} Onwards
          </h2>
          <div className="m-2">
            <button
              onClick={() => toggleForm("Enquiry Button")}
              className="text-white font-bold py-2 px-6 rounded effetGradient mx-auto block"
            >
              Enquiry Now
            </button>
          </div>
          <div className="mb-2 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold">
                Why you should consider <br /> {bannerData.projectName}?
              </h3>
              <ul className="list-disc list-inside text-left">
                {bannerData.reasonsToConsider.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row justify-center gap-2 ">
            <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
              <Link className="flex flex-wrap" to={bannerData.whatsappLink} onClick={() => handleClick("WhatsApp Link")}>
                <IoLogoWhatsapp className="mr-2" size={24} />
                <span>WhatsApp</span>
              </Link>
            </button>
            <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
              <Link className="flex flex-wrap" to={bannerData.phoneLink} onClick={() => handleClick("Phone Link")}>
                <IoCall className="mr-2" size={24} />
                <span>{bannerData.phoneNumber}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
