import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/Contador'
import Carros from './componentes/Carros'
import Anuidade from './componentes/Anuidade'

function App() {

  return (
    <>
    <Contador/>
    <Carros/>
    <Anuidade/>

    </>
  )
}


export default App
