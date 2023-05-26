import React from 'react';
import '../assets/styles/Sidebar.css';
import SidebarItem from './SidebarItem';
import sidebarData from '../data/sidebarData';
import Footer from './Footer';
import { AiFillHome } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
// import { sideBarContext } from '../context/sidebarContext';

const SmallScreen = () => {
  return (
    <div className='sxSidebar'>
      <div className='sxItems'>
        <AiFillHome size={25} />
        <p>Home</p>
      </div>
      <div className='sxItems'>
        <RiVideoLine size={25} />
        <p>Shorts</p>
      </div>
      <div className='sxItems'>
        <MdOutlineSubscriptions size={25} />
        <p>Subsciptions</p>
      </div>
      <div className='sxItems'>
        <MdOutlineVideoLibrary size={25} />
        <p>Library</p>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebar, setSidebar }) => {
  // const[sidebar,setSidebar]=useState(false)
  // const {sidebar}=useContext(sideBarContext)

  return (
    <div>
      {sidebar ? (
        <div className='sidebarContainer'>
          {sidebarData.map((item, index) => (
            <div key={index}>
              {item.Icon && <SidebarItem name={item.name} Icon={item.Icon} />}
              {item.line && <hr className='line' />}
              {item.title && <h2 className='title'>{item.title}</h2>}
              {item.img && <SidebarItem name={item.name} img={item.img} />}
            </div>
          ))}
          <Footer />
        </div>
      ) : (
        <>
          <SmallScreen />
        </>
      )}
    </div>
  );
};

export default Sidebar;
