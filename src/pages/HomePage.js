import React from 'react';
import "../assets/styles/HomePage.css";
import Categories from '../components/Categories';
import Body from '../components/Body';

const HomePage = ({sidebar,setSidebar}) => {
  // const[sidebar,setSidebar]= useState(false);
  return (
    <div className='homeContainer'>

        <div className='homeBody'>
           
            <div className={sidebar?'homeContent':'sxHomeContent'}>
                {/* categories */}
                <div className="allCats">
                <Categories />
                </div>
              <div>
              <Body className="bodyContent"/>
              </div>
                {/* body */}
               
            </div>
        </div>
    </div>
  )
}

export default HomePage