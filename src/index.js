import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

serviceWorkerRegistration.register();
