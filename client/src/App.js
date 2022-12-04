import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardView from './components/features/card/card';
import Header from './components/features/haeder/header';
import Graf from './components/features/graf/graf';
import BarChart from './components/features/barChrt/barchrt';
import SiteStates from './components/features/siteStates/siteStates';
function App() {
  return (
    <div>
      <Header/>
      <CardView/>
      <Graf/>
      <SiteStates/>
 
    </div>
  );
}

export default App;
