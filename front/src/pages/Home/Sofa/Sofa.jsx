import React from 'react'
import "./sofa.css"

const Sofa = () => {
  return (
    <div className='sofa'>
        <div>
            <h1 className='sofatext'>Cloth &<br/>Wood Sofa</h1>
            <p className='sofaparam'>Incididunt ut labore et dolore magna aliqua quis<br/>ipsum suspendisse ultrices gravida.Risus<br/>commodo viverra</p>
            <button className='buynowbtn'>Buy Now</button>
        </div>

        <div className='image'></div>
        <div>
            <h2 className='num'>03</h2>
        </div>

    </div>
  )
}

export default Sofa