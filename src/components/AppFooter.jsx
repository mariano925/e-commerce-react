// Pie de página del catálogo.

import { Link } from 'react-router-dom'

function AppFooter() {

  return (

    <footer className="border-t border-[var(--color-borde)] bg-[var(--color-texto)] text-white">

      {/* Contenido principal */}

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10 lg:px-16">

        {/* Marca */}

        <div>

          <div className="mb-4 flex items-center gap-3">

            <div className="h-8 w-1 rounded-full bg-[var(--color-acento)]" />

            <h2 className="text-xl font-bold">
              Mi Catálogo
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-relaxed text-gray-300">
            Explorá nuestros productos, descubrí nuevas opciones
            y consultá directamente por el producto que te interesa.
          </p>

        </div>


        {/* Navegación */}

        <div>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-acento)]">
            Navegación
          </h3>

          <nav className="flex flex-col gap-3">

            <Link
              to="/"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Inicio
            </Link>

            <Link
              to="/recomendados"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Recomendados
            </Link>

          </nav>

        </div>


        {/* Información */}

        <div>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-acento)]">
            Nuestro catálogo
          </h3>

          <p className="text-sm leading-relaxed text-gray-300">
            Encontrá productos de diferentes categorías
            y consultá por disponibilidad, precio y condiciones.
          </p>

        </div>

      </div>


      {/* Copyright */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-center text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">

          <p>
            © 2026 Mi Catálogo de Productos
          </p>

          <p>
            Catálogo online
          </p>

        </div>

      </div>

    </footer>

  )
}

export default AppFooter

