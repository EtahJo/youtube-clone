import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import videoData from '../data/videoData'
import '../assets/styles/detailPage.css';
import {MdGppGood, MdOutlinePlaylistAdd} from 'react-icons/md';
import {BsHandThumbsUp, 
  BsFillHandThumbsUpFill,
  BsHandThumbsDown,
  BsHandThumbsDownFill
} from 'react-icons/bs';
import {BiShare} from 'react-icons/bi';
import {AiOutlineScissor} from 'react-icons/ai';
import ReactPlayer from 'react-player'
import Categories from '../components/Categories';
import DetailSnippet from '../components/DetailSnippet';
const DetailedPage = ({visible}) => {
    const[sidebar,setSidebar]= useState(true);
    const[video,setVideo]=useState({});
    const [like,setLike]= useState({
      like:false,
      disLike:false
    })
    // const[]=useState(false)
    const {id}= useParams();
    console.log(id)
    useEffect(()=>{
      const data = videoData.filter((item)=>(
        item.id === id
      ))
    setVideo(data[0])
    },[]);
    const likeClick=()=>{
      setLike({...like,like:!like.like,disLike:false})
    }
    const dislikeClick =()=>{
      setLike({...like,like:false,disLike:!like.disLike})
    }

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
          <div className='tagLeftSide'>
          <img src={video?.thumbnail} alt='owner profile'/>
          <div>
            <span>
            <p>{video?.owner}</p>
            {video?.verified && <MdGppGood size={30} color="white"/>}
            </span>
            <p>{video?.subscribers} subscribers</p>
          </div>
          <button className='subscribe'>Subscribe</button>
          </div>
          <div className='tagRightSide'>
            <div className='likeContainer'>
              <button onClick={likeClick}> {like.like?
              <BsFillHandThumbsUpFill size={20} color="white"/>:
              <BsHandThumbsUp size={20} color="white" />
              }</button>
              <p>{video?.likes}</p>
              <button onClick={dislikeClick}>
              {like.disLike?
              <BsHandThumbsDownFill size={20} color="white"/>:
              <BsHandThumbsDown size={20} color="white" />
              }
              </button>
              </div>
            <button className='share'>
              <p>Share</p>
              <BiShare size={30} color='white'/>
            </button>
            {/* <button>Download</button> */}
            <button className='share'>
              <AiOutlineScissor size={20} color="white"/>
              <p> Clip</p>
              </button>
            <button className='share'>
              <MdOutlinePlaylistAdd size={20} color='white'/>
              <p>Save</p>
            </button>
            <button className='share'> &#8226; &#8226; &#8226;</button>
          </div>
        </div>
        <div className='detailDescription'>
          <span>
          <p>{video?.views}</p>
          <p>{video?.duration}</p>
          </span>
          <p>{video?.description}</p>
        </div>
       
          </div>
      
        </div>
   <div className='detailLeftBottom'>
   <div className='tags'>
          <p>Tags</p>
          {video?.category?.map((tag,index)=>(
            <p key={index}>
              {tag}
            </p>
          ))}
        </div>
   </div>
       </div>
       <div className='detailRight'>
<Categories/>
<div className='detailVideos'>
{
  videoData.map((item,index)=>(
    <DetailSnippet/>
  ))
}
</div>
       </div>
        </div>
        </div>
  )
}

export default DetailedPage