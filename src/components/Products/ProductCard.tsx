import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <ProductImgStyle alt="" src="" />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            Product Title
          </Typography>
        </Link>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="span"
            variant="body1"
            sx={{
              color: "text.disabled",
              textDecoration: "line-through",
            }}
          >
            Product Price
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
export default ProductCard;
