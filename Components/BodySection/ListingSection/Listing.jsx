import React from 'react'
import { useState } from 'react'
import './Listing.css'
import img from '../../../Assets/skinDisease.jpg'
import img2 from '../../../Assets/solutions.jpg'
import img3 from '../../../Assets/download.jpg'
import Modal from '../Modal/Modal'
const Listing = () => {
  const [openModal, setOpenModal]=useState(false);

  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>
          My Listing
        </h1>
        <button className='btn flex'>
          See All 
        </button>

      </div>
      <div className='seeContainer flex'
      >
        <div className='singleItem'>
          <img src={img}/>
          <h3>Scar</h3>
        </div>
        <div className='singleItem'>
          <img src={img2}/>
          <h3>Scar</h3>
        </div>
        <div className='singleItem'>
          <img src={img3} className='openModalBtn' 
          onClick={()=>{
            setOpenModal(true);
          }}
          />
          {openModal && <Modal closeModal={setOpenModal}/>}
          <h3>Scar</h3>
        </div>
        

      </div>
    </div>
  )
}

export default Listing