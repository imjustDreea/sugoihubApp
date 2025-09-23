import { useState } from 'react'
import Layout from './components/layout/layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="App">
        {/* Contenido principal de la aplicación */}
      </div>
    </Layout>
  )
}

export default App
