// Tarjeta individual de producto.

import { Link } from 'react-router-dom'

function ProductCard(props) {

  return (

    <article className="group overflow-hidden rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Imagen */}

      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-5 sm:h-64">

        <img
          src={props.imagen}
          alt={props.nombre}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Categoría */}

        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-texto)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm sm:left-4 sm:top-4 sm:text-xs">
          {props.categoria}
        </span>

      </div>


      {/* Información */}

      <div className="p-4 sm:p-5">

        {/* Nombre */}

        <h2 className="line-clamp-2 min-h-12 text-base font-bold leading-snug text-[var(--color-texto)] sm:min-h-14 sm:text-lg">
          {props.nombre}
        </h2>


        {/* Valoración */}

        <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm">

          <span className="tracking-wide text-[var(--color-dorado)]">
            ★★★★★
          </span>

          <span className="font-semibold text-[var(--color-texto-secundario)]">
            {props.rating}
          </span>

          <span className="text-[var(--color-texto-secundario)]">
            ({props.opiniones})
          </span>

        </div>


        {/* Precio */}

        <p className="mt-3 text-xl font-bold text-[var(--color-texto)] sm:text-2xl">
          ${props.precio}
        </p>


        {/* Detalle */}

        <Link
          to={`/producto/${props.id}`}
          className="mt-4 block w-full rounded-xl bg-[var(--color-texto)] py-3 text-center text-sm font-bold text-white transition duration-300 hover:bg-[var(--color-acento-hover)] sm:mt-5 sm:text-base"
        >
          Ver producto
        </Link>

      </div>

    </article>

  )
}

export default ProductCard