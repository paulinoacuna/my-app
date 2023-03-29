
/**import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
 */

//extensiones: simple react snippets

//imr+tab
import React from "react"
import ReactDom from "react-dom/client"
//Router
import { BrowserRouter } from "react-router-dom"
//Redux
import {Provider} from "react-redux"
import {store} from "./store/store"

import JournalApp from "./JournalApp"
//import MyPage from "./examples/MyPage"

import "./styles.css"

 /* Credenciales

 Estudiante

    email: "wais@gmail.com",
    password: "1010054875"

  Profesor


    email: "pepito@gmail.com",
    password: "passAdmin"
  */

ReactDom.createRoot(document.getElementById("root")).render(

    //restrict mode genera warnings
  <React.StrictMode>   

    <Provider store={store}>
      <BrowserRouter>
        <JournalApp/>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
)