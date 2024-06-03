import React, { useEffect } from 'react';
import { highlightsData } from './DataJson'
import debounce from 'lodash/debounce';
function ProjectHighlights() {
  useEffect(() => {
    const handleScroll = debounce(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scrollEvent',
        scrollDepth: window.scrollY,
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold mb-5 border-b-2 border-green-500 inline-block">Project Highlights</h2>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 lg:gap-5 ">
        {highlightsData.map((highlight, index) => (
          <div className="md:w-96 h-64 rounded shadow-lg bg-white transition duration-200  hover:translate-x-2" key={index}>
            <div className="p-4">
              <div className="col-md-4">
                <ul className="text-left1 text-justify projct-list">
                  {highlight.map((item, idx) => (
                    <li className="mb-3" key={idx}><span className="text-green-500 mr-2">&#10003;</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectHighlights;
