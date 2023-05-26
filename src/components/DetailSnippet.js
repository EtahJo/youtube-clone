import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsStopwatch } from 'react-icons/bs';
import { RiPlayList2Fill } from 'react-icons/ri';

const DetailSnippet = ({ img, title, owner, views, duration, id }) => {
  const navigate = useNavigate();
  return (
    <div className='detailSnippet' onClick={() => navigate(`/detail/${id}`)}>
      <div className='detailSnippetLeft'>
        <img src={img} alt='Thumbnail' />
        <span>
          <BsStopwatch size={20} color='white' className='spanIcon' />
          <RiPlayList2Fill size={20} color='white' className='spanIcon' />
        </span>
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
  );
};

export default DetailSnippet;
