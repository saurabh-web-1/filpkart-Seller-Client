// src > # App.jsx
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { loadUser } from "./redux/slices/authSlice";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
