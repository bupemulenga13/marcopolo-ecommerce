import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import floorTiles from "../../utils/tileUtils";
import Box from "@mui/material/Box";

const CatalogList = () => {
  return (
    <Box mt={4}>
      <ImageList sx={{ width: 500, height: 450 }}>
        {floorTiles.map((item) => (
          <ImageListItem key={item.src}>
            <img
              src={`${item.src}?w=248&fit=crop&auto=format`}
              srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.finishing}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default CatalogList;
