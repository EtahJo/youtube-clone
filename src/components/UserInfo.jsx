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
console.log(userModal[3].more[0].account)
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
                                {item.account && <IoIosArrowForward size={25} 
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:true,
                                        normal:false,
                                        appearance:false,
                                        language:false,
                                        mode:false,
                                        location:false,
                                        })}/> }
                                {item.appearance && <IoIosArrowForward size={25} 
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:false,
                                        normal:false,
                                        appearance:true,
                                        language:false,
                                        mode:false,
                                        location:false,
                                        })}/> }

                                {item.language && <IoIosArrowForward size={25} 
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:false,
                                        normal:false,
                                        appearance:false,
                                        language:true,
                                        mode:false,
                                        location:false,
                                        })}/> }

                                {item.mode && <IoIosArrowForward size={25} 
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:false,
                                        normal:false,
                                        appearance:false,
                                        language:false,
                                        mode:true,
                                        location:false,
                                        })}/> }
                                {item.location && <IoIosArrowForward size={25} 
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:false,
                                        normal:false,
                                        appearance:false,
                                        language:false,
                                        mode:false,
                                        location:true,
                                        })}/> }
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
        <div className='preHeader'>
            <p>Arrah Etah</p>
            <p>arrahetah23@gmail.com</p>
        </div>
        <div className='userHeader'>
            <img  src='https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo' alt='user profile'/>
            <div>
                <p>Arrah Etah</p>
                <p>@arrah-etah</p>
                <p>21 Subscribers</p>
            </div>
        </div>
        <p className='viewAll'>View all channels</p>
        <p>Other Accounts</p>
        <div>
            {
                userModal.map((item,index)=>(
                    <div key={index}>
                         <div>
                            {
                                item.more ? (
                                    <div>
                                            {item?.more.map((itemMore ,index)=>(
                                                itemMore.account && (
                                                    <div key={index} className='accountInfo'>
                                      
                                                    <>
                                                     <p>{itemMore.email}</p>
                                             <div className='accountInfoBody'>
                                                 <img src={itemMore.img} alt='account profile'/>
                                                 <span>
                                                     <p>{itemMore.name}</p>
                                                     <p>{itemMore.subs}</p>
                                                 </span>
                                             </div>
                                                    </> 
                                                 
                                            
                                         </div>
                                                )
                              
                              ))}
                                    </div>
                                ):''
                            }
                          
                            </div>
                        
                    </div>
                ))
            }
        </div>
        </>
    }
    </div>
  )
}

export default UserInfo