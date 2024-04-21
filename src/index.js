import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header";
import Todoitem from "./components/Todoitem"
import Button from "./components/Button";

function App(){
  return( 
    <>
    <Header/>
    <Todoitem/>
    <Button/>


    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);