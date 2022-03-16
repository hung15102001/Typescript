import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfo from './component/ShowInfo';
import type {ProductType} from './types/products';
import axios from 'axios';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import CliLayout from './page/layout/CliLayout';
import Home from './page/Home';
import Product from './page/Product';
import Dashboard from './page/admin/Dashboard';
import AdminLayout from './page/layout/AdminLayout';



function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getPro = async () => {
      const {data} = await  axios.get('http://localhost:3000/products');
      setProducts(data);
     
    }
    getPro();
  },[]);


  const removeItem = async (id: number) => {
  
    const {data} = await axios.delete(`http://localhost:3000/products/${id}`);

    data && setProducts(products.filter(item => item._id !== data._id));
  }


  return (
        <div>
            <header>
                <ul>
                  <li><NavLink to="/">Homepage</NavLink></li>
                  <li><NavLink to="/products">Productpage</NavLink></li>
                  <li><NavLink to="/admin">Admin</NavLink></li>
                </ul>
            </header>

            <main>
                <Routes>
                  <Route path="/" element={<CliLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/products" element={<Product />} />
                  </Route>

                  <Route path="admin" element={<AdminLayout />}>
                      <Route index element={<Navigate to="dashboard" />} />
                      <Route path="dashboard" element={<Dashboard />} />
                  </Route>

                </Routes>
            </main>
        </div>
    )

}

export default App
