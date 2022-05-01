import { Typography, Button, Box, Container, Stack } from "@mui/material";

const Introduction = () => {
  return (
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
          I am Bryann and here are some of the web pages I have develop even for
          college assigments or personal purposes.
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
  );
};

export default Introduction;
