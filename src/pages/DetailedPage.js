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
import {HiMenuAlt3} from 'react-icons/hi';
import {BiShare} from 'react-icons/bi';
import {AiOutlineScissor} from 'react-icons/ai';
import ReactPlayer from 'react-player'
import Categories from '../components/Categories';
import DetailSnippet from '../components/DetailSnippet';
import Comment from '../components/Comment';
import UserInfo from '../components/UserInfo';


const DetailedPage = ({visible}) => {
    const[sidebar,setSidebar]= useState(true);
    const[video,setVideo]=useState({});
    const[openModal,setOpenModal]=useState(false);
    const [like,setLike]= useState({
      like:false,
      disLike:false
    })
    const {id}= useParams();
    useEffect(()=>{
      const data = videoData.filter((item)=>(
        item.id === id
      ))
    setVideo(data[0])
    },[id]);
    const likeClick=()=>{
      setLike({...like,like:!like.like,disLike:false})
    }
    const dislikeClick =()=>{
      setLike({...like,like:false,disLike:!like.disLike})
    }
 const openModalClicked = ()=>{
  setOpenModal(!openModal)
 }
  return (
    <div className='detailContainer'>
      {
        openModal && <UserInfo/>
      }
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
       height={620}
       controls={true}
        />
        <h3>{video?.title}</h3>
        <div className='detailTagBar'>
          <div className='tagLeftSide'>
          <img src={video?.thumbnail} alt='owner profile'/>
          <div className='nameSection'>
            <span>
            <p>{video?.owner}</p>
            {video?.verified && <MdGppGood size={20} color="rgba(255,255,255,0.2)"/>}
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
          <p>{video?.views} views</p>
          <p>{video?.duration}</p>
          </span>
          <h5>{video?.description}</h5>
        </div>
       
          </div>
      
        </div>
   <div className='detailLeftBottom'>
   <div className='tags'>
          <p>Tags</p>
          <div className='tagsContent'>
          {video?.category?.map((tag,index)=>(
            <p key={index}>
              {tag} ,
            </p>
          ))}
          </div>
        
        </div>
        <div className='commentLength'>
          {/* <p>{video?.comments.length} Comments</p> */}
            <HiMenuAlt3 size={20} color="white"/>
            <p className='commentLengthP'>Sort by</p>
        </div>
        <div className='addComment'>
        <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo' alt='user profile'/>
        <input type='text' placeholder="Add a comment..."/>
        </div>
        <div>
          {
            video?.comments?.map((item,index)=>(
              <Comment 
              key={index}
              img='https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo'
              name={item.name}
              duration={item.time}
              comment={item.comment}
              replies={item.replies}
              likes={item.likes}
              />
            ))
          }
        </div>
   </div>
       </div>
       <div className='detailRight'>
<Categories/>
<div className='detailVideos'>
{
  videoData.map((item)=>(
    
      item.id != video.id ? ( 
        <DetailSnippet
        key={item.id}
        img={item.thumbnail}
        title={item.title}
        owner={item.owner}
        views={item.views}
        duration={item.duration}
        id={item.id}
        />):('')
    
   
  ))
}
</div>
       </div>
        </div>
        </div>
  )
}

export default DetailedPage