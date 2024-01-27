import { useState } from 'react'  
import Error from './Error'
import { generarId } from '../../helpers/index.js'

const Formulario = ({listaPacientes, setListaPacientes}) => {
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [isValidate, setIsValidate] = useState(false)
  const [mensajeError, setMensajeError] = useState('')

  const [paciente, setPaciente] = useState({})

  const nuevoPaciente = {
    mascota,
    propietario,
    email,
    fecha,
    sintomas,
    id: generarId()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.values(nuevoPaciente).includes('')) {
      setIsValidate(false)
      setMensajeError('Todos los campos son obligatorios')
      return
    }

    setIsValidate(true)
    setMensajeError('')
    setListaPacientes(
      [...listaPacientes, nuevoPaciente]
    )
    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-1/3">
      <h2 className="font-bold text-3xl text-center mb-4">
        Seguimiento Pacientes
      </h2>
      <p className="mb-12 text-center text-lg">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">
          Adminístralos
        </span>
      </p>
      <form 
        className="bg-white rounded-md shadow-md py-6 px-6 mx-2 mb-12 md:mb-0"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          {mensajeError &&
            <Error
              mensajeError = {mensajeError}
            />
          }

          <label 
            htmlFor="mascota"
            className="font-bold uppercase text-gray-700 block mb-2"
          >
            Nombre Mascota
          </label>
          <input 
            type="text" 
            id="mascota" 
            placeholder="Mr. Doe's Pet"
            className="border-2 px-2 py-2 w-full"
            value={mascota}
            onChange={e => setMascota(e.target.value.trim())}
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="propietario"
            className="font-bold uppercase text-gray-700 block mb-2"
          >
            Nombre Propietario
          </label>
          <input 
            type="text" 
            id="propietario" 
            placeholder="Mr.John Doe"
            className="border-2 px-2 py-2 w-full"
            value={propietario}
            onChange={e => setPropietario(e.target.value.trim())}
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="email"
            className="font-bold uppercase text-gray-700 block mb-2"
          >
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="john.doe@example.com"
            className="border-2 px-2 py-2 w-full"
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="alta"
            className="font-bold uppercase text-gray-700 block mb-2"
          >
            Alta
          </label>
          <input 
            type="date" 
            id="alta" 
            className="border-2 px-2 py-2 w-full"
            value={fecha}
            onChange={e => setFecha(e.target.value.trim())}
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="síntomas"
            className="font-bold uppercase text-gray-700 block mb-2"
          >
            Síntomas
          </label>
          <textarea 
            id="síntomas" 
            placeholder="Mr. John Doe's pet sleeps all day"
            className="border-2 px-2 py-2 w-full"
            value={sintomas}
            onChange={e => setSintomas(e.target.value.trim())}
          />
        </div>

        <input 
          type="submit" 
          value="Agregar Paciente"
          className="bg-indigo-600 text-white font-bold uppercase text-center rounded-md w-full px-4 py-3 hover:cursor-pointer hover:bg-indigo-700 transition-colors"
        />
      </form>
    </div>
  )
}

export default Formulario