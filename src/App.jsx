// App organiza las rutas y componentes principales.

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

import Home from './pages/Home'
import Detalle from './pages/Detalle'
import Categoria from './pages/Categoria'
import Recomendados from './pages/Recomendados'
import ParaTuNegocio from './pages/ParaTuNegocio'


function App() {

  return (

    <BrowserRouter>

      <AppHeader />

      <Routes>

        {/* Página principal */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Categorías */}
        <Route
          path="/categoria/:categoria"
          element={<Categoria />}
        />

        {/* Detalle de producto */}
        <Route
          path="/producto/:id"
          element={<Detalle />}
        />

        {/* Productos recomendados */}
        <Route
          path="/recomendados"
          element={<Recomendados />}
        />
        {/* Para tu negocio */}
        <Route
          path="/para-tu-negocio"
          element={<ParaTuNegocio />}
        />

      </Routes>

      <AppFooter />

    </BrowserRouter>
  )
}

export default App