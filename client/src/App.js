import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import AddUser from './components/pages/register/register';
import Categories from './components/pages/categories/categories';
import CardTemplate from './components/features/card/card';
import CardLength from './components/features/cardLength';
import Departments from './components/pages/deparments/departments';
import Information from './components/pages/information/information';
import Store from './components/pages/store/store';
import Orders from './components/pages/orders/orders';
import Product from './components/pages/products/products'
import CardView from './components/features/card/card';
import Header from './components/features/haeder/header';
import Graf from './components/features/graf/graf';
import BarChart from './components/features/barChrt/barchrt';
function App() {
  return (
    <div>
      <Header/>
      <CardView/>
      <Graf/>
      {/* <BarChart/> */}
      {/* <Categories/>
      <Departments/>
      <Information/>
      <Store/>
      <Orders/>
      <Product/> */}
    </div>
  );
}

export default App;
