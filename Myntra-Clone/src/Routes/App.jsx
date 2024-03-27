import { useState } from "react"
import "../App.css"
import FetchItems from "../Components/FetchItems"
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Loading from "../Components/Loading"

function App() {
  
  const [loading,setLoading]=useState(false);

  return (
    <>
      <Header />
        <FetchItems setLoading={setLoading}/>
        {loading ? <Outlet/> : <Loading/> }
      <Footer />
    </>
  )
}

export default App
