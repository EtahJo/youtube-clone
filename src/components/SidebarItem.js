import React from 'react';
import '../assets/styles/Sidebar.css';

const SidebarItem = ({Icon,img,name}) => {
  return (
    <div className='itemContainer'>
<div className='leftItem'>
    {Icon ?<Icon size={25} color="white"/>:<img src={img} alt="The Icon"/>}
   
</div>
<div className='rightItem'>
    <p>{name}</p>
</div>
    </div>
  )
}

export default SidebarItem