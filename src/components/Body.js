import React,{useContext} from 'react';
import SnippetComponent from './SnippetComponent';
import '../assets/styles/Body.css';
import hoverVideo from '../assets/videos/talking.mp4';
import VideoData from '../data/videoData';
import { CatContext } from '../context/catContext';

const Body = () => {
    const {catName}=useContext(CatContext)
    const displayData= VideoData.find((item)=>(
       item.category.includes(catName)
    ));
  return (
    <div className='bodyContainer'>
        {VideoData.map((item)=>(
            <SnippetComponent
            title={item.title}
            thumbnail={item.thumbnail}
            owner={item.owner}
            views={item.views}
            duration={item.duration}
            video={hoverVideo}
            verified={item.verified}
            key={item.id}
            id={item.id}
            />
        ))}
     
    </div>
  )
}

export default Body