import React from 'react'
import './TopSection.css'
import skinAware from '../../../Assets/skin-awarness.jpg'
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io'
const TopSection = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome</h1>
          <p>Hello , Welcome Back</p>
        </div>
        <div className='searchBar flex'>
          <input type='text' placeholder='Search Dashboard'/>
          <AiOutlineSearch className="icon"/>
        </div>
        <div className='adminDiv flex'>
          <AiOutlineMessage/>
          <IoIosNotificationsOutline/>


        </div>

      </div>


      <div className='cardSection flex'>
        <div className='rightCard flex'>
          <h1>Pervious scanning History</h1>

          
         
        </div>  

      </div>

    </div>
  )
}

export default TopSection