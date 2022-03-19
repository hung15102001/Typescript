import {  useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfo from './component/ShowInfo';
import axios from 'axios';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import CliLayout from './page/layout/CliLayout';
import Home from './page/Home';
import Product from './page/Product';
import Dashboard from './page/admin/Dashboard';
import AdminLayout from './page/layout/AdminLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import New from './page/admin/New';
import NewAdmin from './page/admin/New';
import { ProductType } from './types/products';
import Login from './page/authen/Login';
import Signup from './page/authen/Signup';
import Add from './page/admin/product/Add';
import { add, list } from './api/products';
import ProductAdmin from './page/admin/product/Product';


function App() {
 
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => { // 3
    const getProducts = async () => {
       const { data } = await list();
      
       
       setProducts(data);
    }
    getProducts();
 },[])

  const onHanderAdd = async (product: ProductType)=>{
     
      
    const {data} = await add(product);

    setProducts([...products, data]);
}
  return (
        <div>
            <main>
                <Routes>
                  <Route path="/" element={<CliLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/products" element={<Product />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                  </Route>


                  <Route path="admin" element={<AdminLayout />}>
                      <Route index element={<Navigate to="dashboard" />} />
                      <Route path="dashboard" element={<Dashboard />} />
                       {/* <Route path="news" element={<NewAdmin />}/>  */}
                       <Route path="products" element={<ProductAdmin data={products}/>}>
                         
                        <Route path="/add" element={<Add onAdd={onHanderAdd} />}/> 
                      </Route>
                        

                  </Route>

                </Routes>
            </main>
        </div>
    )

}

export default App
