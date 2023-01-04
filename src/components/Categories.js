import React,{useState,useContext} from 'react';
import Category from './Category';
import VideoData from '../data/videoData';
import { CatContext } from '../context/catContext';
const Categories = () => {
   const[cat,setCat]=useState("");
   const{catName,setCatName}=useContext(CatContext);
    let categories =[];

    VideoData.forEach(function(item){
        categories.push(...item.category)
    })
   const allCats = new Set(categories);
   const CatsArray = [...allCats]
const handleClick=(name)=>{
    setCat(name);
    setCatName(name);
    console.log(catName);
}

  return (
    <div className='categoriesContainer'>
        <Category name="All" onClick={()=>handleClick("All")} active={cat}/>
        {CatsArray.map((item,index)=>(
            <Category name={item} key={index} onClick={()=>handleClick(item)} active={cat}/>
        ))}
    </div>
  )
}

export default Categories