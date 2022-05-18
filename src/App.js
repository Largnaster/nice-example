import * as React from "react";
import { CssBaseline, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Footer from "./Components/Footer";
import CardItem from "./Components/CardItem";
import Introduction from "./Components/Introduction";

// defining cards
const pages = [
  {
    number: 1,
    name: "pwa",
    link: "https://pwa-batr.herokuapp.com",
    description:
      "This is a pwa web, was made using HTML, CSS and JavaScript. This uses the anilist API to list some shows within cards.",
  },
  {
    number: 2,
    name: "vr",
    link: "https://constellation-vr.herokuapp.com",
    description:
      "This application uses Aframe to build a VR interactive web which shows zodiac constellations with some descriptions.",
  },
  {
    number: 3,
    name: "wind",
    link: "https://app-wind.herokuapp.com",
    description:
      "Made with Vue.js it's a personal project made for a friend when he was straming, it has a basic discord bot attached to it.",
  },
  {
    number: 4,
    name: "poke",
    link: "https://poke-next-six.vercel.app",
    description:
      "Made using Next.js, this is a simple application which uses pokeapi to get a list of pokemon and basic information of each pokemon.",
  },
  {
    number: 5,
    name: "calculator",
    link: "https://largnaster-react-calculator.herokuapp.com",
    description: "Basic calculator made using Formik and React, it calculates the return of an investment."
  }
];

// Theme to be used by the application
const theme = createTheme();

// ESTILOS PARA LAS IMAGENES

function App() {
  // RENDER
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Introduction />
        {/* End hero unit */}
        <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={4}>
            {pages.map((page) => (
              <Grid item key={page.number} xs={12} sm={6} md={4}>
                <CardItem cardItem={page} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
