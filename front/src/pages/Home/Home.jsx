import React from 'react'
import { Helmet } from 'react-helmet'
import Sofa from './Sofa/Sofa'
import Shop from './Shop/Shop'
import Seller from './Seller/Seller'
import SubSec from './Subscribe/SubSec'
import Footer from '../../layout/Footer'

const Home = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Sofa/>
            <Shop/>
            <Seller/>
            <SubSec/>
            <Footer/>
    </div>
  )
}

export default Home