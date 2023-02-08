import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineSetting} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci';
import {IoMdMic, IoIosNotificationsOutline} from 'react-icons/io';
import {RiVideoUploadLine} from 'react-icons/ri';
import VideoData from '../data/videoData';
import { useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';

import '../assets/styles/Navbar.css';

const Notifications=( {setNot})=>{
    const navigate= useNavigate()
   
    return (
        <>
         <div className='notModal' onClick={()=>setNot(false)}>
         </div>
              <div className='notificationsContainer'>
            <div className='notHeader'>
            <p>Notifications</p>
            <AiOutlineSetting size={25}/>
            </div>
           <div className='notContent'>
            {VideoData.map((not,index)=>(
                <div key={index} 
                className='notContentItem' 
                onClick={()=>navigate(`/detail/${not.id}`)}>
                   <strong>&#8226;</strong>
                    <img src={not.thumbnail} alt="Notification "/>
                    <p>{not.title}</p>
                    <img src={not.thumbnail} alt="Notification"/>
                </div>
            ))}
               
           </div>
        </div>
       
        </>
       
      
    )
}
const Navbar = ({sidebar,setSidebar,setVisible,visible}) => {
    const[not,setNot]=useState(false);
    const[openModal,setOpenModal]=useState(false);
    const navigate = useNavigate()
    const openModalClicked = ()=>{
        setOpenModal(!openModal)
       }
  return (
    <div className='navbarContainer'>
           {
        openModal && <UserInfo/>
      }
        <div className='leftNavbar'>
        <AiOutlineMenu size={30} color="white" 
        onClick={()=>
        {
            setSidebar(!sidebar)
            setVisible(!visible)
        }} 
        className="menuIcon"
        />
     
       <img  className="logo" 
        src='https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg' 
        alt='Youtube Logo'
        onClick={()=>navigate('/')}
        />
      
      
        </div>
       
        <div className='middleNavbar'>
            <form>
                <input type="text" placeholder="Search"/>
                <button>
                    <CiSearch size={30} color="white"/>
                    <p className='searchHighlight'>Search</p>
                </button>
             <div className='micContainer'>
             <IoMdMic size={30} color="white" className='mic'/>
             <p className='micHighlight'>Search with Your Voice</p>
             </div>
             
            </form>
        </div>
        <div className='rightNavbar'>
            <div className='createContainer'>
            <RiVideoUploadLine size={30} color="white"  className='upload'/>
            <p className='create'>Create</p>
            </div>
       
        <div className='notifications' onClick={()=>setNot(!not)}>
        <IoIosNotificationsOutline size={30} color="white" className='not'/>
        <p className='notNumber'>9+</p>
        <p className='notHighlight'>Notification</p>
        </div>
        <div onClick={openModalClicked}>
            <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo' alt='user profile'/>
        </div>
        </div>
       {
        not && <Notifications
        setNot={setNot}
        />
       }
      
    </div>
  )
}

export default Navbar