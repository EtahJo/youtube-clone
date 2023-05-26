import React from 'react';
import sidebarData from '../data/sidebarData';
import '../assets/styles/Sidebar.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerTop'>
        {sidebarData.map((item, index) => (
          <div key={index}>{item.footer && <p>{item.footer}</p>}</div>
        ))}
      </div>
      <div className='footerMiddle'>
        {sidebarData.map((item, index) => (
          <div key={index}>{item.footer2 && <p>{item.footer2}</p>}</div>
        ))}
      </div>
      <div className='footerBottom'>
        {sidebarData.map((item, index) => (
          <div key={index}>{item.right && <p>{item.right}</p>}</div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
