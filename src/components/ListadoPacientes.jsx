import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="mb-4 md:w-1/2 lg:w-2/3 h-screen overflow-auto">
      <h2 className="text-center font-bold text-3xl mb-4">
        Listado Pacientes
      </h2>

      <p className="text-center mb-12">
        Administra tus  {""}
        <span className="font-bold text-indigo-600 text-center text-lg">
          Pacientes y Citas
        </span>
      </p>

      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
    </div>
  )
}

export default ListadoPacientes

// PROBAR commiteando este maquetado, luego el .github.workflows a ver si triggerea algo pues debe ignorar esos .yml, pero el primero no, fácil no evnía nada y hay que hacer otro dummy commit xD