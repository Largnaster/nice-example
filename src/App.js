import { useState } from "react";
import "./App.css";

function App() {
  // --API DE LOS CHISTED DE CHUCK NORRIS-- https://api.chucknorris.io/jokes/random
  // --API PARA LAS IMAGENES RANDOM-- https://source.unsplash.com/random
  // --SERIA UN PLUS UTILIZAR MATERIAL UI-- https://material-ui.com/
  // DEFINICION DE VARIABLES
  const [contador, setContador] = useState(0);
  const [chiste, setChiste] = useState("");
  const [imagen, setImagen] = useState([]);

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
    <div className="App">
      <div>
        <h1>Cotador</h1>
        <div>
          <button onClick={aumentar}>+</button>
          <button onClick={reducir}>-</button>
          <button onClick={() => setContador(0)}>reset</button>
        </div>
        <p>{contador}</p>
      </div>
      <br />
      <hr />
      <div>
        <h1>Chistes</h1>
        <button onClick={getChiste}>Chiste</button>
        <p>{chiste}</p>
      </div>
      <br />
      <hr />
      <div>
        <h1>Imagenes</h1>
        <button onClick={getImagen}>Imagen</button>
        <br/>
        {imagen.map((src) => {
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
        })}
      </div>
    </div>
  );
}

export default App;
