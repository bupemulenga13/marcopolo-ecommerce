import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainNav from "./components/MainLayout/MainNav";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LandingPage from "./components/MainLayout/LandingPage";
import Footer from "./components/MainLayout/Footer";
import ProductGroupings from "./components/Products/ProductGroupings";
import CustomerTypes from "./components/Customer/CustomerTypes";
import Checkout from "./components/Cart/Checkout/Checkout";
import LatestArrivals from "./components/Products/LatetsArrivals";
import SignIn from "./components/Authentication/SignIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeliveryService from "./components/MainLayout/DeliveryService";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#FEEAFA",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeLight}>
        <div>
          <MainNav />
        </div>
        <div>
          <LandingPage />
        </div>
        <div>
          <DeliveryService />
        </div>
        <div>
          <LatestArrivals />
        </div>
        <div>
          <ProductGroupings />
        </div>
        <div>
          <CustomerTypes />
        </div>
        <div>
          <Footer />
        </div>
        {/* <SignIn /> */}
        {/* <Checkout /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
