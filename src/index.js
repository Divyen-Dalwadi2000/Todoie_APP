import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import CounterUse from "./components/CounterUse";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem"
import Btn from "./components/Btn";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return( 
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-info w-50 p-4 border border-2 rounded">
        <CounterUse/>
        <Header title="Todoie App"/>

        <Todoitem text="code"/>
        <Todoitem text="Eat"/>
        <Todoitem completed={true} text="Running"/>

        <Btn/>
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);