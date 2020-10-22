import React from 'react';
import { BrowserRouter as Router , Routes, Route, Link} from "react-router-dom";
import {Home} from "./componnents/Home";
import { Product } from './componnents/Product';
import { ProductDetails} from './componnents/ProductDetails';
import './index.css';
import {ProductHome } from './componnents/ProductHome';
import { NotDefine } from './componnents/NotDefine';

function App() {
  return (
    <Router>
      <h1>welcome to shoe app</h1>
      <nav> 
        <Link  to="/">Home</Link> {" "}
        <Link to="Product">product</Link>{" "}
        
      </nav>
      <Routes>
        <Route  path= "/" element={<Home />}/> 
        <Route path="Product" element={<Product />}>
          <Route path="/" element={<ProductHome />}></Route>
          <Route path=":productId" element={< ProductDetails />}></Route>
        </Route>
        <Route path="*" element={< NotDefine />}></Route>
       </Routes>
    </Router>
  );
}

export default App;
