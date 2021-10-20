import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        DigitalProphets
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const footers = [
  {
    title: "Marcopolo Tiles",
    description: ["Our story", "Clientele", "Contact us", "Locations"],
  },
  {
    title: "About Us",
    description: ["About Marcopolo", "About Marcopolo", "About Marcopolo"],
  },
  {
    title: "Resources",
    description: [
      "Contact Sales",
      "Payment Options",
      "Delivery Service",
      "Vizualise",
      "Other resource",
    ],
  },
];

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footer;
