import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ListProduct from "./ListProduct";
import ListRegister from "./backoffice/ListRegister";
import ListCustomer from "./backoffice/ListCustomer";
import Product from "./backoffice/ListProduct";

function App() {
  return (
    <div className="Accusoft โปรแกรมธุรกิจ SME">
      <header>
        <h1 class="logo">Logo</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/listProduct">โปรแกรม</Link></li>
            <li><Link to="/listRegister">การลงทะเบียน</Link></li>
            <li><Link to="/listCustomer">Customer</Link></li>
            <li><Link to="/backoffice/listProduct">Product</Link></li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listProduct" element={<ListProduct />}></Route>
        <Route path="/listRegister" element={<ListRegister />}></Route>
        <Route path="/listCustomer" element={<ListCustomer />}></Route>
        <Route path="/backoffice/listProduct" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
