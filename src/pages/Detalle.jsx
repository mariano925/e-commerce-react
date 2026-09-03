// Página de detalle del producto.

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ProductCard from '../components/ProductCard'
import traducciones from '../data/traducciones'

// Traducción de las categorías de Fake Store API.
const categorias = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa masculina',
  "women's clothing": 'Ropa femenina'
}

function Detalle() {

  // Obtiene el ID desde la URL.
  const { id } = useParams()

  // Guarda el producto seleccionado.
  const [producto, setProducto] = useState(null)

  // Guarda productos de la misma categoría.
  const [productosRelacionados, setProductosRelacionados] = useState([])

  // Estados de carga y error.
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')


  useEffect(() => {

    setCargando(true)
    setError('')

    // Obtiene el producto y los productos relacionados.
    Promise.all([
      fetch(`https://fakestoreapi.com/products/${id}`),
      fetch('https://fakestoreapi.com/products')
    ])

      .then(async ([respuestaProducto, respuestaProductos]) => {

        if (!respuestaProducto.ok) {
          throw new Error(
            'No se pudo obtener el producto.'
          )
        }

        if (!respuestaProductos.ok) {
          throw new Error(
            'No se pudieron obtener los productos.'
          )
        }

        const datosProducto =
          await respuestaProducto.json()

        const todosLosProductos =
          await respuestaProductos.json()


        // Aplica la traducción.
        const traduccion =
          traducciones[datosProducto.id]


        // Adapta el producto seleccionado.
        const productoAdaptado = {
          ...datosProducto,

          title:
            traduccion?.titulo ||
            datosProducto.title,

          description:
            traduccion?.descripcion ||
            datosProducto.description
        }

        setProducto(productoAdaptado)


        // Busca productos de la misma categoría.
        const relacionados =
          todosLosProductos

            .filter((item) =>
              item.category ===
                datosProducto.category &&
              item.id !== datosProducto.id
            )

            .slice(0, 3)

            .map((item) => {

              const traduccionRelacionada =
                traducciones[item.id]

              return {
                ...item,

                nombre:
                  traduccionRelacionada?.titulo ||
                  item.title,

                descripcion:
                  traduccionRelacionada?.descripcion ||
                  item.description,

                precio:
                  item.price,

                categoria:
                  categorias[item.category] ||
                  item.category,

                imagen:
                  item.image,

                rating:
                  item.rating?.rate,

                opiniones:
                  item.rating?.count
              }
            })

        setProductosRelacionados(relacionados)

      })

      .catch((error) => {

        console.error(
          'Error al obtener el producto:',
          error
        )

        setError(
          'No pudimos cargar el producto.'
        )

      })

      .finally(() => {
        setCargando(false)
      })

  }, [id])


  // Estado de carga.
  if (cargando) {

    return (

      <main className="min-h-screen bg-[var(--color-fondo)] px-4 py-10 md:px-10 md:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-12 text-center shadow-sm">

            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-borde)] border-t-[var(--color-acento)]" />

            <p className="mt-4 text-sm font-medium text-[var(--color-texto-secundario)]">
              Cargando producto...
            </p>

          </div>

        </div>

      </main>

    )
  }


  // Estado de error.
  if (error || !producto || !producto.id) {

    return (

      <main className="min-h-screen bg-[var(--color-fondo)] px-4 py-10 md:px-10 md:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

            <p className="text-lg font-semibold text-red-700">
              {error || 'No se encontró el producto.'}
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl bg-[var(--color-texto)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-acento-hover)]"
            >
              Volver al catálogo
            </Link>

          </div>

        </div>

      </main>

    )
  }


  // Calcula las estrellas.
  const rating =
    Math.round(producto.rating?.rate || 0)

  const estrellas =
    '★'.repeat(rating) +
    '☆'.repeat(5 - rating)


  return (

    <main className="min-h-screen bg-[var(--color-fondo)] px-4 py-6 md:px-10 md:py-10 lg:px-16">

      <div className="mx-auto max-w-7xl">


        {/* Navegación */}

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

          <span className="text-[var(--color-texto-secundario)]">
            {categorias[producto.category] ||
              producto.category}
          </span>

          <span className="text-[var(--color-borde)]">
            /
          </span>

          <span className="max-w-[180px] truncate font-semibold text-[var(--color-texto)] md:max-w-[300px]">
            {producto.title}
          </span>

        </div>


        {/* Volver */}

        <Link
          to="/"
          className="mb-6 inline-flex items-center rounded-xl border border-[var(--color-borde)] bg-[var(--color-superficie)] px-4 py-2.5 text-sm font-semibold text-[var(--color-texto)] shadow-sm transition hover:border-[var(--color-acento)] hover:bg-[var(--color-fondo)]"
        >
          ← Volver al catálogo
        </Link>


        {/* Producto */}

        <section className="overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] shadow-sm md:rounded-3xl">

          <div className="grid md:grid-cols-2">


            {/* Imagen */}

            <div className="relative flex min-h-[300px] items-center justify-center bg-white p-6 sm:min-h-[380px] md:min-h-[600px] md:p-12">

              <span className="absolute left-4 top-4 rounded-full bg-[var(--color-texto)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm md:left-6 md:top-6 md:px-4 md:py-2 md:text-xs">
                Producto
              </span>

              <img
                src={producto.image}
                alt={producto.title}
                className="h-[250px] w-full object-contain transition duration-500 hover:scale-105 sm:h-[300px] md:h-[500px]"
              />

            </div>


            {/* Información */}

            <div className="flex flex-col justify-center p-5 sm:p-7 md:p-12 lg:p-16">


              {/* Categoría */}

              <span className="w-fit rounded-full bg-[var(--color-fondo)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-acento-hover)] md:px-4 md:py-2 md:text-xs">
                {categorias[producto.category] ||
                  producto.category}
              </span>


              {/* Título */}

              <h1 className="mt-4 text-2xl font-bold leading-tight text-[var(--color-texto)] sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
                {producto.title}
              </h1>


              {/* Valoración */}

              <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-5 md:gap-3">

                <span className="text-base tracking-wide text-[var(--color-dorado)] md:text-lg">
                  {estrellas}
                </span>

                <span className="text-sm font-bold text-[var(--color-texto)]">
                  {producto.rating?.rate}
                </span>

                <span className="text-sm text-[var(--color-texto-secundario)]">
                  ({producto.rating?.count} opiniones)
                </span>

              </div>


              {/* Precio */}

              <div className="mt-6 rounded-2xl bg-[var(--color-fondo)] p-4 md:mt-8 md:p-5">

                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-texto-secundario)] md:text-sm">
                  Precio de referencia
                </p>

                <p className="mt-1 text-3xl font-bold text-[var(--color-texto)] md:text-5xl">
                  ${producto.price}
                </p>

              </div>


              {/* Separador */}

              <div className="my-6 h-px bg-[var(--color-borde)] md:my-8" />


              {/* Descripción */}

              <div>

                <h2 className="text-base font-bold text-[var(--color-texto)] md:text-lg">
                  Descripción
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)] md:mt-3 md:text-base md:leading-7">
                  {producto.description}
                </p>

              </div>


              {/* Información */}

              <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8">

                <div className="rounded-xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-3 md:p-4">

                  <p className="text-[10px] font-medium text-[var(--color-texto-secundario)] md:text-xs">
                    Categoría
                  </p>

                  <p className="mt-1 text-xs font-bold text-[var(--color-texto)] md:text-sm">
                    {categorias[producto.category] ||
                      producto.category}
                  </p>

                </div>


                <div className="rounded-xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-3 md:p-4">

                  <p className="text-[10px] font-medium text-[var(--color-texto-secundario)] md:text-xs">
                    Opiniones
                  </p>

                  <p className="mt-1 text-xs font-bold text-[var(--color-texto)] md:text-sm">
                    {producto.rating?.count || 0}
                  </p>

                </div>

              </div>


              {/* WhatsApp */}

              <div className="mt-6 md:mt-8">

                <button
                  type="button"
                  disabled
                  className="flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white opacity-90 shadow-lg md:text-base"
                >

                  <span className="text-lg md:text-xl">
                    ☎
                  </span>

                  Consultar por WhatsApp

                </button>

                <p className="mt-2 text-center text-[11px] text-[var(--color-texto-secundario)] md:mt-3 md:text-xs">
                  Consultá disponibilidad, precio y condiciones.
                </p>


                {/* Cómo consultar */}

                <div className="mt-6 rounded-2xl border border-[var(--color-borde)] bg-[var(--color-fondo)] p-4 md:mt-7 md:p-5">

                  <h2 className="text-sm font-bold text-[var(--color-texto)] md:text-base">
                    ¿Cómo funciona la consulta?
                  </h2>

                  <div className="mt-4 space-y-3 md:space-y-4">


                    <div className="flex gap-3">

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-texto)] text-xs font-bold text-white">
                        1
                      </span>

                      <p className="text-xs leading-5 text-[var(--color-texto-secundario)] md:text-sm md:leading-6">
                        Hacé clic en "Consultar por WhatsApp".
                      </p>

                    </div>


                    <div className="flex gap-3">

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-texto)] text-xs font-bold text-white">
                        2
                      </span>

                      <p className="text-xs leading-5 text-[var(--color-texto-secundario)] md:text-sm md:leading-6">
                        El mensaje puede incluir el nombre del producto que estás consultando.
                      </p>

                    </div>


                    <div className="flex gap-3">

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-texto)] text-xs font-bold text-white">
                        3
                      </span>

                      <p className="text-xs leading-5 text-[var(--color-texto-secundario)] md:text-sm md:leading-6">
                        Te responderán sobre disponibilidad, precio y condiciones.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* Volver */}

              <Link
                to="/"
                className="mt-5 text-center text-xs font-semibold text-[var(--color-texto-secundario)] transition hover:text-[var(--color-acento-hover)] md:mt-6 md:text-sm"
              >
                ← Volver al catálogo
              </Link>

            </div>

          </div>

        </section>


        {/* Productos relacionados */}

        {productosRelacionados.length > 0 && (

          <section className="py-12 md:py-16">

            <div className="mb-6 md:mb-8">

              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-acento-hover)] md:text-sm">
                Más opciones
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[var(--color-texto)] md:text-4xl">
                También te puede interesar
              </h2>

              <p className="mt-2 max-w-2xl text-sm text-[var(--color-texto-secundario)] md:mt-3">
                Descubrí otros productos de la misma categoría.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">

              {productosRelacionados.map(
                (productoRelacionado) => (

                  <ProductCard
                    key={productoRelacionado.id}
                    id={productoRelacionado.id}
                    nombre={productoRelacionado.nombre}
                    precio={productoRelacionado.precio}
                    categoria={productoRelacionado.categoria}
                    imagen={productoRelacionado.imagen}
                    rating={productoRelacionado.rating}
                    opiniones={productoRelacionado.opiniones}
                  />

                )
              )}

            </div>

          </section>

        )}

      </div>

    </main>

  )
}

export default Detalle