import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import App from "./app/layout/App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import './app/layout/styles.css';

const rootElement = document.getElementById("root");
const store = configureStore();

console.log(store.getState())

function render() {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  ReactDOM.render(app, rootElement);
}

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", () => setTimeout(render));
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
