import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
// import React, { useEffect, useContext } from "react";
// import { fetchDataFromApi } from "../src/utils/api";
// import { Context } from "../src/utils/context";

function App() {
  // const { categories, setCategories } =
  //       useContext(Context);
  //   useEffect(() => {
  //       getCategories();
  //   }, []);

  //   const getCategories = () => {
  //       fetchDataFromApi("/api/categories?populate=*").then((res) => {
  //           console.log(res);
  //           setCategories(res);
  //       });
  //   };  

    return (
        <BrowserRouter>
            <AppContext>
                <Header  />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/categories" element={<Category categories={categories />} /> */}
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;