import Categories from "../../pages/categories/categories";
import Departments from "../../pages/deparments/departments";
import Information from "../../pages/information/information";
import Product from "../../pages/products/products";
import Store from "../../pages/store/store";
import './cardView.css'
import Container from 'react-bootstrap/Container';
const CardView = () => {
  return (
    <Container fluid>
    <div class="divs row d-flex">
      <div class="col">
        <Departments/>
      </div>
      <div class="col">
        <Categories/>
      </div>
      <div class="col">
       <Information/>
      </div>

      <div class="col">
        <Store/>
      </div>

      <div class="col">
        <Product/>
      </div>

    </div>
  </Container>
  );
};
export default CardView;
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// const CardTemplate = ({ category }) => {
//   console.log(category);
//   category ? console.log(category) : console.log(category);

//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{category?.categoryName}</Card.Title>
//         <Card.Text>
//           {category?.categoryName}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CardTemplate;
