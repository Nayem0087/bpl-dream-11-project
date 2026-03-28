
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Homepage/Banner/Banner'
import Players from './Components/Homepage/Players/Players'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

    {/* react toastify */}
      <ToastContainer />
    </>
  )
}

export default App
