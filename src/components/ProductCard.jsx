// Tercer componente de React.
// ProductCard representa un producto individual.
// Recibe datos mediante props.

function ProductCard(props) {
  return (
    <article className="border rounded-lg p-4 shadow-md bg-white">

      {/* La prop imagen permite mostrar una imagen diferente para cada producto. */}
      <div className="h-40 rounded-md mb-4 overflow-hidden">
        <img
          src={props.imagen}
          alt={props.nombre}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl font-bold">
        {props.nombre}
      </h2>

      <p className="text-gray-500">
        {props.categoria}
      </p>

      <p className="text-lg font-semibold mt-2">
        ${props.precio}
      </p>

      {/* Evento: al hacer clic, ejecutamos una acción. */}
      <button
        onClick={() => alert(`Producto: ${props.nombre}`)}
        className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700"
      >
        Ver producto
      </button>

    </article>
  )
}

export default ProductCard