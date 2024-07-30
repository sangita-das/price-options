
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LinkChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones.jsx'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {
 

  return (
    <>
      <Navbar/>
      
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
     <DaisyNav/>

     <PriceOptions/>
     <LineChart/>
     <Phones/>
      
    </>
  )
}

export default App
