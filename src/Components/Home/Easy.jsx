import React from 'react'
import './Easy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping, faClock, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import time from '../Assets/time.svg'
import time2 from '../Assets/time2.svg'
import time3 from '../Assets/time3.svg'

const Easy = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Easy . Quick . Efficient </h1>
    
    <div className="svg-rounded">
        <div className="save-effort">
            <div className="icon-container">
                <FontAwesomeIcon icon={faHandsHelping} size="3x" />
                <img src={time} alt="" />
            </div>
            <h2>Save Effort</h2>
            {/* <p>Save your time and effort with our quick and easy claim settlement process.</p> */}
        </div>
        <div className="save-effort">
            <div className="icon-container">
                <FontAwesomeIcon icon={faClock} size="3x" />
                <img src={time2} alt="" />
            </div>
            <h2>Save Time</h2>
            {/* <p>Our insurance policies are designed to save your time and provide instant coverage.</p> */}
        </div>
        <div className="save-effort">
            <div className="icon-container">
                <FontAwesomeIcon icon={faPiggyBank} size="3x" />
                <img src={time3} alt="" />
            </div>
            <h2>Save Money</h2>
            {/* <p>Get affordable insurance plans that provide maximum coverage at minimum costs.</p> */}
        </div>
    </div>
    </>
  )
}

export default Easy