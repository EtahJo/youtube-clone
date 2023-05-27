import React, { useContext } from 'react';
import SnippetComponent from './SnippetComponent';
import '../assets/styles/Body.css';
import hoverVideo from '../assets/videos/talking.mp4';
import VideoData from '../data/videoData';
import { CatContext } from '../context/catContext';
import { dataContext } from '../context/displayDataContext';

const Body = () => {
  const { catName } = useContext(CatContext);
  const {data}=useContext(dataContext)
  if(data.length===0){
    return(<div>
      <h1>LOADING...</h1>
    </div>)
  }

  return (
    <div className='bodyContainer'>
      {catName === "All"?(
VideoData.map((item) => (
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
))
      ):(
        data.map((item) => (
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
        ))
      )}
      {}
    </div>
  );
};

export default Body;
