import React from 'react';
// import ReactPlayer from 'react-player';
import { MdOutlineWatchLater, MdGppGood } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import HoverVideoPlayer from 'react-hover-video-player';
import { useNavigate } from 'react-router-dom';

const SnippetComponent = ({ title, thumbnail, owner, views, duration, video, verified, id }) => {
  const navigate = useNavigate();
  return (
    <div className='snippetContainer' onClick={() => navigate(`/detail/${id}`)}>
      <div className='snippetTop'>
        <HoverVideoPlayer
          videoSrc={video}
          style={{ borderRadius: '15px' }}
          className='videoComp'
          playbackStartDelay={3000}
          pausedOverlay={
            <img
              src={thumbnail}
              alt='Video Thumbnail'
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
          }
        />
        <div className='onHover'>
          <img src={thumbnail} alt='Owner Profile' className='ownerPic' />
          <div className='snippetBottomContent'>
            <p className='snippetTitle'>{title}</p>

            <div className='snippetOwnerContainer'>
              <p>
                {owner}
                {verified && <MdGppGood size={30} color='white' className='verifiedIcon' />}
              </p>
            </div>
            <div className='snippetViewsContainer'>
              <p>
                {views} views &#8226; {duration}
              </p>

              <p></p>
            </div>
            <div className='hoverButtons'>
              <button>
                <div>
                  <MdOutlineWatchLater size={30} color='white' />
                  <p>Watch Later</p>
                </div>
              </button>
              <button>
                <div>
                  <RiPlayList2Fill size={30} color='white' />
                  <p>Add to queue</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className='snippetHover'>
    <div className='hoverTop'>

    </div>
    <div className='hoverBottom'>
    <img src={thumbnail} alt="Owner Profile"/>
<div className='snippetBottomContent'>
    <p className='snippetTitle'>{title}</p>

<div className='snippetOwnerContainer'>
<p>{owner}
{verified && <MdGppGood size={30} color="white" className='verifiedIcon'/>}
</p>

</div>
<div className='snippetViewsContainer'>
    <p>{views} views   &#8226; {duration}</p>
  

<p></p>
</div>

</div>
    
    </div>

</div> */}
      </div>
      <div className='snippetBottom'>
        <img src={thumbnail} alt='Owner Profile' className='ownerPic' />
        <div className='snippetBottomContent'>
          <p className='snippetTitle'>{title}</p>

          <div className='snippetOwnerContainer'>
            <p>
              {owner}
              {verified && <MdGppGood size={30} color='white' className='verifiedIcon' />}
            </p>
          </div>
          <div className='snippetViewsContainer'>
            <p>
              {views} views &#8226; {duration}
            </p>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetComponent;
