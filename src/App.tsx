import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./component/ShowInfo";
import axios from "axios";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import CliLayout from "./page/layout/CliLayout";
import Home from "./page/Home";
import Product from "./page/Product";
import Dashboard from "./page/admin/Dashboard";
import AdminLayout from "./page/layout/AdminLayout";
import New from "./page/admin/news/New";
import NewAdmin from "./page/admin/news/New";
import { ProductType } from "./types/products";
import Login from "./page/authen/Login";
import Signup from "./page/authen/Signup";
import Add from "./page/admin/product/Add";
import { add, list, remove } from "./api/products";
import ProductAdmin from "./page/admin/product/Product";
import { NewType } from "./types/news";
import AddNew from "./page/admin/news/Add";
import { getAll } from "./api/news";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./page/admin/product/Update";

function App() {


  // const onHanderAddPro = async (product: ProductType) => {
  //   const { data } = await add(product);

  //   setProducts([...products, data]);
  // };

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
            <Route index element={<Navigate to="products" />} />

            <Route path="news" >
                <Route index element={<NewAdmin />}/>
                 <Route path="add" element={<AddNew />} />
            </Route>
          
            <Route path="products">
              <Route index element={<ProductAdmin />} />
              <Route path="add" element={<Add  />} />
              <Route path=":id/edit" element={<Update />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
