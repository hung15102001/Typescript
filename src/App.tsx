import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfo from './component/ShowInfo';
import type {ProductType} from './types/products';
import axios from 'axios';

// function App() {
//   const [info, setInfo] = useState<ProductType>(
//     {
//          name:"Hung", age:20
//     });
//   return (
//     <div className="App">
//       <ShowInfo info={info}/>
//     </div>
//   )
// }

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getPro = async () => {
      const {data} = await  axios.get('http://localhost:3000/products');
      setProducts(data);
     
    }
    getPro();
  },[]);


  const removeItem = async (id: number) => {
  
    const {data} = await axios.delete(`http://localhost:3000/products/${id}`);

    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
      {count}  <button onClick={()=> setCount(count + 1)}>Click</button>
      <br />
      
            <table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th> Function</th>
                  </tr>
              </thead>
              <tbody>

                {products.map((item, index)=>{
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>
                          <button onClick={()=>removeItem(item.id)}>Remove</button>
                        </td>
                      </tr>
                })}

              </tbody>

            </table>
            
   
    </div>
  )

}

export default App
