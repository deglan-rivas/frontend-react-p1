const Paciente = ({paciente, handleEliminar, handleEditar}) => {
  const {
    mascota, 
    propietario, 
    email, 
    fecha, 
    sintomas,
    id} = paciente
  
  return (
    <div className="bg-white px-4 py-4 rounded-md mx-2 mb-4">
      <p className="font-bold uppercase text-gray-700 mb-4">
        Nombre: {""}
        <span className="normal-case font-normal">
          {mascota}
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Propietario: {" "}
        <span className="normal-case font-normal">
          {propietario}
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Email: {" "}
        <span className="normal-case font-normal">
          {email}
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Fecha alta: {" "}
        <span className="normal-case font-normal">
          {fecha}
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Síntomas: {" "}
        <span className="normal-case font-normal">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between">
        <input 
          type="button" 
          className="bg-indigo-600 text-white font-bold uppercase text-center px-8 py-2 rounded-md mb-2 hover:cursor-pointer hover:bg-indigo-800 transition-colors"  
          value="Editar"
          onClick={ () => handleEditar(paciente)}
        />

        <input 
          type="button" 
          className="bg-red-600 text-white font-bold uppercase text-center px-8 py-2 rounded-md mb-2 hover:cursor-pointer hover:bg-red-700 transition-colors"  
          value="Eliminar"
          onClick={ () => handleEliminar(id) }
        />
      </div>
    </div>
  )
}

export default Paciente