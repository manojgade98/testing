import { FaDumbbell, FaPersonRunning } from "react-icons/fa6";
import { GiTennisCourt, GiCctvCamera } from "react-icons/gi";
import { TbPlayFootball } from "react-icons/tb";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuParkingSquare } from "react-icons/lu";
import { PiChalkboard } from "react-icons/pi";

import logo from '../Assets/Images/kolte-patil-logo.jpeg';
import BannerImage from "../Assets/Images/Kolte-patil-lakeside-banner.webp";
import FloorPlan0 from '../Assets/Images/Kolte-patil-lakeside-floor-plan-2bhk.webp'
import FloorPlan1 from '../Assets/Images/Kolte-patil-lakeside-floor-plan-2.5bhk.webp'
import FloorPlan2 from '../Assets/Images/Kolte-patil-lakeside-floor-plan-3bhk.webp'
import Gallery1 from '../Assets/Images/Kolte-patil-lakeside-gallery1.webp';
import Gallery2 from '../Assets/Images/Kolte-patil-lakeside-gallery2.webp';
import Gallery3 from '../Assets/Images/Kolte-Patil-lakeside-gallery3.webp';
import Virtual from '../Assets/Images/Kolte-patil-lakeside-virtual.webp';
import map from '../Assets/Images/Kolte-pati-lakeside-map.webp';

const headerData = {
    propertylogo: logo,
    logoalt: "logo",
    pageUrl: "http://koltepatil.co/kolte-patil-lakeside-24/"
}
const formField = {
    GtmId:"GTM-KFJMWJ5",    
    gtmProjectName :"KoltePatilLakeside",
    EmailProjectName: "KOLTE PATIL LAKESIDE 24",
    allMails:["markctkind@gmail.com", "dhinesh@markanthony.co.in", "santhoshrajan@markanthony.co.in"]
}
const bannerData = {
    bgimage: BannerImage,
    title: "Booking Open",
    projectName: "KOLTE PATIL LAKESIDE 24",
    location: "At Kannur, North Bangalore",
    developer: "By Kolte Patil Developers Ltd.",
    detailsone: "Land Parcel",
    landParcel: "1.86 Acres",
    detailstwo: "Structure ",
    totalUnits: "B+G+24 Structure",
    detailsthree: "Total Units ",
    typology: "132 Units",
    highlights: [
        "Vaastu Compliant Homes",
        "Special Offers On Spot Bookings",
        "World Class Amenities"
    ],
    investmentOpportunity: "Excellent Investment Opportunity !!",
    apartmentStarts: "Luxurious 2, 2.5 & 3 BHK Homes Starts",
    startPrice: "87 Lacs* Onwards",
    reasonsToConsider: [
      "Bhartiya Mall - 10 Mins",
"Euro School North Campus – 7 Mins",
"Manipal Hospital Hebbal – 25 Mins",
"Manyata Tech Park – 20 Mins",


    ],
    whatsappLink: "https://api.whatsapp.com/send?phone=+918431362126&text=Hi, I am interested in Sattva JP Nagar. Can you share me all details",
    phoneNumber: "+91-8951167688",
    phoneLink: "tel:89511 67688"
};

const propertyData = {
    "heading": "Kolte Patil Lakeside 24",
    "details": {
        "building": {
            "title": "Building",
            "description": "Luxury Apartments"
        },
        "location": {
            "title": "Location",
            "description": "At Kannur, North Bangalore"
        },
        "bedrooms": {
            "title": "Bedrooms",
            "description": "2, 2.5 & 3BHK"
        },
        "possession": {
            "title": "Possession",
            "description": "2028"
        },
        "dimension": {
            "title": "Dimension",
            "description": "1178 Sqft. to 1575 Sqft"
        },
        "price": {
            "title": "Price",
            "description": "₹ 87 Lacs*"
        }
    }
}


const floorPlans = [
   
    {
        type: "2BHK Apartment",
        area: "1178 - 1187 Sqft",
        price: "Starting ₹ 87 lac*",
        image:FloorPlan0
    }
    ,
    {
        type: "2.5BHK Apartment",
        area: "1260 - 1332 Sqft",
        price: "Starting ₹ 1.02 Cr*",
        image:FloorPlan1
    }
    ,
    {
        type: "3BHK Regular",
        area: "1513 - 1575 Sqft",
        price: "Starting ₹ 1.24 Cr*",
        image:FloorPlan2
    }
   

];

const highlightsData = [
    [
       " 90% open space/ High UDS",
        " Rooftop Swimming pool",
         "Full-fledged Club house",
         "Double Height entrance Lobby",
        " well-lit living spaces",
         "Modern kitchens"
    ],
    [
        "Lifestyle Club",
       "8ft Main Door Height",
        "Multipurpose Hall",
       "Smart home features",
       "Indoor Games Room",
       "Ample parking"
    ],
    [
        "Children's play area",
         "Quality Construction",
        "3 Tier Security",
        "Luxury Amenities",
         "Convenience Services",
         "Location Advantage"
    ]
];

const amenitiesData = [
    { icon: <FaDumbbell className="text-5xl" />, name: "Gym" },
    { icon: <FaPersonRunning className="text-5xl" />, name: "Jogging Track" },
    { icon: <GiTennisCourt className="text-5xl" />, name: "Multipurpose Court" },
    { icon: <TbPlayFootball className="text-5xl" />, name: "Kidsplay Area" },
    { icon: <PiChalkboard className="text-5xl" />, name: "Multipurpose Hall" },
    { icon: <LuParkingSquare className="text-5xl" />, name: "Parking" },
    { icon: <GiCctvCamera className="text-5xl" />, name: "CCTV Security" },
    { icon: <LiaSwimmingPoolSolid className="text-5xl" />, name: "Swimming Pool" }
  ];


  const galleryData = [
    { src: Gallery1, alt: "gallery-photo" },
    { src: Gallery2, alt: "gallery-photo" },
    { src: Gallery3, alt: "gallery-photo" }
];

const locationData = {
    virtualTour: {
      heading: "Virtual Tour",
      imageSrc: Virtual
    },
    locationMap: {
      heading: "Location Map",
      imageSrc: map
    },
    nearbyLocations: [
    
        "Bhartiya Mall - 10 Mins",
        "Euro School North Campus – 7 Mins",
        "Manipal Hospital Hebbal – 25 Mins",
        "Manyata Tech Park – 20 Mins",
        "RMZ Galleria Office Block - 20 Mins",
        "Yelahanka metro station – 14 Mins"
    ]
  };

const aboutData = {
    title: "About",
    content: [
        {
            heading: "Kolte Patil Lakeside 24 At Thanisandra Main Road, Bangalore",
            paragraph:"Embrace the epitome of luxury and tranquility at the Kolte Patil Lakeside, located off Hennur Road in Bangalore. Spread across 1.86 acres, these meticulously crafted apartments are adorned with top-notch fittings and fixtures, offering a lifestyle of opulence. Situated on the main road and facing a beautiful lake, the Kolte Patil Lakeside Hennur apartments offer a panoramic view of serene waters from the expansive windows and balconies, adding a touch of nature’s allure to your abode. The project offers a range of 2 BHK, 2.5 BHK, and 3 BHK apartments spanning 1178 - 1575 sqft. Its strategic location provides easy access to major IT parks, esteemed educational institutions, healthcare facilities, and shopping centers, making it an ideal choice for both working professionals and families. Experience the joy of lakeside living at Kolte Patil Lakeside, your dream home in Kolte Patil Bangalore awaits you. Also known as Kolte Patil Kannur, this project is a beacon of luxury living. Welcome to Lakeside 24, welcome home!",
            subpoints: [
               "Lakeside 24, nestled in the heart of North Bangalore, also known as Kolte Patil Bangalore. This high-rise paradise, with B+G+24 floors, is set amidst the lush greenery of Kannur, offering a stunning lake or garden view from each unit. With 90% open space, a rooftop pool, a state-of-the-art clubhouse, and a double-height entrance lobby, it redefines modern living. Each Vastu-compliant unit boasts wooden flooring in the master bedroom and an 8ft high main door. The Kolte Patil Lakeside 24 complex is equipped with an array of amenities including an EV charging station, a contemporary gymnasium, a dedicated area for children’s activities, and verdant parks. All these facilities are situated within a zone that prohibits the movement of vehicles, ensuring a safe and serene environment. Your dream home awaits you!"
            ],
        },
        {
            heading: "Location Adavantages:",
            paragraph: "Thrive in tranquility at Lakeside 24, a residential haven in Thanisandra, just off Hennur Road. This prime location Kolte Patil Kannur offers the best of both worlds - easy access to daily essentials like schools, hospitals, grocery stores, malls, ATMs, and banks all within easy reach. Kolte Patil Bangalore boasts excellent social infrastructure, ensuring a hassle-free lifestyle. 15 mins drive to one of the largest IT Hub of Bangalore Manyata Tech Park, this strategic location promises future value appreciation, making it a great investment. Enjoy the perfect blend of urban comfort and peaceful living at Kolte Patil Lakeside.",
         

        },
      
        {
            heading: "Amenities:",
            paragraph: "Indulge in a world of leisure and convenience at Kolte Patil Lakeside. The project boasts a plethora of amenities designed to elevate your lifestyle: WFH cubilcles, Indoor Games, Gym, Jumba, Yoga Room / Yoga Lawn, Toddlers Sandpit, Jogging Track & Outdoor Gym, Reflexology Park, Floral Garden, Outside sitting area with Charging points, Children’s play area, Pet Park, Herbal Garden, Palm Court, Open stage platform, BBQ Corner, Rooftop Swimming Pool, Rooftop Kids-Pool, Pool Deck, 100% Power Back up, Play field/ Multipurpose Lawn, Pergola with sitting",
           
            
        },
        {
            heading: "ADDITIONAL BENEFITS: ",
          
            subpoints: [
                "1. Spacious & Vaastu-compliant Apartments: Kolte Patil Lakeside offers a variety of spacious 2, 2.5, and 3 BHK apartments designed with Vaastu principles for a harmonious living environment.",
                "2. Prime Location: The project is nestled in the heart of Thanisandra, a vibrant neighborhood, and is well-connected to major areas of North Bangalore via its proximity to Hennur Road.",
                "3. Excellent Connectivity: Enjoy easy access to various parts of the city with its strategic location near Kannur Main Road",
                "4. Tranquil Surroundings with Lake Views (possible): Immerse yourself in a peaceful atmosphere with the possibility of serene lake views.",
                "5. Resort-like Amenities: Relax and unwind with a plethora of amenities including a swimming pool, gym, landscaped gardens, and more.",
                "6. Proximity to Everyday Essentials: Schools, hospitals, grocery stores, malls, ATMs, and banks are all conveniently located nearby.",
                "7. Promising Future Value Appreciation: The project's strategic location holds potential for future growth in property value.",
                "8. Peaceful Living in a Vibrant City: Experience a perfect blend of tranquility amidst the city's vibrancy.",
                "9. Well-appointed Interiors with Ample Natural Light: The apartments boast well-designed layouts and ample natural light for a bright and airy feel.",
                "10. Security and Property Management Services: Benefit from the peace of mind provided by security services and professional property management."
                
            ]
            
        },
    ]
};

const footerData ={
    agentrera : "",
    projectrera :"Project RERA – PRM/KA/RERA/1251/446/PR/060324/006667",
    disclaimer : "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may share data with RERA registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",

}

export { headerData,formField, bannerData, propertyData, floorPlans, highlightsData, amenitiesData, galleryData, locationData, aboutData, footerData };
