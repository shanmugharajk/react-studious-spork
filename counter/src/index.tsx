import "~/index.css";

import ReactDOM from "react-dom";

import { Counter, counterStore } from "~/counter";

ReactDOM.render(
  <Counter counterStore={counterStore} />,
  document.getElementById("root")
);
