import { createContext, useEffect, useState } from "react";
import getProducts from "../service/product";

export const productContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProduct(res.data));
  }, []);
  return (
    <productContext.Provider value={{ product, setProduct}}>
      {children}
    </productContext.Provider>
  );
}

export default ProductProvider;
