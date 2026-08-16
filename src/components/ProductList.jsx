// Cuarto componente de React.
// ProductList se encarga de recorrer los productos
// y mostrar una ProductCard por cada uno.

import ProductCard from './ProductCard'

function ProductList({ productos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          categoria={producto.categoria}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default ProductList