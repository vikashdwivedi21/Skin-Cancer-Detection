import React from 'react'
import './Body.css'
import Top from './TopSection/TopSection'
import Listing from './ListingSection/Listing'
import Activity from './ActivitySection/ActivitySection'
const Body = () => {
  return (
    <div className='mainContent'>
        <Top/>

        <div className='bottom flex'>
            <Listing/>
           

        </div>


    </div>
  )
}

export default Body