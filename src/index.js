
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
import Giphy from "./Giphy"

import HelloWorld from "./HelloWorld"
import MyPage from "./MyPage"
import "./styles.css"


//Componentes siempre en mayuscula!!
ReactDom.createRoot(document.getElementById("root")).render(
    //renderizar todo lo que esta en root
    //<HelloWorld titulo="Formulario feo" fecha="03/02/2023"/>
    //<Giphy/>

    //restrict mode genera warnings
  <React.StrictMode> 
    <MyPage/>
  </React.StrictMode>
)