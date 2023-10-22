import React from 'react'
import './SideBar.css'
import logo from '../../Assets/skin-logo.jpg'
import {AiFillCamera} from 'react-icons/ai'
const SideBar = () => {
  return (
    <div className='sideBar grid'>
        <div className='logoDiv flex'>
        
            <img src={logo} alt='' className='logo-img'/>
           
        </div>
        
        
        <div className='menuDiv'>
            <h3 className='divTitle'>
                QUICK MENU
            </h3>
            <ul className='menuLists grid'>
                <li className='listItem'>
                    <a href='' className='menuLink flex'>
                        <AiFillCamera className="icon"/>
                        <span className='smallText'>
                            Scan or Upload Image
                        </span>
                    </a>
                </li>
               
            </ul>

        </div>


        
    </div>
  )
}

export default SideBar