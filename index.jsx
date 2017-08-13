import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap';
import { render } from "react-dom";
import React from "react";
import App from "./Components/App.jsx";
import Styles from './Styles/index.scss';

const containerEl = document.getElementById("container");

render(
  <App/>,
  containerEl
);
