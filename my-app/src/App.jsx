import { useState } from 'react'
import logo from './logo.svg'
import './App.css' 
import Item from './components/Item'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    {id: 1, name:"name a"},
    {id: 2, name:"name b"},
    {id: 3, name:"name c"}
  ];

  return (
    <div className="App">
      Count: {count} <button onClick={()=> setCount(count+1)}>Click</button>
      {products.map((item, index) => <Item key={index} data={item}/>)}
      <ShowInfo name="Hung" age={29}/>
    </div>
  )
}

export default App
