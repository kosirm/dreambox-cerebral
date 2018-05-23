import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Dreambox" />
    <h2>My sandbox, fora... {"\u2728"}</h2>
    <h2>Zakaj ne bi delal v tem? V čem je c9 boljši? {"\u2728"}</h2>
    <h2>Ovi toolsi so zakon!!!... {"\u2728"}</h2>
    <h3>Jel to povezano sada sa githubom?</h3>
    <h3>Izgleda da je...</h3>
  </div>
);

render(<App />, document.getElementById("root"));
