import { useState } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='md:flex'>
        <Formulario
        
        />
        <ListadoPacientes
        
        />
      </div>
    </div>
  )
}

export default App
