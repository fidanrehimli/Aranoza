import React, { useContext, useEffect } from 'react'
import "./seller.css"
import { ProductsContext } from '../../../context/ProductsContext'
import axios from 'axios'
const Seller = () => {

    const {data,setData,filter,setFilterData}=useContext(ProductsContext)
    const GetAllData = async(category)=>{
        const res = await axios("http://localhost:8080/products")
        setData(res?.data)
        setFilterData(res?.data)
    }

    useEffect(()=>{
        GetAllData()
    },[])

  return (
    <div>
    <div className='seller'>
        <div className='sellers'>
        <h1 className="sellertext">Best Sellers</h1>
        <h5 className="sellerparam">Shop</h5>
        </div>

        <div className="next">
        <h3 className="prev">Next</h3>
        <hr />
        <h3 className="prev">Previous</h3>
      </div>

    </div>
    <div className="datas">
        {filter.slice(0,4).map((elem)=>(
            <div className="productDiv" key={elem.id}>
                <img className="imgshop" src={elem.imgSRC} alt=""/>
                <h1 className="title">{elem.title}</h1>
                <p className="price">${elem.price}</p>
            </div>
        ))}
        </div>
    </div>

    
   
  )
}

export default Seller