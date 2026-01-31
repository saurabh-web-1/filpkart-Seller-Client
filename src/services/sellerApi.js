// Seller_Client > src > services > sellerApi.js
import axios from "axios";

const sellerAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


sellerAPI.interceptors.request.use((req) => {
  const sellerToken = localStorage.getItem("sellerToken");
  const userToken = localStorage.getItem("token");

  
  if (req.url?.startsWith("/seller")) {

    const isAuthRoute =
      req.url.startsWith("/seller/auth/login") ||
      req.url.startsWith("/seller/auth/register");

    if (!isAuthRoute) {
      if (sellerToken) {
        req.headers.Authorization = `Bearer ${sellerToken}`;
      } else {
        // console.log("SELLER TOKEN NOT FOUND");
      }
    }
  }

 
  else {
    // console.log("🟢 USER ROUTE DETECTED");

    if (userToken) {
      req.headers.Authorization = `Bearer ${userToken}`;
    } else {
      // console.log("❌ USER TOKEN NOT FOUND");
    }
  }


  if (req.data instanceof FormData) {
    delete req.headers["Content-Type"];

    for (let pair of req.data.entries()) {
      // console.log("   ", pair[0], pair[1]);
    }
  } else {
    req.headers["Content-Type"] = "application/json";
  }

  return req;
});



export const userLogin = (data) => {
  return sellerAPI.post("/auth/login", data);
};

export const userRegister = (data) => {
  return sellerAPI.post("/auth/register", data);
};

export const loadUserProfile = () => {
  return sellerAPI.get("/users/me");
};



export const sellerRegister = async (data) => {
  const res = await sellerAPI.post("/seller/auth/register", data);
  localStorage.setItem("sellerToken", res.data.token);
  return res.data;
};

export const sellerLogin = async (data) => {
  const res = await sellerAPI.post("/seller/auth/login", data);
  localStorage.setItem("sellerToken", res.data.token);
  return res.data;
};



export const sellerStep2 = (data) => {
  return sellerAPI.post("/seller/step-2", data);
};

export const sellerStep3 = (data) => {
  return sellerAPI.post("/seller/step-3", data);
};



export const addSellerProduct = (data) => {
  return sellerAPI.post("/seller/products", data);
};

export const getSellerProducts = () => {
  return sellerAPI.get("/seller/products");
};

export const getSellerOrders = () => {
  return sellerAPI.get("/seller/orders");
};



export const createSellerProduct = (data) => {
  return sellerAPI.post("/seller/products", data);
};

export const getSellerProfile = () => {
  return sellerAPI.get("/seller/me");
};

export const getSellerOverViwe = () => {
  return sellerAPI.get("/seller/overviwe");
};

export default sellerAPI;
