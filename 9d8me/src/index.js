import React from "react";
import { render } from "react-dom";
import makeSound from "./makeSound.js";
import Synthesizer from "./Synthesizer.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Synthesizer makeSound={makeSound} />
  </div>
);

render(<App makeSound={makeSound} />, document.getElementById("root"));
