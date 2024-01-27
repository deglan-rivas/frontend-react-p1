const Error = ({mensajeError}) => {
  return (
    <p className="bg-red-700 text-white text-center uppercase font-bold rounded-md py-3 px-4 mb-4">
      {mensajeError}
    </p>
  )
}

export default Error