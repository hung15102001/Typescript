import { useState } from 'react'
import logo from './logo.svg'
import './App.css' 
import Item from './components/Item'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCount] = useState(0)
 
const [products, setProducts] = useState([
  {id: 1, name:"name a"},
  {id: 2, name:"name b"},
  {id: 3, name:"name c"}
])

  const removeItem = (id) =>{
    const newProduct = products.filter(item => item.id !== id);
    setProducts(newProduct);
  }
  return (
    <div className="App">
      Count: {count} <button onClick={()=> setCount(count+1)}>Click</button>
      {products.map((item, index) => <div>{item.name}:<button onClick={()=> removeItem(item.id)}>Remove</button></div>
        
      )}
      <ShowInfo name="Hung" age={29}/>
    </div>
  )
}

export default App
