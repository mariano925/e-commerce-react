function Sidebar({ seleccionarCategoria }) {
  return (
    <aside className="w-64 p-6 border-r bg-gray-100">

      <h2 className="text-xl font-bold mb-4">
        Categorías
      </h2>

      <ul className="space-y-2">

         <li onClick={() => seleccionarCategoria('')}>
             Todos
        </li>
        <li>Ropa</li>
        <li>Calzado</li>

        <li onClick={() => seleccionarCategoria('jewelery')}>
          Joyas
        </li>

      </ul>

    </aside>
  )
}

export default Sidebar