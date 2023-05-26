import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

const UserSectionHeader = ({ setMore, title, more, onClick }) => {
  return (
    <div className='accountHeader'>
      <IoIosArrowRoundBack size={30} onClick={onClick} />
      <p>{title}</p>
    </div>
  );
};

export default UserSectionHeader;
