import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

// function for the copyright
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Made with MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// defining cards
const pages = [
  {
    number: 1,
    name: "pwa",
    link: "https://pwa-batr.herokuapp.com",
  },
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
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 4,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I am Bryann and here are some of the web pages I have develop even
              for college assigments or personal purposes.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                href="https://github.com/Largnaster/"
                target="_blank"
                rel="noopener"
              >
                GitHub profile
              </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/bryann-arlye-torres-rodríguez-bbb016198/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {pages.map((page) => (
              <Grid item key={page.number} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "5%",
                    }}
                    image="/static/pwa_image.png"
                    alt={page.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      PWA
                    </Typography>
                    <Typography>
                      This is a pwa web, is made using HTML, CSS and JavaScript.
                      This uses the anilist API to list some shows within cards.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={page.link}
                      target="_blank"
                      rel="noopener"
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Portfolio made by Largnaster
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
