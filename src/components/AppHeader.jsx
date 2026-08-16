// Primer componente de React.
// AppHeader se encarga del encabezado principal de la tienda.
// Se reutilizará en las diferentes páginas de la aplicación.

function AppHeader() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">
        Mi E-commerce
      </h1>
    </header>
  )
}

export default AppHeader