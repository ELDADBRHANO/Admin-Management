import Categories from "../../pages/categories/categories";
import Departments from "../../pages/deparments/departments";
import Information from "../../pages/information/information";
import Product from "../../pages/products/products";
import Store from "../../pages/store/store";
import './cardView.css'
import Container from 'react-bootstrap/Container';
const CardView = () => {
  return (
    <div className="container-fluid divs-container text-center mt-5">
      <div>
      Departments
        <div className="view">
          <Departments/>
        </div>
      </div>
      <div>
      Categories
        <div className="view">
          <Categories/>
        </div>
      </div>
      <div>
      Information
        <div className="view">
          <Information/>
        </div>
      </div>
      <div>
      Stores
        <div className="view">
          <Store/>
        </div>
      </div>
      <div>
      Products
        <div className="view">
          <Product/>
        </div>
      </div>
      
    </div>
  );
};
export default CardView;
