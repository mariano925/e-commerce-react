// Página de productos recomendados.

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ProductList from '../components/ProductList'
import traducciones from '../data/traducciones'

// Traducción de las categorías.
const categorias = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa masculina',
  "women's clothing": 'Ropa femenina'
}

function Recomendados() {

  // Guarda los productos recomendados.
  const [productos, setProductos] = useState([])

  // Estados de carga y error.
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')


  // Obtiene y ordena los productos.
  useEffect(() => {

    setCargando(true)
    setError('')

    fetch('https://fakestoreapi.com/products')

      .then((respuesta) => {

        if (!respuesta.ok) {
          throw new Error(
            'No se pudieron obtener los productos.'
          )
        }

        return respuesta.json()

      })

      .then((datos) => {

        // Adapta los productos al formato del catálogo.
        const productosAdaptados = datos.map((producto) => {

          const traduccion =
            traducciones[producto.id]

          return {

            id: producto.id,

            nombre:
              traduccion?.titulo ||
              producto.title,

            precio:
              producto.price,

            categoria:
              categorias[producto.category] ||
              producto.category,

            imagen:
              producto.image,

            descripcion:
              traduccion?.descripcion ||
              producto.description,

            rating:
              producto.rating?.rate,

            opiniones:
              producto.rating?.count

          }

        })


        // Ordena desde la mejor valoración.
        const productosOrdenados =
          productosAdaptados.sort(
            (a, b) =>
              (b.rating || 0) -
              (a.rating || 0)
          )


        // Selecciona los 6 mejor valorados.
        const seleccion =
          productosOrdenados.slice(0, 6)


        setProductos(seleccion)

      })

      .catch((error) => {

        console.error(
          'Error al obtener productos recomendados:',
          error
        )

        setError(
          'No pudimos cargar los productos recomendados. Intentá nuevamente.'
        )

      })

      .finally(() => {

        setCargando(false)

      })

  }, [])


  return (

    <main className="min-h-screen bg-[var(--color-fondo)]">


      {/* Encabezado */}

      <section className="bg-[var(--color-texto)] px-6 py-16 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-gray-300 transition hover:text-[var(--color-acento)]"
          >
            ← Volver al catálogo
          </Link>


          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--color-acento)]/40 bg-[var(--color-acento)]/10 px-4 py-2 text-sm font-medium text-[var(--color-acento)]">
              ⭐ Selección especial
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Productos recomendados
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              Descubrí algunos de los productos mejor valorados
              de nuestro catálogo.
            </p>

          </div>

        </div>

      </section>


      {/* Productos */}

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">


        {/* Cargando */}

        {cargando && (

          <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-12 text-center shadow-sm">

            <p className="text-[var(--color-texto-secundario)]">
              Cargando productos recomendados...
            </p>

          </div>

        )}


        {/* Error */}

        {!cargando && error && (

          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

            <p className="font-medium text-red-700">
              {error}
            </p>

          </div>

        )}


        {/* Lista de recomendados */}

        {!cargando &&
          !error &&
          productos.length > 0 && (

            <>

              <div className="mb-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-texto-secundario)]">
                  Nuestra selección
                </p>

                <h2 className="mt-1 text-3xl font-bold text-[var(--color-texto)]">
                  Los más destacados
                </h2>

              </div>

              <ProductList
                productos={productos}
              />

            </>

          )}

      </section>

    </main>

  )

}

export default Recomendados