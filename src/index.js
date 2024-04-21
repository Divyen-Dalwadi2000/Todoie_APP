import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header";
import Todoitem from "./components/Todoitem"
import Button from "./components/Button";

function App(){
  return( 
    <div className="bg-purple-300 flex justify-center items-center h-screen w-screen b-2 ">
      <div className="bg-white p-2 w-3/12 h-3/12 flex flex-col rounded-lg">
        <Header/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Button/>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);