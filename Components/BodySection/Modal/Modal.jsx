import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button onClick={()=>closeModal(false)}> X </button>
            </div>
            
            <div className='title'>
                <h1>Psoriasis</h1>
            </div>
            <div className='body'>
                <p>Psoriasis treatments aim to stop skin cells from growing so quickly and to remove scales. Options include creams and ointments (topical therapy), light therapy (phototherapy), and oral or injected medications.Psoriasis treatments aim to stop skin cells from growing so quickly and to remove scales. Options include creams and ointments (topical therapy), light therapy (phototherapy), and oral or injected medications.</p>
            </div>
            <div className='footer'>
                <button onClick={()=>closeModal(false)}>Close</button>
            </div>

        </div>

    </div>
  )
}

export default Modal