import React,{useState} from 'react';
import userModal from '../data/userModal';
import {IoIosArrowForward,IoIosArrowRoundBack} from 'react-icons/io'

const UserInfo = () => {
const[more,setMore]=useState({
    account:false,
    appearance:false,
    language:false,
    mode:false,
    location:false,
    normal:true
})
  return (
    <div className='userInfo'>
        {
            more.normal && 
            <>
                <div className='userHeader'>
            <img  src='https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo' alt='user profile'/>
            <div>
                <p>Arrah Etah</p>
                <p>@arrah-etah</p>
                <a href='/#'>Manage your google account</a>
            </div>
        </div>
        <div className='userBody'>
            {
                userModal.map((item,index)=>(
                    <div key={index}>
                        {item.line && <div className='theLine'>
                            </div>}
                            {
                                item.icon && <span className='userItem'>
                                <item.icon size={25} color="white"/>
                                <p>{item.name}</p>
                                {item.more && <IoIosArrowForward size={25} onClick={()=>setMore({...more,account:true,normal:false})}/> }
                            </span>
                            }

                        
                    </div>
                ))
            }
        </div>
            </>

    }
    {
        more.account && 
        <>
        <div className='accountHeader'>
            <IoIosArrowRoundBack size={25} 
            onClick={()=>setMore({...more,account:false,normal:true})}/>
            <p>Accounts</p>
        </div>
        </>
    }
    
    </div>
  )
}

export default UserInfo