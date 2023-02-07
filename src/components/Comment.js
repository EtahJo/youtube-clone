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


const Comment = ({img,name,duration,comment,replies,children,likes}) => {
    const[reply,setReply]=useState(false);
    const [like,setLike]=useState(false);
    const[dislike,setDislike]=useState(false);
    const likeClick=()=>{
        setLike(!like)
        setDislike(false)
      }
      const dislikeClick =()=>{
        setDislike(!dislike)
        setLike(false)
      }
      const replyClick=()=>{
        setReply(!reply)
      }
  return (
    <div className='commentContainer'>
        <img src={img} alt="profile"/>
        <div className='commentContainerContent'>
            <span>
                <p>{name}</p>
                <p>{duration}</p>
            </span>
            <p className='theComment'>{comment}</p>
            <span>
                <button onClick={likeClick}>
                {!like ? 
            <BsHandThumbsUp size={20} color='white' />:
            <BsFillHandThumbsUpFill size={20} color='white'/>}
                </button>
                <p className='likes'>{likes}</p>
            <button onClick={dislikeClick}>
            {!dislike? 
            <BsHandThumbsDown size={20} color="white"/>:
             <BsHandThumbsDownFill size={20} color="white"/>}
            </button>
           
             <p>Reply</p>
            </span>
            <span onClick={replyClick} className='allTheReplies'>
                {!reply ? 
                <IoMdArrowDropdown size={20} color='inherit'style={{color:'#3ea6ff'}}/>:
                 <IoMdArrowDropup size={20} color='inherit' className='arrowReplies'/>}
                 <p className='replies'>{replies?.length} Replies</p>
            </span>
            <div>
                {
                    reply ? 
                    <div>
                      {replies.map((item,index)=>(
                        <div className=' commentContainer'>
                             <img src={img} alt="profile"/>
                         <div className='commentContainerContent'>
                         <span>
                         <p>{item.name}</p>
                         <p>{duration}</p>
                     </span>
                     <p className='theComment'>{item.comment}</p>
                     <span>
                         <button onClick={likeClick}>
                         {!like ? 
                     <BsHandThumbsUp size={20} color='white' />:
                     <BsFillHandThumbsUpFill size={20} color='white'/>}
                         </button>
                         <p className='likes'>{item.likes}</p>
                     <button onClick={dislikeClick}>
                     {!dislike? 
                     <BsHandThumbsDown size={20} color="white"/>:
                      <BsHandThumbsDownFill size={20} color="white"/>}
                     </button>
                    
                      <p>Reply</p>
                     </span>
                     </div>
                        </div>
                    
                      ))}
                    </div>:''
                }
            </div>
        </div>
    </div>
  )
}

export default Comment