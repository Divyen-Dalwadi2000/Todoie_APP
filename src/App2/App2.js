import { useEffect, useState } from 'react'
import MyComponent from './components/MyComponent'

function App2() {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("i am mounting ");

   
  }, []);

  useEffect(() => { console.log("The Toggle Button click"); }, [isVisible]);

  return (
    <>
      <div className='bg-danger'>App2
        {isVisible ? <MyComponent /> : <></>}
      </div>
      <button className="btn btn-info" onClick={() => setVisible(!isVisible)}>Click To Toggle</button>
    </>
  )
}

export default App2