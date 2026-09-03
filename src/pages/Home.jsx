// Página principal del catálogo.

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

function Home() {

  // Estado de productos.
  const [productos, setProductos] = useState([])

  // Estado del buscador.
  const [busqueda, setBusqueda] = useState('')

  // Estados de carga y error.
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')


  // Obtiene los productos desde la API.
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

        setProductos(productosAdaptados)

      })

      .catch((error) => {

        console.error(
          'Error al obtener productos:',
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


  // Filtra productos por nombre, categoría o descripción.
  const termino =
    busqueda.toLowerCase().trim()

  const productosBuscados =
    productos.filter((producto) => {

      return (
        producto.nombre
          .toLowerCase()
          .includes(termino) ||

        producto.categoria
          .toLowerCase()
          .includes(termino) ||

        producto.descripcion
          .toLowerCase()
          .includes(termino)
      )

    })


  return (

    <main className="min-h-screen bg-[var(--color-fondo)]">


      {/* Hero */}

      <section className="relative overflow-hidden bg-[var(--color-texto)] px-6 py-16 text-white md:px-10 md:py-20 lg:px-16">

        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--color-acento)]/20 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[var(--color-acento)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-[var(--color-acento)]/50 bg-[var(--color-acento)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-acento)]">
              Catálogo online
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">

              Encontrá lo que buscás.

              <span className="block text-[var(--color-acento)]">
                Consultá directamente.
              </span>

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">

              Explorá productos, compará opciones y consultá
              directamente por WhatsApp de manera rápida y sencilla.

            </p>

            <a
              href="#productos"
              className="mt-8 inline-flex items-center rounded-xl bg-[var(--color-acento)] px-6 py-3 font-bold text-[var(--color-texto)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-acento-hover)]"
            >
              Explorar catálogo

              <span className="ml-2">
                ↓
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* Contenido principal */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12 lg:px-16">


        {/* Buscador */}

        <div className="mb-10 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm md:p-6">

          <div className="mb-4">

            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
              Buscar
            </p>

            <h2 className="mt-1 text-xl font-bold text-[var(--color-texto)]">
              Encontrá tu próximo producto
            </h2>

          </div>

          <div className="relative">

            <input
              id="busqueda"
              type="text"
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
              placeholder="Buscar productos o categorías..."
              className="w-full rounded-xl border border-[var(--color-borde)] bg-[var(--color-fondo)] px-5 py-4 pr-12 text-[var(--color-texto)] outline-none transition focus:border-[var(--color-acento)] focus:ring-2 focus:ring-[var(--color-acento)]/20"
            />

            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[var(--color-texto-secundario)]">
              ⌕
            </span>

          </div>

        </div>


        {/* Categorías */}

        {!termino && (

          <section className="mb-10">

            <div className="mb-5">

              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
                Categorías
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[var(--color-texto)] md:text-3xl">
                Explorá por categoría
              </h2>

            </div>


            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

              <Link
                to="/categoria/electronics"
                className="group rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-acento)] hover:shadow-lg"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-fondo)] text-xl">
                  💻
                </div>

                <h3 className="font-bold text-[var(--color-texto)]">
                  Electrónica
                </h3>

                <p className="mt-1 text-xs text-[var(--color-texto-secundario)]">
                  Tecnología y accesorios
                </p>

              </Link>


              <Link
                to="/categoria/jewelery"
                className="group rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-acento)] hover:shadow-lg"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-fondo)] text-xl">
                  💎
                </div>

                <h3 className="font-bold text-[var(--color-texto)]">
                  Joyería
                </h3>

                <p className="mt-1 text-xs text-[var(--color-texto-secundario)]">
                  Accesorios y elegancia
                </p>

              </Link>


              <Link
                to="/categoria/men's clothing"
                className="group rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-acento)] hover:shadow-lg"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-fondo)] text-xl">
                  👔
                </div>

                <h3 className="font-bold text-[var(--color-texto)]">
                  Ropa masculina
                </h3>

                <p className="mt-1 text-xs text-[var(--color-texto-secundario)]">
                  Prendas para hombre
                </p>

              </Link>


              <Link
                to="/categoria/women's clothing"
                className="group rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-acento)] hover:shadow-lg"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-fondo)] text-xl">
                  👗
                </div>

                <h3 className="font-bold text-[var(--color-texto)]">
                  Ropa femenina
                </h3>

                <p className="mt-1 text-xs text-[var(--color-texto-secundario)]">
                  Prendas para mujer
                </p>

              </Link>

            </div>

          </section>

        )}


        {/* Recomendados */}

        {!termino && (

          <section className="mb-10">

            <Link
              to="/recomendados"
              className="group block overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-texto)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="inline-flex rounded-full border border-[var(--color-acento)]/40 bg-[var(--color-acento)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-acento)]">
                    ⭐ Selección especial
                  </span>

                  <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                    Recomendados
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
                    Descubrí algunos de los productos mejor valorados de nuestro catálogo.
                  </p>

                </div>


                <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--color-acento)] transition group-hover:translate-x-1">

                  Ver recomendados

                  <span>
                    →
                  </span>

                </div>

              </div>

            </Link>

          </section>

        )}


        {/* Todos los productos */}

        <section
          id="productos"
          className="scroll-mt-24"
        >

          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)] md:text-sm">

                {termino
                  ? 'Resultados de búsqueda'
                  : 'Catálogo'
                }

              </p>

              <h2 className="mt-1 text-2xl font-bold text-[var(--color-texto)] md:text-3xl">

                {termino
                  ? `Resultados para "${busqueda}"`
                  : 'Todos los productos'
                }

              </h2>

            </div>


            {!cargando && !error && (

              <p className="text-sm font-semibold text-[var(--color-texto-secundario)]">

                {productosBuscados.length} productos encontrados

              </p>

            )}

          </div>


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


          {/* Sin resultados */}

          {!cargando &&
            !error &&
            productosBuscados.length === 0 && (

              <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-10 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-fondo)] text-2xl">
                  🔎
                </div>

                <p className="mt-4 text-lg font-bold text-[var(--color-texto)]">
                  No encontramos productos
                </p>

                <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                  Probá con otro nombre, categoría o término de búsqueda.
                </p>

              </div>

            )}


          {/* Productos */}

          {!cargando &&
            !error &&
            productosBuscados.length > 0 && (

              <ProductList
                productos={productosBuscados}
              />

            )}

        </section>


        {/* Consulta */}

        <section className="mt-16 rounded-3xl bg-[var(--color-texto)] px-6 py-10 text-center text-white md:px-10 md:py-12">

          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento)]">
            ¿Encontraste lo que buscabas?
          </p>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Consultá directamente por WhatsApp
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
            Elegí un producto del catálogo y consultá por disponibilidad,
            precio y condiciones.
          </p>

        </section>

      </section>

    </main>

  )
}

export default Home

