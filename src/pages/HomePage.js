import React,{useEffect,useContext} from 'react';
import '../assets/styles/HomePage.css';
import Categories from '../components/Categories';
import Body from '../components/Body';
import Sidebar from '../components/Sidebar';
import { dataContext } from '../context/displayDataContext';
const HomePage = ({ sidebar, setSidebar }) => {
  const {data} =useContext(dataContext)
  // const[]= useState(true);
useEffect(()=>{
  console.log(data)
},[data])
  return (
    <div className='homeContainer'>
      <div className='homeBody'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} className='sidebar' />
        <div className={sidebar ? 'homeContent' : 'sxHomeContent'}>
          {/* categories */}
          <div className='allCats'>
            <Categories home='true' />
          </div>
          <div>
            <Body className='bodyContent' />
          </div>
          {/* body */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
