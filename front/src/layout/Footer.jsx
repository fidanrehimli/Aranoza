import React from 'react'
import "./footer.css"
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
    <div className='footer'>
        <div>
            <h1 className='foottext'>Top Products</h1>
            <p className='footparam'>Managed Website</p>
            <p  className='footparam'>Manage Reputation</p>
            <p className='footparam'>Power Tools</p>
            <p className='footparam'>Marketing Service</p>
        </div>

        <div>
            <h1 className='foottext'>Quick Links</h1>
            <p className='footparam'>Jobs</p>
            <p  className='footparam'>Brand Assets</p>
            <p className='footparam'>Investor Relations</p>
            <p className='footparam'>Terms of Service</p>
        </div>

        <div>
            <h1 className='foottext'>Features</h1>
            <p className='footparam'>Jobs</p>
            <p  className='footparam'>Brand Assets</p>
            <p className='footparam'>Investor Relations</p>
            <p className='footparam'>Terms of Service</p>
        </div>

        <div>
            <h1 className='foottext'>Resources</h1>
            <p className='footparam'>Guides</p>
            <p  className='footparam'>Research</p>
            <p className='footparam'>Experts</p>
            <p className='footparam'>Agencies</p>
        </div>



    </div>
    <h2 className='foots' style={{textAlign:"center"}}>Copyright ©2024 All rights reserved | This template is made with<CiHeart /> by <span style={{color:"red"}}>Colorlib</span></h2>
   
    </div>
  )
}

export default Footer