import React from 'react';
import {IoIosArrowRoundBack} from 'react-icons/io'

const UserSectionHeader = ({setMore,title,more}) => {
  return (
    <div className='accountHeader'>
    <IoIosArrowRoundBack size={30} 
    onClick={()=>setMore({...more,account:false,normal:true})}/>
    <p>{title}</p>
</div>
  )
}

export default UserSectionHeader