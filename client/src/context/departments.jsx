import { createContext, useEffect, useState } from "react";
import getDepartments from "../service/department";

export const departmentContext = createContext();

function DepartmentProvider({ children }) {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    getDepartments().then((res) => setDepartment(res.data));
  }, []);
  return (
    <departmentContext.Provider value={{ department, setDepartment}}>
      {children}
    </departmentContext.Provider>
  );
}

export default DepartmentProvider;
