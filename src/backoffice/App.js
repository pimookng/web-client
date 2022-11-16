import './App.css';
import {Link,Route,Routes}  from 'react-router-dom';
import {Home} from "./Home"
import ListRegister from './backoffice/ListRegister'
import ListCustomer from 'backoffice/ListCustomer';
import ListProduct from './backoffice/ListProduct';

function App() {
    return (
      <div className="">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listRegister">การลงทะเบียน</Link>
            </li>
            <li>
              <Link to="/listCustomer">Customer</Link>
            </li>
            <li>
              <Link to="Backoffice/ListProduct">Product</Link>
            </li>
          </ul>
        </nav>
        <hr/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="backoffice/listRegister" element={<ListRegister/>}></Route>  
    <Route path="backoffice/listCustomer" element={<ListCustomer/>}></Route>  
    <Route path="backoffice/ListProduct" element={<ListProduct/>}></Route>
  </Routes>
      </div>
    );
  }
  
  export default App;