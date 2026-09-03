import { useState } from 'react'
import { Link } from 'react-router-dom'

function AppHeader() {

  // Controla el menú móvil.
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-borde)] bg-[var(--color-superficie)]/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">

        {/* Logo */}

        <Link
          to="/"
          onClick={cerrarMenu}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-texto)] text-sm font-bold text-white transition group-hover:bg-[var(--color-acento)]">
            M
          </span>

          <span className="text-lg font-bold tracking-tight text-[var(--color-texto)] transition group-hover:text-[var(--color-acento)]">
            Mi Catálogo
          </span>
        </Link>

        {/* Navegación */}

        <nav className="hidden items-center gap-3 md:flex">

          <Link
            to="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-[var(--color-texto-secundario)] transition hover:bg-[var(--color-fondo)] hover:text-[var(--color-texto)]"
          >
            Inicio
          </Link>

          <Link
            to="/recomendados"
            className="rounded-xl bg-[var(--color-acento)] px-4 py-2 text-sm font-semibold text-[var(--color-texto)] transition hover:bg-[var(--color-acento-hover)]"
          >
            Recomendados
          </Link>

          <Link
            to="/para-tu-negocio"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-[var(--color-texto-secundario)] transition hover:bg-[var(--color-fondo)] hover:text-[var(--color-texto)]"
          >
            Para tu negocio
          </Link>

        </nav>

        {/* Menú móvil */}

        <button
          type="button"
          aria-label={
            menuAbierto
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuAbierto}
          onClick={() =>
            setMenuAbierto(!menuAbierto)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-borde)] bg-[var(--color-superficie)] text-lg text-[var(--color-texto)] transition hover:border-[var(--color-acento)] hover:bg-[var(--color-fondo)] md:hidden"
        >
          {menuAbierto ? '×' : '☰'}
        </button>

      </div>

      {/* Menú móvil */}

      {menuAbierto && (

        <nav className="border-t border-[var(--color-borde)] bg-[var(--color-superficie)] px-6 py-4 md:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            <Link
              to="/"
              onClick={cerrarMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-texto-secundario)] transition hover:bg-[var(--color-fondo)] hover:text-[var(--color-texto)]"
            >
              Inicio
            </Link>

            <Link
              to="/recomendados"
              onClick={cerrarMenu}
              className="rounded-xl bg-[var(--color-acento)] px-4 py-3 text-sm font-semibold text-[var(--color-texto)] transition hover:bg-[var(--color-acento-hover)]"
            >
              Recomendados
            </Link>

            <Link
              to="/para-tu-negocio"
              onClick={cerrarMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-texto-secundario)] transition hover:bg-[var(--color-fondo)] hover:text-[var(--color-texto)]"
            >
              Para tu negocio
            </Link>

          </div>

        </nav>

      )}

    </header>
  )
}

export default AppHeader

