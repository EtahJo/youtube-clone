import React,{useState,useContext,useEffect} from 'react';
import userModal from '../data/userModal';
import {IoIosArrowForward,IoIosArrowRoundBack} from 'react-icons/io';
import {AiOutlineCheck} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {BsPersonPlus} from 'react-icons/bs';
import { ThemeContext } from '../context/appearanceContext';
import { languageContext } from '../context/languageContext';
import UserSectionHeader from './UserSectionHeader';
import languages from '../data/languages';

const UserInfo = () => {
const[more,setMore]=useState({
    account:false,
    appearance:false,
    language:false,
    mode:false,
    location:false,
    normal:true
})
const {dark,setDark}= useContext(ThemeContext)
const {language,setLanguage}=useContext(languageContext);
// useEffect(()=>{
//     setDark(!dark)
// },[dark])
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
                                <p style={{marginRight:'5px'}} >{item.name}</p>
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
                                {item.appearance &&(
                                    <>
                                      {dark ? 'Dark':'Light'}
                                     <IoIosArrowForward size={25} 
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
                                        })}/> 
                                    </>
                                )
                                
                                        
                                        }
                              
                                {item.language && 
                                <>
                                <p style={{marginLeft:'-2px'}}>{language}</p>
                                  <IoIosArrowForward size={25} 
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
                                        })}/>
                                </>
                               }

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
      <UserSectionHeader
      more={more}
      title='Accounts'
      setMore={setMore}
      onClick={()=>setMore({...more,account:false,normal:true})}
      />
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
                            <BsPersonPlus size={28} color='#fff'/>
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
         <UserSectionHeader
      more={more}
      title='Appearances'
      setMore={setMore}
      onClick={()=>setMore({...more,appearance:false,normal:true})}
      />
        <p className='appearanceTag'>Setting applies to this browser only</p>
        <ul>
            <li>Use device theme</li>
            <li>
                {dark ? <AiOutlineCheck className='tickIcon'
                
                />:<div className='tickIcon'></div>}
                <p onClick={()=>setDark(true)}>Dark theme</p>
            </li>
            <li>
            {!dark ? <AiOutlineCheck className='tickIcon'/>:<div className='tickIcon'></div>}
                <p onClick={()=>setDark(false)}>
                Light theme
                </p>
            </li>
        </ul>
        </>
    }
    {
        more.language &&
         <>
          <UserSectionHeader
      more={more}
      title='Choose your language'
      onClick={()=>setMore({...more,language:false,normal:true})}
      />
      <div>
        {languages.map((item,index)=>(
            <ul key={index}>
                <li onClick={()=>setLanguage(`${item}`)} style={{cursor:'pointer'}}>{item}</li>
            </ul>
        ))}
      </div>
        </>
    }
    {
        more.mode &&
         <>
        <UserSectionHeader
      more={more}
      title='Restricted Mode'
      onClick={()=>setMore({...more,mode:false,normal:true})}
      />
        </>
    }
    {
        more.location &&
         <>
         <UserSectionHeader
      more={more}
      title='Choose your location'
      onClick={()=>setMore({...more,location:false,normal:true})}
      />
        </>
    }
    </div>
  )
}

export default UserInfo