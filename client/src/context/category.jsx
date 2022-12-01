import { createContext, useEffect, useState } from "react";
import getCategories from "../service/categories";

export const categoryContext = createContext();

function CategoryProvider({ children }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategory(res.data));
  }, []);
  return (
    <categoryContext.Provider value={{ category, setCategory}}>
      {children}
    </categoryContext.Provider>
  );
}

export default CategoryProvider;
