import React, { useEffect } from "react";
import { Provider as AlertProvider } from "react-alert";
import Header from "./components/Headers";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

//Browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Alerts
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alerts";

//Import components
import Loading from "./components/Loading";

//Import Pages
import StudentPage from "./pages/StudentPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

//Import Actions
import { loadUser } from "./actions/auth";

//Alert options
const alertiOptions = {
  timeout: 4000,
  position: "top center",
};

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const auth = useSelector((state) => state.auth);
  const privateRoute = (component) =>
    auth.isLoading ? (
      <Loading />
    ) : !auth.isAuthenticated ? (
      <Navigate to="/login" />
    ) : (
      component
    );
  return (
    <>
      <Router>
        <AlertProvider template={AlertTemplate} {...alertiOptions}>
          <Alerts />
          <Header />
          <Routes>
            <Route exact path="/" element={privateRoute(<StudentPage />)} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AlertProvider>
      </Router>
    </>
  );
}
