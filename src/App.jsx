import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> This is from main branch</div>
    <div>this is second commmit from main branch</div>
    <div>this is 3rd commmit from main branch</div>
      <h1>
        This is from new-branch of git
        This is from main of git
      </h1>

    </>
  )
}

export default App
