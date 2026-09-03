import { Link } from 'react-router-dom'

function ParaTuNegocio() {

  return (

    <main className="bg-[var(--color-fondo)]">

      {/* Hero */}

      <section className="border-b border-[var(--color-borde)] bg-[var(--color-texto)]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full bg-[var(--color-acento)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-texto)]">
              Catálogo digital para tu negocio
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mostrá tus productos de una forma profesional
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Un catálogo online personalizado para que tus clientes
              puedan conocer tus productos, encontrar lo que buscan y
              consultarte directamente por WhatsApp.
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-[var(--color-acento)] px-6 py-3.5 text-sm font-bold text-[var(--color-texto)] transition duration-300 hover:bg-white"
            >
              Consultar
            </a>

          </div>

        </div>

      </section>

      {/* Características */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="max-w-2xl">

          <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
            Plan 1 · Catálogo personalizado
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
            Todo lo que necesitás para presentar tus productos
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-texto-secundario)]">
            El Plan 1 incluye un catálogo diseñado y adaptado a las
            necesidades de tu negocio, con herramientas pensadas para
            que tus clientes puedan consultar tus productos fácilmente.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              01
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Productos
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Mostrá tus productos con imagen, nombre, precio,
              categoría y la información que tus clientes necesitan.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              02
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Categorías
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Organizá tus productos para que tus clientes puedan
              encontrar rápidamente lo que están buscando.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              03
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Búsqueda rápida
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Tus clientes pueden buscar productos rápidamente
              sin tener que recorrer todo el catálogo.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              04
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Recomendados
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Destacá productos para llamar la atención sobre
              artículos que quieras promocionar especialmente.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              05
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Detalle de producto
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Cada producto puede contar con una ficha detallada
              para brindar más información antes de la consulta.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-acento)] text-lg font-bold text-[var(--color-texto)]">
              06
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              WhatsApp
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              El cliente encuentra un producto y puede comunicarse
              directamente con tu negocio para realizar una consulta.
            </p>

          </article>

        </div>

      </section>

      {/* Administración */}

      <section className="bg-[var(--color-superficie)]">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center lg:px-16">

          <div>

            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
              Administración
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
              Vos administrás tus productos
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-texto-secundario)]">
              El Plan 1 está pensado para que tengas control sobre
              tu catálogo y puedas mantenerlo actualizado sin tener
              que modificar el código.
            </p>

            <p className="mt-4 leading-7 text-[var(--color-texto-secundario)]">
              Podés agregar productos, modificar precios, actualizar
              imágenes y desactivar productos que ya no estén disponibles.
            </p>

          </div>

          <div className="rounded-3xl bg-[var(--color-texto)] p-7 shadow-xl sm:p-9">

            <div className="space-y-4">

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-acento)] font-bold text-[var(--color-texto)]">
                  +
                </span>

                <div>

                  <h3 className="font-bold text-white">
                    Agregar productos
                  </h3>

                  <p className="mt-1 text-sm text-white/65">
                    Incorporá nuevos productos al catálogo.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-acento)] font-bold text-[var(--color-texto)]">
                  ✓
                </span>

                <div>

                  <h3 className="font-bold text-white">
                    Activar o desactivar
                  </h3>

                  <p className="mt-1 text-sm text-white/65">
                    Ocultá productos que temporalmente no estén disponibles.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-acento)] font-bold text-[var(--color-texto)]">
                  ✎
                </span>

                <div>

                  <h3 className="font-bold text-white">
                    Modificar información
                  </h3>

                  <p className="mt-1 text-sm text-white/65">
                    Actualizá precios, nombres, imágenes y descripciones.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Personalización */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="rounded-3xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-7 shadow-sm sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
                Personalización
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
                Tu catálogo, tu identidad
              </h2>

              <p className="mt-5 leading-7 text-[var(--color-texto-secundario)]">
                El catálogo se adapta a la identidad de tu negocio.
                Podemos trabajar con tu logo, tus colores, tus productos
                y la forma en que querés presentar tu marca.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-[var(--color-fondo)] p-5">

                <p className="text-sm font-bold text-[var(--color-texto)]">
                  Logo
                </p>

                <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                  Tu marca presente en el catálogo.
                </p>

              </div>

              <div className="rounded-2xl bg-[var(--color-fondo)] p-5">

                <p className="text-sm font-bold text-[var(--color-texto)]">
                  Colores
                </p>

                <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                  Una interfaz acorde a tu identidad.
                </p>

              </div>

              <div className="rounded-2xl bg-[var(--color-fondo)] p-5">

                <p className="text-sm font-bold text-[var(--color-texto)]">
                  Productos
                </p>

                <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                  Tu catálogo organizado y actualizado.
                </p>

              </div>

              <div className="rounded-2xl bg-[var(--color-fondo)] p-5">

                <p className="text-sm font-bold text-[var(--color-texto)]">
                  WhatsApp
                </p>

                <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                  Contacto directo con tus clientes.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Diseño y UX */}

      <section className="bg-[var(--color-superficie)]">

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div className="max-w-3xl">

            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
              Diseño y experiencia de usuario
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
              Diseñamos pensando en las necesidades de tu negocio
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-texto-secundario)]">
              Antes de desarrollar el catálogo, analizamos qué necesitás
              mostrar, cómo querés presentar tus productos y qué camino
              debería seguir una persona para encontrar la información
              que busca y ponerse en contacto con tu negocio.
            </p>

          </div>

          {/* Proceso */}

          <div className="mt-12 grid gap-4 md:grid-cols-5">

            <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-fondo)] p-5">

              <span className="text-2xl font-bold text-[var(--color-acento-hover)]">
                01
              </span>

              <h3 className="mt-4 font-bold text-[var(--color-texto)]">
                Necesidad
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Conocemos tu negocio, tus productos y a quién está dirigido.
              </p>

            </article>

            <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-fondo)] p-5">

              <span className="text-2xl font-bold text-[var(--color-acento-hover)]">
                02
              </span>

              <h3 className="mt-4 font-bold text-[var(--color-texto)]">
                Bocetos
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Organizamos las ideas y la estructura inicial antes de programar.
              </p>

            </article>

            <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-fondo)] p-5">

              <span className="text-2xl font-bold text-[var(--color-acento-hover)]">
                03
              </span>

              <h3 className="mt-4 font-bold text-[var(--color-texto)]">
                Prototipo
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Transformamos la estructura en una propuesta visual
                y funcional.
              </p>

            </article>

            <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-fondo)] p-5">

              <span className="text-2xl font-bold text-[var(--color-acento-hover)]">
                04
              </span>

              <h3 className="mt-4 font-bold text-[var(--color-texto)]">
                Diseño
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Definimos la identidad visual y la experiencia del catálogo.
              </p>

            </article>

            <article className="rounded-2xl border border-[var(--color-acento)] bg-[var(--color-fondo)] p-5">

              <span className="text-2xl font-bold text-[var(--color-acento-hover)]">
                05
              </span>

              <h3 className="mt-4 font-bold text-[var(--color-texto)]">
                Desarrollo
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Una vez definida la propuesta, construimos el catálogo.
              </p>

            </article>

          </div>

          {/* UX */}

          <div className="mt-10 rounded-3xl bg-[var(--color-texto)] p-7 sm:p-10">

            <div className="max-w-3xl">

              <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento)]">
                Enfoque UX
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                La idea no es solamente que se vea bien
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                También buscamos que sea fácil de entender y utilizar.
                La organización de la información, la navegación, los
                botones y la presentación de los productos se piensan
                para facilitar la experiencia de tus clientes.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-white/10 p-5">

                  <h4 className="font-bold text-white">
                    Fácil de recorrer
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    El cliente encuentra rápidamente lo que busca.
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-5">

                  <h4 className="font-bold text-white">
                    Información clara
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Cada producto muestra la información necesaria.
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-5">

                  <h4 className="font-bold text-white">
                    Acción directa
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    El usuario puede pasar de consultar un producto
                    a contactar con tu negocio.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Plan 1 */}

      <section className="bg-[var(--color-texto)]">

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[var(--color-acento)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-texto)]">
              El siguiente paso
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Plan 1 · Catálogo personalizado
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              Después de tu consulta, conocemos tu negocio y definimos
              cómo adaptar el catálogo a tus necesidades.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="font-bold text-white">
                  Diseño personalizado
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Adaptamos la identidad visual del catálogo a tu negocio.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="font-bold text-white">
                  Catálogo responsive
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Preparado para funcionar correctamente en celulares,
                  tablets y computadoras.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="font-bold text-white">
                  Administración de productos
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Podés agregar, editar y desactivar productos.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="font-bold text-white">
                  Publicación online
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Tu catálogo queda disponible online para compartir
                  con tus clientes.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Cómo funciona */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="max-w-2xl">

          <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-acento-hover)]">
            El proceso
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
            Así comenzamos
          </h2>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm">

            <span className="text-3xl font-bold text-[var(--color-acento-hover)]">
              01
            </span>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Consultás
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Me contás qué vendés, cómo trabajás y qué necesitás
              para tu negocio.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-borde)] bg-[var(--color-superficie)] p-6 shadow-sm">

            <span className="text-3xl font-bold text-[var(--color-acento-hover)]">
              02
            </span>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Definimos el proyecto
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Analizamos tu negocio y definimos cómo personalizar
              el catálogo.
            </p>

          </article>

          <article className="rounded-2xl border border-[var(--color-acento)] bg-[var(--color-superficie)] p-6 shadow-sm">

            <span className="text-3xl font-bold text-[var(--color-acento-hover)]">
              03
            </span>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-texto)]">
              Avanzamos con el Plan 1
            </h3>

            <p className="mt-3 leading-6 text-[var(--color-texto-secundario)]">
              Comenzamos el desarrollo de tu catálogo personalizado
              y lo preparamos para publicarlo online.
            </p>

          </article>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:px-16">

        <div className="overflow-hidden rounded-3xl bg-[var(--color-acento)] px-7 py-12 text-center sm:px-10 sm:py-14">

          <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-texto)]/70">
            ¿Tenés un negocio?
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[var(--color-texto)] sm:text-4xl">
            ¿Querés un catálogo así para tu negocio?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--color-texto)]/75">
            Consultame y contame qué necesitás. Si el proyecto se adapta
            a tu negocio, el siguiente paso es avanzar con el Plan 1.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[var(--color-texto)] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[var(--color-texto)]"
          >
            Consultar por WhatsApp
          </a>

        </div>

      </section>

    </main>
  )
}

export default ParaTuNegocio