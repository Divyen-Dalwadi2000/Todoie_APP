import {useEffect} from 'react'
import MyComponent from './components/MyComponent'

function App2() {
    useEffect(()=>{
        console.log("i am mounting ")
    }, [])
  return (
    <>
    <div className='bg-danger'>App2</div>
    <MyComponent/>
    </>
  )
}

export default App2