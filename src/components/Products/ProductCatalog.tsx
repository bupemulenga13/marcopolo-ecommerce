import CatalogList from "./ImagesList";
import {
  Checkbox,
  Box,
  Grid,
  Typography,
  Container,
  FormGroup,
  FormControlLabel,
  Stack,
} from "@mui/material";
import ProductSort from "./ProductSort";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import floorTiles from "../../utils/tileUtils";

const ProductCatalog = () => {
  return (
    <div>
      <Container fixed>
        <Box mt={4}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Products
          </Typography>
        </Box>

        <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Floor Tiles"
            />
            <FormControlLabel control={<Checkbox />} label="Wall Tiles" />
          </FormGroup>
        </div>
        <div>
          <Stack
            direction="row"
            flexWrap="wrap-reverse"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mb: 5 }}
          >
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <ProductFilter />
              <ProductSort />
            </Stack>
          </Stack>
          <Box mt={2} mb={4}>
            <ProductList products={floorTiles} />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default ProductCatalog;
