import { useState, useEffect } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [listaPacientes, setListaPacientes] = useState(JSON.parse(
    localStorage.getItem('listaPacientes') ?? '[]'
    ))
  const [pacienteEditado, setPacienteEditado] = useState({})
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    localStorage.setItem('listaPacientes', 
      JSON.stringify(listaPacientes ?? [])
    )
  }, [listaPacientes])

  const handleEliminar = id => {
    const confirmation = confirm('Seguro de eliminar este aciente? Esta acción es irreversible')

    if (confirmation) {
      setListaPacientes(
        listaPacientes.filter( paciente => paciente.id !== id)
      )
    }
  }

  const handleEditar = pacienteEditadoState => {
    setPacienteEditado(pacienteEditadoState)
    setIsChecking(true)
  }

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='md:flex'>
        <Formulario
          listaPacientes = {listaPacientes}
          setListaPacientes = {setListaPacientes}
          pacienteEditado = {pacienteEditado}
          isChecking = {isChecking}
          setIsChecking = {setIsChecking}
          setPacienteEditado = {setPacienteEditado}
        />
        <ListadoPacientes
          listaPacientes = {listaPacientes}
          handleEliminar = {handleEliminar}
          handleEditar = {handleEditar}
        />
      </div>
    </div>
  )
}

export default App
