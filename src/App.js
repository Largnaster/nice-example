import { useState } from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import "./App.css";

// ESTILOS PARA LAS IMAGENES 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: 'auto'
  }
}))

function App() {
  // -- link a github: https://github.com/Largnaster/nice-example
  // --SERIA UN PLUS UTILIZAR MATERIAL UI-- https://material-ui.com/
  // DEFINICION DE VARIABLES
  const [contador, setContador] = useState(0);
  const [chiste, setChiste] = useState("");
  const [imagen, setImagen] = useState([]);
  // estilos
  const classes = useStyles();

  // FUNCIONE
  const aumentar = () => {
    setContador(contador + 1);
  };
  const reducir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const getChiste = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const content = await response.json();
    console.log(content.value);
    setChiste(content.value);
  };
  // const getChiste = () => {
  //   fetch("https://api.chucknorris.io/jokes/random")
  //   .then(res => res.json())
  //   .then((result) => {
  //     console.log(result.value)
  //   })
  // }
  const getImagen = async () => {
    const response = await fetch("https://source.unsplash.com/random");
    console.log(response["url"]);
    setImagen((imagenes) => [...imagenes, response["url"]]);

    // fetch('https://source.unsplash.com/random')
    // .then(res => res.json())
    // .then((content) => {
    //   console.log(content)
    // })
  };

  // RENDER
  return (
    <Container>
      <div>
        <h1>Contador</h1>
        <ButtonGroup color="primary" variant="contained" aria-label="contained primary button group">
          <Button onClick={aumentar}>
            +
          </Button>
          <Button onClick={reducir}>-</Button>
          <Button onClick={() => setContador(0)}>reset</Button>
        </ButtonGroup>
        <p>{contador}</p>
      </div>
      <br />
      <hr />
      <div>
        <h1>Chistes</h1>
        <Button variant="contained" onClick={getChiste}>Chiste</Button>
        <p>{chiste}</p>
      </div>
      <br />
      <hr />
      <div>
        <h1>Imágenes</h1>
        <Button variant="contained" onClick={getImagen}>Imagen</Button>
        <br />
        <div className={classes.root}>
          <ImageList rowHeight={300} className={classes.imageList} cols={3}>
            {imagen.map((src) => (
              <ImageListItem key={src} cols={1}>
                <img src={src} alt={"Una imagen simple"} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        {/* {imagen.map((src) => {
          return (
            <img
              id={"ima"}
              key={src}
              src={src}
              alt={"Something or someone"}
              width="400"
              height="400"
            ></img>
          );
        })} */}
        <br/>
      </div>
    </Container>
  );
}

export default App;
