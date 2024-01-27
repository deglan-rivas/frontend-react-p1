import { useState } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [listaPacientes, setListaPacientes] = useState([])

  const handleEliminar = id => {
    const confirmation = confirm('Seguro de eliminar este aciente? Esta acción es irreversible')

    if (confirmation) {
      setListaPacientes(
        listaPacientes.filter( paciente => paciente.id !== id)
      )
    }
  }

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='md:flex'>
        <Formulario
          listaPacientes = {listaPacientes}
          setListaPacientes = {setListaPacientes}
        />
        <ListadoPacientes
          listaPacientes = {listaPacientes}
          handleEliminar = {handleEliminar}
        />
      </div>
    </div>
  )
}

export default App
