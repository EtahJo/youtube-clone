import React,{useContext} from 'react';
import '../assets/styles/Body.css';
import { dataContext } from '../context/displayDataContext';
import VideoData from '../data/videoData';

const Category = ({ name, active, onClick }) => {
  const{setData}=useContext(dataContext);
  const filterData=(name)=>{
   const data= VideoData.find((item)=>item.category.includes(name));
  console.log(data)
  }

  return (
    <div className={active === name ? 'activeCat' : 'categoryContainer'} onClick={onClick}>
      <p onClick={filterData(name)}>{name}</p>
    </div>
  );
};

export default Category;
