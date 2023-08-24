import React, { useState, useContext } from 'react';
import Category from './Category';
import VideoData from '../data/videoData';
import { CatContext } from '../context/catContext';
import { dataContext } from '../context/displayDataContext';
const Categories = ({ home }) => {
  const [cat, setCat] = useState('');
  const { setCatName } = useContext(CatContext);
  const { data} = useContext(dataContext);
  let categories = [];
  // let dataArray = [];
  VideoData.forEach(function (item) {
    categories.push(...item.category);
    // if (item.category.includes(catName)) {
    //   dataArray.push(item);
    // }
  
  });
  const allCats = new Set(categories);
  const CatsArray = [...allCats];
  const handleClick = (name) => {
    setCat(name);
    setCatName(name);
    // if(dataArray.length !== 0){
    //   setData(dataArray);
    // }
    
  };
 

   
    console.log('data info', data);


  return (
    <div className={home ? 'categoriesContainer' : 'sideCategories'}>
      <Category name='All' onClick={() => handleClick('All')} active={cat} />
      {CatsArray.map((item, index) => (
        <Category
          name={item}
          key={index}
          onClick={() => {
            handleClick(item);

          }}
          active={cat}
        />
      ))}
    </div>
  );
};

export default Categories;
