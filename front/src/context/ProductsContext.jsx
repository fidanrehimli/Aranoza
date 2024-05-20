import { createContext, useState } from "react";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilterData] = useState([]);
  const [active, setActive] = useState(null);
  const [sortData, setSortData] = useState([]);
  const [usernameInp, setUsernameInp] = useState("");
  const [imgInp, setImgInp] = useState("");
  const [titleInp, setTitleInp] = useState("");
  const [priceInp, setPriceInp] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        filter,
        setFilterData,
        active,
        setActive,
        sortData,
        setSortData,
        usernameInp,
        setUsernameInp,
        imgInp,
        setImgInp,
        titleInp,
        setTitleInp,
        priceInp,
        setPriceInp,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
