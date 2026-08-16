// Componente principal de la aplicación.
// App organiza los diferentes componentes.

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import productos from './data/productos'
import ProductList from './components/ProductList'

function App() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-6">
          Productos
        </h2>

        <ProductList productos={productos} />
      </main>

      <AppFooter />
    </>
  )
}

export default App