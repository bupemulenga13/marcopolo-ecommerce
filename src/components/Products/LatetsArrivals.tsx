import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import latestArrivals from "../../utils/latestArrivals";

const LatestArrivals = () => {
  return (
    <Container maxWidth="md" component="main">
      <Typography
        component="h4"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Latest Arrivals
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Select from our wide range of new products
      </Typography>
      <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
          {latestArrivals.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.category} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default LatestArrivals;
