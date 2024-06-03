import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import OverView from './Components/OverView';
import FloorPlan from './Components/FloorPlan';
import ProjectHighlights from './Components/ProjectHighlights';
import Amenities from './Components/Amenities';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import About from './Components/About';
import Footer from './Components/Footer';
import Form from './Components/Form';
import ScrollTracking from './ScrollTracking';

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const formTimeout = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(formTimeout);
  }, []);

  useEffect(() => {
    let formInterval;
    if (showForm) {
      formInterval = setInterval(() => {
        setShowForm(false);
        setTimeout(() => {
          setShowForm(true);
        }, 5000);
      }, 20000);
    }
    
    return () => clearInterval(formInterval);
  }, []);

  return (
    <>
      <ScrollTracking />
      <Header />
      <Banner />
      <OverView />
      <FloorPlan />
      <ProjectHighlights />
      <Amenities />
      <Gallery />
      <Location />
      <About />
      {showForm && <Form />}
      <Footer />
    </>
  );
}

export default App;
