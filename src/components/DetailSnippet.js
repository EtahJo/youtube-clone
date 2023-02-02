import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailSnippet = ({img,title,owner , views,duration,id}) => {
    const navigate = useNavigate();
  return (
    <div className='detailSnippet' onClick={()=>navigate(`/detail/${id}`)}>
        <div>
            <img src={img} alt="Thumbnail"/>
        </div>
        <div className='detailSnippetContent'>
            <h3>{title}</h3>
            <p>{owner}</p>
            <span>
                <p>{views} views</p>
                <p> &#8226;</p>
                <p>{duration}</p>
            </span>
        </div>
    </div>
  )
}

export default DetailSnippet