import './App.css';
import {Link,Route,Routes}  from 'react-router-dom';
import Home from "./Home"
import ListProduct from "./ListProduct"
import ListRegister from './backoffice/ListRegister'
import ListCustomer from 'backoffice/ListCustomer';

function App() {
  return (
    <div className="Accusoft โปรแกรมธุรกิจ SME">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listProduct">โปรแกรม</Link>
          </li>
          <li>
            <Link to="/listRegister">การลงทะเบียน</Link>
          </li>
          <li>
            <Link to="/listCustomer">Customer</Link>
          </li>
        </ul>
      </nav>
      <hr/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/listProduct" element={<ListProduct/>}></Route>
  <Route path="/listRegister" element={<ListRegister/>}></Route>  
  <Route path="/listCustomer" element={<ListCustomer/>}></Route>  
</Routes>
    </div>
  );
}

export default App;
