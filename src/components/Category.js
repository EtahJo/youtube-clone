import React from 'react';
import '../assets/styles/Body.css';

const Category = ({ name, active, onClick }) => {
  return (
    <div className={active === name ? 'activeCat' : 'categoryContainer'} onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default Category;
