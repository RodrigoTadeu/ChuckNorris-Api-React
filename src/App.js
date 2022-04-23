import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [palavra, setPalavra] = useState("");
  const [piada, setPiada] = useState("");

  const onblurCep = () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${palavra}`)
      .then((res) => res.json())
      .then((data) => {
        setPiada(data);
      });
  };

  return (
    <div className="tudo">
      <h1 className="t">Frases Chuck Norris</h1>
      <form onSubmit={(e) => onblurCep(e.preventDefault())}>
        <div className="label">
          <label> Palavra: </label>
          <input
            type="text"
            onChange={(e) => setPalavra(e.target.value)}
            className="input"
          />

          <button type="submit" className="b">
            Enviar
          </button>
        </div>

        <div>
          <p className="p">{piada.value}</p>
        </div>
      </form>
    </div>
  );
}
