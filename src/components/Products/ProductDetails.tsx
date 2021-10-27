import {
  Checkbox,
  Box,
  Grid,
  Typography,
  Container,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  return (
    <>
      <Box m={4} sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item>{/* Image */}</Grid>
              <Grid item>{/* Button */}</Grid>
              <Grid item>{/* Tile Color */}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item>{/* Tile Title */}</Grid>
              <Grid item>{/* Button */}</Grid>
              <Grid item>{/* Tile Color */}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetails;
