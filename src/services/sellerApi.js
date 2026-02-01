import axios from "axios";

/* =========================
   AXIOS INSTANCE
========================= */
const sellerAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/* =========================
   REQUEST INTERCEPTOR
========================= */
sellerAPI.interceptors.request.use((req) => {
  const sellerToken = localStorage.getItem("sellerToken");
  const userToken = localStorage.getItem("token");

  /* ---------- SELLER ROUTES ---------- */
  if (req.url?.startsWith("/seller")) {
    const isAuthRoute =
      req.url.startsWith("/seller/auth/login") ||
      req.url.startsWith("/seller/auth/register");

    if (!isAuthRoute && sellerToken) {
      req.headers.Authorization = `Bearer ${sellerToken}`;
    }
  }

  /* ---------- USER ROUTES ---------- */
  else {
    if (userToken) {
      req.headers.Authorization = `Bearer ${userToken}`;
    }
  }

  /* ---------- CONTENT TYPE ---------- */
  if (req.data instanceof FormData) {
    delete req.headers["Content-Type"];
  } else {
    req.headers["Content-Type"] = "application/json";
  }

  return req;
});

/* =========================
   USER APIs
========================= */
export const userLogin = (data) => {
  return sellerAPI.post("/auth/login", data);
};

export const userRegister = (data) => {
  return sellerAPI.post("/auth/register", data);
};

export const loadUserProfile = () => {
  return sellerAPI.get("/users/me");
};

/* =========================
   SELLER AUTH APIs
========================= */
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

/* =========================
   SELLER ONBOARDING
========================= */
export const sellerStep2 = (data) => {
  return sellerAPI.post("/seller/step-2", data);
};

export const sellerStep3 = (data) => {
  return sellerAPI.post("/seller/step-3", data);
};

/* =========================
   SELLER PRODUCTS
========================= */
export const addSellerProduct = (data) => {
  return sellerAPI.post("/seller/products", data);
};

export const getSellerProducts = () => {
  return sellerAPI.get("/seller/products");
};

/* =========================
   SELLER ORDERS & DASHBOARD
========================= */
export const getSellerOrders = () => {
  return sellerAPI.get("/seller/orders");
};

export const getSellerProfile = () => {
  return sellerAPI.get("/seller/me");
};

export const getSellerOverViwe = () => {
  return sellerAPI.get("/seller/overviwe");
};

export default sellerAPI;
