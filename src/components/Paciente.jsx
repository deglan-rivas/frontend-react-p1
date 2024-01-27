const Paciente = () => {
  return (
    <div className="bg-white px-4 py-4 rounded-md mx-2 mb-4">
      <p className="font-bold uppercase text-gray-700 mb-4">
        Nombre: {""}
        <span className="normal-case font-normal">
          Mr. Doe's Pet
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Propietario: {" "}
        <span className="normal-case font-normal">
          John Doe
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Email: {" "}
        <span className="normal-case font-normal">
          deglan.rivas@pucp.edu.pe
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Fecha alta: {" "}
        <span className="normal-case font-normal">
          2024-02-02
        </span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-4">
        Síntomas: {" "}
        <span className="normal-case font-normal">
          Mr. Doe's pet sleeps all day
        </span>
      </p>

      <div className="flex justify-between">
        <input 
          type="submit" 
          className="bg-indigo-600 text-white font-bold uppercase text-center px-8 py-2 rounded-md mb-2"  
          value="Editar"
        />

        <input 
          type="submit" 
          className="bg-red-700 text-white font-bold uppercase text-center px-8 py-2 rounded-md mb-2"  
          value="Eliminar"
        />
      </div>
    </div>
  )
}

export default Paciente