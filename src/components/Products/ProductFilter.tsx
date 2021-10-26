import React from "react";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductFilter = () => {
  return (
    <>
      <Button disableRipple color="inherit" onClick={() => {}}>
        Filters&nbsp;
      </Button>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ px: 1, py: 2 }}
      >
        <Item>Size</Item>
        <Item>Dimensions</Item>
        <Item>Color</Item>
        <Item>Finish/Texture</Item>
        <Item>Finish/Texture</Item>
        <Item>Application</Item>
        <Item>Suitable Rooms</Item>
      </Stack>
    </>
  );
};

export default ProductFilter;
