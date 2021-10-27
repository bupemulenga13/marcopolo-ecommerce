import {
  Checkbox,
  Box,
  Grid,
  Typography,
  Container,
  FormGroup,
  FormControlLabel,
  Stack,
  Button,
  ImageList,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import ProductList from "../Products/ProductList";
import floorTiles from "../../utils/tileUtils";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TileVisualizer = () => {
  return (
    <>
      <Container fixed>
        <Box mt={4}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Tile Visualizer
          </Typography>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ px: 1, py: 2 }}
        >
          <Item>All</Item>
          <Item>Bathrooms</Item>
          <Item>Kitchens</Item>
          <Item>Bedrooms</Item>
          <Item>Living Space</Item>
          <Item>Distinct Spaces</Item>
        </Stack>
        <Box mt={4} mb={2}>
          <ProductList products={floorTiles} />
        </Box>
      </Container>
    </>
  );
};

export default TileVisualizer;
