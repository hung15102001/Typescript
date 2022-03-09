import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const myName = "demo";
const myAge = 20;
const status = true;
const person = {
name: "HUng",
age: 20
}
const showInfo = (props)=>{
  return <p>Thông tin userc{props.name} </p>
}
// Ham
const ShowInfo = (props)=>{
  return <p>Thông tin user{props.name} </p>
}
// Conponent
ReactDOM.render( 
  <App/>,
  document.getElementById('root')
)
