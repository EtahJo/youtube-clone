import React, { useState, useContext } from 'react';
import Category from './Category';
import VideoData from '../data/videoData';
import { CatContext } from '../context/catContext';
import { dataContext } from '../context/displayDataContext';
const Categories = ({ home }) => {
  const [cat, setCat] = useState('');
  const { catName,setCatName } = useContext(CatContext);
  const{data,setData}=useContext(dataContext);
  let categories = [];

  VideoData.forEach(function (item) {
    categories.push(...item.category);
  });
  const allCats = new Set(categories);
  const CatsArray = [...allCats];
  const handleClick = (name) => {
    setCat(name);
    setCatName(name);
  };
  let dataArray=[];
  const filterData=(name)=>{
  
  for(let i=0; i<VideoData.length; i++){
    if(VideoData[i].category.includes(catName)){
      dataArray.push(VideoData[i])
    }
  }
setData(dataArray)
  console.log("data info",data)
  }

  return (
    <div className={home ? 'categoriesContainer' : 'sideCategories'}>
      <Category name='All' onClick={() => handleClick('All')} active={cat} />
      {CatsArray.map((item, index) => (
        <Category 
        name={item} 
        key={index} 
        onClick={() =>{ 
          handleClick(item)
          filterData(item)
        }} 
        active={cat} />
      ))}
    </div>
  );
};

export default Categories;
