import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { autocompleteClasses, Container } from "@mui/material";

const DeliveryService = () => {
  return (
    <Container>
      <Grid
        container
        style={{
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Grid item xs={4}>
          <Typography component="div" variant="h6">
            Free Shipping
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            For all tiles on wholesale price
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="div" variant="h6">
            Support 24/7
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Call out staff for assitance
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="div" variant="h6">
            Hot Offers
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Up to 50% discounts on select tiles
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeliveryService;
