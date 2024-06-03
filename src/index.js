import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import { formField } from "./Components/DataJson";

const tagManagerArgs = {
  gtmId: formField?.GtmId , 
};


TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/kolte-patil-lakeside-24">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
