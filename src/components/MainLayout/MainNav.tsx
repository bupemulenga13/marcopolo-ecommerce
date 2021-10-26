import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ShoppingCartOutlined, SearchOutlined } from "@mui/icons-material";

const MainNavBar = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Marcopolo Tiles
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              Latest Items
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              Products
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              My Account
            </Link>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              My Cart
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default MainNavBar;
