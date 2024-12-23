import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterComponent from './components/router';
import { BrowserRouter } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <RouterComponent/>
  </BrowserRouter>
);


