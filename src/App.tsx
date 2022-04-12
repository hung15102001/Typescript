import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./component/ShowInfo";
import axios from "axios";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import CliLayout from "./page/layout/CliLayout";
import Home from "./page/Home";
import Product from "./page/products/Product";
import Dashboard from "./page/admin/Dashboard";
import AdminLayout from "./page/layout/AdminLayout";
import New from "./page/admin/news/New";
import NewAdmin from "./page/admin/news/New";
import { ProductType } from "./types/products";
import Login from "./page/authen/Login";
import Signup from "./page/authen/Signup";
import Add from "./page/admin/product/Add";
import { list, remove } from "./api/products";
import ProductAdmin from "./page/admin/product/Product";
import { NewType } from "./types/news";
import AddNew from "./page/admin/news/Add";
import UpdateNew from "./page/admin/news/Update"
import "bootstrap/dist/css/bootstrap.min.css";
import UpdatePro from "./page/admin/product/Update";
import { add } from "./api/news";
import PrivateRouter from "./component/authen/PrivateRouter";
import 'antd/dist/antd.css';
import User from "./page/admin/users/User";
import AddUser from './page/admin/users/Add'
import EditUser from "./page/admin/users/Edit";
import Category from "./page/category/Category";
import AddCate from "./page/category/Add";
import UpdateCate from "./page/category/Update";
import Cart from "./page/Cart";
import DetailPro from "./page/products/DetailPro";
import ProductCli from "./page/products/Product";
import About from "./page/About";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "./page/Contact";

function App() {



  return (
    <div>


      <main>
        <Routes>
          <Route path="/" element={<CliLayout />}>
            <Route index element={<Home />} />
            <Route path="products" >
              <Route  index element={<ProductCli/>}/>
              <Route path=":id" element={<DetailPro />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>

          <Route path="admin" element={<PrivateRouter> <AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="products" />} />

            <Route path="news" >
                <Route index element={<NewAdmin />}/>
                 <Route path="add" element={<AddNew/>} />
                 <Route path=":id/edit" element={<UpdateNew />} />
            </Route>
          
            <Route path="products">
              <Route index element={<ProductAdmin />} />
              <Route path="add" element={<Add />} />
              <Route path=":id/edit" element={<UpdatePro />} />
            </Route>

            <Route path="users">
                <Route index element={<User />} />
                <Route path="add" element={<AddUser />}/>
                <Route path=":id/edit" element={<EditUser />}/>
            </Route>

            <Route path="category">
                <Route index element={<Category />} />
                <Route path="add" element={<AddCate />}/>
                <Route path=":id/edit" element={<UpdateCate />}/>
            </Route>
          </Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
