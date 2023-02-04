import React,{useState} from 'react'
import {
    BsHandThumbsUp, 
  BsFillHandThumbsUpFill,
  BsHandThumbsDown,
  BsHandThumbsDownFill
} from 'react-icons/bs';
import {
    IoMdArrowDropdown,
    IoMdArrowDropup
} from 'react-icons/io'


const Comment = ({img,name,duration,comment,replies,children}) => {
    const[reply,setReply]=useState(false);
    const [like,setLike]=useState(false);
    const[dislike,setDislike]=useState(false);
    const likeClick=()=>{
        setLike(!like)
        setDislike(false)
      }
      const dislikeClick =()=>{
        setLike(!dislike)
        setLike(false)
      }
      const replyClick=()=>{
        setReply(!reply)
      }
  return (
    <div className='commentContainer'>
        <img src={img} alt="profile"/>
        <div>
            <span>
                <p>{name}</p>
                <p>{duration}</p>
            </span>
            <p>{comment}</p>
            <span>
                <button onClick={likeClick}>
                {!like ? 
            <BsHandThumbsUp size={20} color='white' />:
            <BsFillHandThumbsUpFill size={20} color='white'/>}
                </button>
            <button onClick={dislikeClick}>
            {!dislike? 
            <BsHandThumbsDown size={20} color="white"/>:
             <BsHandThumbsDownFill size={20} color="white"/>}
            </button>
           
             <p onClick={replyClick}>Reply</p>
            </span>
            <span>
                {reply ? 
                <IoMdArrowDropdown size={20} color='white'/>:
                 <IoMdArrowDropup size={20} color='white'/>}
                 <img src={img} alt='profile'/>
                 <p>&#8226;</p>
                 <p>{replies?.length}</p>
            </span>
            <div>
                {
                    reply && replies ? 
                    <div>
                       {children}
                    </div>:''
                }
            </div>
        </div>
    </div>
  )
}

export default Comment