import { useEffect ,useState} from "react";


import React from 'react'

function MyComponent() {

    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("My Component is Mounting....")

        return function () {
          console.log("Unmounting.................");
        }
    },[]);

    // Here we set a count in "[]" so when the count updated the useEffect call
    useEffect(()=>{
        console.log(`Count got updated ${count}` )

        return function(){
          console.log(`The count which updated ${count}`);
        }
    },[count]);

  return (
    <>
    <p> Counter - {count}</p>
    <button className="btn btn-danger" onClick={()=> setCount(count+1)}>Counter ++</button>

    </>
    
  )
}

export default MyComponent;