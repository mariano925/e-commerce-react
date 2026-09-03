// Página de categoría.

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ProductList from '../components/ProductList'
import traducciones from '../data/traducciones'

// Traducción de las categorías.
const categorias = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa masculina',
  "women's clothing": 'Ropa femenina'
}

function Categoria() {

  // Obtiene la categoría desde la URL.
  const { categoria } = useParams()

  // Estados de productos, carga y error.
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')


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

        setProductos(productosAdaptados)

      })

      .catch((error) => {

        console.error(
          'Error al obtener los productos:',
          error
        )

        setError(
          'No pudimos cargar los productos. Intentá nuevamente.'
        )

      })

      .finally(() => {
        setCargando(false)
      })

  }, [])


  // Filtra y traduce las categorías.
  const productosFiltrados =
    productos
      .filter(
        (producto) =>
          producto.categoria === categoria
      )
      .map((producto) => ({
        ...producto,
        categoria:
          categorias[producto.categoria] ||
          producto.categoria
      }))


  // Obtiene el nombre traducido.
  const nombreCategoria =
    categorias[categoria]


  return (

    <main className="min-h-screen bg-[var(--color-fondo)] px-4 py-6 md:px-10 md:py-10 lg:px-16">

      <div className="mx-auto max-w-7xl">


        {/* Breadcrumb */}

        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs md:mb-6 md:text-sm">

          <Link
            to="/"
            className="font-semibold text-[var(--color-texto-secundario)] transition hover:text-[var(--color-acento-hover)]"
          >
            Inicio
          </Link>

          <span className="text-[var(--color-borde)]">
            /
          </span>

          <span className="font-semibold text-[var(--color-texto)]">
            {nombreCategoria || 'Categoría'}
          </span>

        </div>


        {/* Volver */}

        <Link
          to="/"
          className="mb-6 inline-flex items-center rounded-xl border border-[var(--color-borde)] bg-[var(--color-superficie)] px-4 py-2.5 text-sm font-semibold text-[var(--color-texto)] shadow-sm transition hover:border-[var(--color-acento)] hover:bg-[var(--color-fondo)]"
        >
          ← Volver al catálogo
        </Link>


        {/* Encabezado */}

        <section className="mb-8 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm md:mb-10 md:rounded-3xl md:p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)] md:text-sm">
                Categoría
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight text-[var(--color-texto)] md:text-4xl lg:text-5xl">
                {nombreCategoria || 'Categoría no encontrada'}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-texto-secundario)] md:text-base">
                Explorá los productos disponibles en esta categoría.
              </p>

            </div>


            {!cargando &&
              !error &&
              nombreCategoria && (

                <div className="w-fit rounded-xl bg-[var(--color-fondo)] px-4 py-3">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-texto-secundario)]">
                    Productos
                  </p>

                  <p className="mt-1 text-xl font-bold text-[var(--color-texto)]">
                    {productosFiltrados.length}
                  </p>

                </div>

              )}

          </div>

        </section>


        {/* Cargando */}

        {cargando && (

          <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-12 text-center shadow-sm">

            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-borde)] border-t-[var(--color-acento)]" />

            <p className="mt-4 text-sm font-medium text-[var(--color-texto-secundario)]">
              Cargando productos...
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


        {/* Categoría inexistente */}

        {!cargando &&
          !error &&
          !nombreCategoria && (

            <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-10 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-fondo)] text-2xl">
                ?
              </div>

              <p className="mt-4 text-lg font-bold text-[var(--color-texto)]">
                Categoría no encontrada
              </p>

              <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                La categoría que estás buscando no existe.
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex rounded-xl bg-[var(--color-texto)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-acento-hover)]"
              >
                Ver catálogo
              </Link>

            </div>

          )}


        {/* Productos */}

        {!cargando &&
          !error &&
          nombreCategoria &&
          productosFiltrados.length > 0 && (

            <section>

              <div className="mb-6">

                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)] md:text-sm">
                  Nuestra selección
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[var(--color-texto)] md:text-3xl">
                  Productos de {nombreCategoria}
                </h2>

              </div>

              <ProductList
                productos={productosFiltrados}
              />

            </section>

          )}


        {/* Sin productos */}

        {!cargando &&
          !error &&
          nombreCategoria &&
          productosFiltrados.length === 0 && (

            <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-10 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-fondo)] text-2xl">
                🔎
              </div>

              <p className="mt-4 text-lg font-bold text-[var(--color-texto)]">
                No encontramos productos
              </p>

              <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                No hay productos disponibles en esta categoría.
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex rounded-xl bg-[var(--color-texto)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-acento-hover)]"
              >
                Volver al catálogo
              </Link>

            </div>

          )}

      </div>

    </main>

  )
}

export default Categoria

