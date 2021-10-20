import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MainBanner from "../../images/main-banner.jpg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ fontWeight: "regular" }}
          gutterBottom
        >
          Marcopolo Tiles
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ fontWeight: "light" }}
          component="p"
        >
          World Class Tiles at affordable prices
        </Typography>
        <Button>Shop All</Button>
      </Container>
      <Container>
        <img src={MainBanner} alt="Main Banner" height="521px" width="1114px" />
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
