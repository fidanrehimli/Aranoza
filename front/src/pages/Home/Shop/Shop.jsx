import React, { useContext, useEffect } from "react";
import "./shop.css";
import axios from "axios";
import { ProductsContext } from "../../../context/ProductsContext";

const Shop = () => {
  const { data, setData, filter, setFilterData } = useContext(ProductsContext);
  const GetAllData = async (category) => {
    const res = await axios("http://localhost:8080/products");
    setData(res?.data);
    setFilterData(res?.data);
    console.log(res.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);

  return (
    <div>
      <div className="shop">
        <div className="shops">
          <h1 className="shoptext">Awesome</h1>
          <h5 className="shopparam">Shop</h5>
        </div>

        <div className="next">
          <button
            className="prevbtn"
            onClick={() => {
              let newArr = [...filter].sort((a, b) =>
                a.title[0].localCompare(b.title[0])
              );
              console.log(newArr);
              setFilterData(newArr);
            }}
          >
            Title sort
          </button>
          <hr />
          <button className="prevsbtn">Previous</button>
        </div>
      </div>
      <div className="datas">
        {filter.slice(0, 4).map((elem) => (
          <div className="productDiv" key={elem.id}>
            <img className="imgshop" src={elem.imgSRC} alt="" />
            <h1 className="title">{elem.title}</h1>
            <p className="price">${elem.price}</p>
          </div>
        ))}
        <div className="datas">
          {filter.slice(4, 8).map((elem) => (
            <div className="productDiv" key={elem.id}>
              <img className="imgshop" src={elem.imgSRC} alt="" />
              <h1 className="title">{elem.title}</h1>
              <p className="price">${elem.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
