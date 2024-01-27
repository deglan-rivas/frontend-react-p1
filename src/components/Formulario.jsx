const Formulario = () => {
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
      <form className="bg-white rounded-md shadow-md py-6 px-6 mx-2 mb-12 md:mb-0">
        <div className="mb-4">
          <p className="bg-red-700 text-white text-center uppercase font-bold rounded-md py-3 px-4 mb-4">
            Todos los campos son obligatorios
          </p>

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
          />
        </div>

        <input 
          type="submit" 
          value="Agregar Paciente"
          className="bg-indigo-600 text-white font-bold uppercase text-center rounded-md w-full px-4 py-3 "
        />
      </form>
    </div>
  )
}

export default Formulario