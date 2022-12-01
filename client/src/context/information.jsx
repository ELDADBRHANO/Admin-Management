import { createContext, useEffect, useState } from "react";
import getInformation from "../service/information";

export const informationContext = createContext();

function InformationProvider({ children }) {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    getInformation().then((res) => setInformation(res.data));
  }, []);
  return (
    <informationContext.Provider value={{ information, setInformation}}>
      {children}
    </informationContext.Provider>
  );
}

export default InformationProvider;
