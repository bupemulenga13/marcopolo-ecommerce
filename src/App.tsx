import { BrowserRouter as Router } from "react-router-dom";
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
import ProductCatalog from "./components/Products/ProductCatalog";

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
      <Router>
        <ThemeProvider theme={themeLight}>
          <div>
            <MainNav />
          </div>
          {/* 
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
        </div> */}
          {/* <SignIn /> */}
          {/* <Checkout /> */}
          <div>
            <ProductCatalog />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
