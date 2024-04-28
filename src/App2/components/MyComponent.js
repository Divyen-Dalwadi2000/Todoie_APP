import { useEffect ,useState} from "react";


import React from 'react'

function MyComponent() {

    const [count , setCount] = useState(0);
    
    useEffect(()=>{
        console.log("My Component is Mounting....")
    },[]);

    // Here we set a count in "[]"
    useEffect(()=>{
        console.log(`Count got updated ${count}` )
    },[count]);

  return (
    <>
    <p> Counter - {count}</p>
    <button className="btn btn-danger" onClick={()=> setCount(count+1)}>Counter ++</button>
    </>
    
  )
}

export default MyComponent;