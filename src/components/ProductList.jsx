// Cuarto componente de React.
// ProductList se encarga de recorrer los productos
// y mostrar una ProductCard por cada uno.

import ProductCard from './ProductCard'

function ProductList({ productos }) {

  return (

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">

      {productos.map((producto) => (

        <ProductCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          categoria={producto.categoria}
          imagen={producto.imagen}
          rating={producto.rating}
          opiniones={producto.opiniones}
        />

      ))}

    </div>

  )

}

export default ProductList