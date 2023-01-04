import React from 'react';
import "../assets/styles/Body.css";

const Catgory = ({name,active,onClick}) => {
  return (
    <div className={active ===name ?"activeCat":"categoryContainer"} onClick={onClick}>
      <p>{name}</p>
    </div>
  )
}

export default Catgory

