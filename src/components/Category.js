import React,{useContext} from 'react';
import '../assets/styles/Body.css';
import { CatContext } from '../context/catContext';
import { dataContext } from '../context/displayDataContext';
import VideoData from '../data/videoData';

const Category = ({ name, active, onClick }) => {
  const {catName}= useContext(CatContext)
  const{ setData} = useContext(dataContext)
  let dataArray =[];
  const handleClick =()=>{
    VideoData.forEach(function(item){
      if(item.category.includes(catName)){
          dataArray.push(item)
      }
    })
    if(dataArray.length !== 0){
      setData(dataArray)
    }

  }
  return (
    <div className={active === name ? 'activeCat' : 'categoryContainer'} onClick={onClick}>
      <p onClick={handleClick}>{name}</p>
    </div>
  );
};

export default Category;
