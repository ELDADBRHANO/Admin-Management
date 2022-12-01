import { createContext, useEffect, useState } from "react";
import getStore from "../service/store";

export const storeContext = createContext();

function StoreProvider({ children }) {
  const [store, setStore] = useState([]);
  useEffect(() => {
    getStore().then((res) => setStore(res.data));
  }, []);
  return (
    <storeContext.Provider value={{ store, setStore}}>
      {children}
    </storeContext.Provider>
  );
}

export default StoreProvider;
