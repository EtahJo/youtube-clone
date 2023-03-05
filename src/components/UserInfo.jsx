import React,{useState} from 'react';
import userModal from '../data/userModal';
import {IoIosArrowForward,IoIosArrowRoundBack} from 'react-icons/io';
import {AiOutlineCheck} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {BsPersonPlus} from 'react-icons/bs'

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
                                className='itemIcon'
                                onClick={
                                    ()=>setMore({
                                        ...more,
                                        account:true,
                                        normal:false,
                                        appearance:false,
                                        language:false,
                                        mode:false,
                                        location:false,
                                        })
                                        
                                        }/> }
                                {item.appearance && <IoIosArrowForward size={25} 
                                className='itemIcon'
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
                                className='itemIcon'
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
                                className='itemIcon'
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
                                className='itemIcon' 
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
            <IoIosArrowRoundBack size={30} 
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
                <p className='moreInfo'>@arrah-etah</p>
                <p className='moreInfo'>21 Subscribers</p>
            </div>
            <AiOutlineCheck size={30}/>
        </div>
        <p className='viewAll'>View all channels</p>
        <p className='otherAcc'>Other Accounts</p>
        <div>
            {
                userModal.map((item,index)=>(
                    <div key={index}>
                         <div>
                            {
                                item.account ? (
                                    <div className='accountsList'>
                                            {item?.more.map((itemMore ,index)=>(
                                               
                                                    <div key={index} className='accountInfo'>
                                      
                                                    <>
                                                     <p className='accountInfoHeader'>{itemMore.email}</p>
                                             <div className='accountInfoBody'>
                                                 <img src={itemMore.img} alt='account profile'/>
                                                 <span>
                                                     <p>{itemMore.name}</p>
                                                     <p>{itemMore.subs}</p>
                                                 </span>
                                             </div>
                                                    </> 
                                                 
                                            
                                         </div>
                                                
                              
                              ))}
                                    </div>
                                ):''
                            }
                            </div>
                        
                    </div>
                ))
            }
            <div className='accountBottom'>
            <span className='addAcc'>
                            <BsPersonPlus size={30} color='#fff'/>
                            <p>Add Account</p>
                          </span>
                          <span className='signOut'>
                            <BiLogOut size={30} color='#fff'/>
                            <p>Sign Out</p>
                          </span>
            </div>
          
        </div>
        </>
    }
    {
        more.appearance && <>
         <div className='accountHeader'>
            <IoIosArrowRoundBack size={30} 
            onClick={()=>setMore({...more,account:false,normal:true})}/>
            <p>Appearances</p>
        </div>
        
        </>
    }
    </div>
  )
}

export default UserInfo