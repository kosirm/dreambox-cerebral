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
    <h2>
      Sandbox za cerebral aplikaciju, da vidim kako če to iči... {"\u2728"}
    </h2>
    <h3>+ snack, da vidim kako ide tamo cerebral</h3>
    <h3>... a onda dolazi na red pagedraw</h3>
    <h3>... dodao sam readme</h3>
  </div>
);

render(<App />, document.getElementById("root"));
