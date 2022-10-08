import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes}  from 'react-router-dom';
import {Home} from "./Home"
import {ListProduct} from "./backoffice/ListProduct"

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
        </ul>
      </nav>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/listProduct" element={<ListProduct/>}></Route>
</Routes>
    </div>
  );
}

export default App;
