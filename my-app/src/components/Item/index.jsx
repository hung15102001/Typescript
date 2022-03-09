import React from "react"

const Item = (props)=>{
    console.log(props);
    return <p>{props.data.name}</p>
  }
export default Item