import CounterUse from "./components/CounterUse";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem"
import Btn from "./components/Btn";



function App1(){
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


export  default App1;