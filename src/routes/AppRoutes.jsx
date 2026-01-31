//Seller_Client > src > routes > AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import SellerLanding from "../pages/sellerLanding";
import SellerRegister from "../pages/SellerRegister";
import SellerLogin from "../pages/sellerLogin";
import SellerLayout from "../layouts/SellerLayout"; 
import SellerOrders from "../pages/seller/SellerOrders";
import AddProduct from "../pages/seller/AddProduct";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <SellerLanding />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <SellerLogin />
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <SellerRegister />
            </MainLayout>
          }
        />

        <Route
          path="/seller/dashboard"
          element={
            <MainLayout>
              <SellerLayout />
            </MainLayout>
          }
        />

       <Route
          path="/seller/orders"
            element={
           <MainLayout>
         <SellerOrders />
        </MainLayout>
            }
         />

         <Route
  path="/seller/add-product"
  element={
    <MainLayout>
      <AddProduct />
    </MainLayout>
  }
/>
        
      </Routes>

      
    </BrowserRouter>
  );
};

export default AppRoutes;
