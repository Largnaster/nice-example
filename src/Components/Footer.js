import { Box, Typography, Link } from "@mui/material";

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

const Footer = () => {
  return (
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
  );
};

export default Footer;
