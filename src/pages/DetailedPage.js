import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import videoData from '../data/videoData'
import '../assets/styles/detailPage.css';
import {MdGppGood} from 'react-icons/md'
import ReactPlayer from 'react-player'
const DetailedPage = ({visible}) => {
    const[sidebar,setSidebar]= useState(true);
    const[video,setVideo]=useState({})
    // const[]=useState(false)
    const {id}= useParams();
    console.log(id)
    useEffect(()=>{
      const data = videoData.filter((item)=>(
        item.id === id
      ))
    setVideo(data[0])
    },[])
  return (
    <div className='detailContainer'>
            {visible &&  
            <div className='sideDetail'>
            <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        />
        <div className='sideClose'>
               
        </div>
        </div>
        }
       
      
        <div className='detailBody'>
       <div className='detailLeft'>
        <div className='detailLeftTop'>
          <div className='detailLeftTopBody'>
          <ReactPlayer
        url={video?.url}
        playing={true}
       width={1280}
       height={720}
        />
        <h3>{video?.title}</h3>
        <div className='detailTagBar'>
          <div>
          <img src={video?.thumbnail} alt='owner profile'/>
          <div>
            <span>
            <p>{video?.owner}</p>
            {video?.verified && <MdGppGood size={30} color="white"/>}
            </span>
           <button>Subscribe</button>

          </div>
          </div>
          <div>
            <button>{video?.views[0]+ video.views[1]}</button>
            <button>Share</button>
            <button>Download</button>
            <button>Clip</button>
            <button>Save</button>
            <button> &#8226; &#8226; &#8226;</button>
          </div>
        </div>
        <div className='detailDescription'>
          <p></p>
        </div>
          </div>
      
        </div>
   
       </div>
       <div className='detailRight'>

       </div>
        </div>
        </div>
  )
}

export default DetailedPage