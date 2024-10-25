import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Content from './layout/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
