import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './ReactGA4';
import { Events, animateScroll as scroll } from 'react-scroll';

const ScrollTracking = () => {
  const location = useLocation();

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log('Scrolling started...');
    });

    Events.scrollEvent.register('end', () => {
      console.log('Scrolling ended.');
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
    });
  }, [location.pathname]);

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
    trackEvent('Scroll Percentage', { percentage: scrollPercentage });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollTracking;
