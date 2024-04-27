import { useState } from "react";

function CounterUse() {
    
    const [count , setCount] = useState(0);
    const [name , setName] = useState("Dalwadi");
    console.log("Hello" , count);

  return (
    <div className="m-2">
        <p>The Count - {count}</p>
        <p>Name : {name} </p>
        <button onClick={()=> setName("Divyen")} className="btn btn-light btn-sm">ChangeName</button>
        <button onClick={()=> setCount(count+1)} className="btn btn-warning btn-sm">Increment</button>
        <button onClick={()=> setCount(count-1)} className="btn btn-danger btn-sm">Decrement</button>
    </div>
  )
}

export default CounterUse