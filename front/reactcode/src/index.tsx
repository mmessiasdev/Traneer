import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";

// import AOS from 'aos';
// import '../node_modules/aos/dist/aos.css';
// AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);