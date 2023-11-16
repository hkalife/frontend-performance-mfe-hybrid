import ProductList from './components/ProductList'
import './App.css'

function App() {
  const numberOfRowsToRender = 5;

  return (
    <>
      <ProductList numberOfRowsToRender={numberOfRowsToRender} />
    </>
  )
}

export default App
