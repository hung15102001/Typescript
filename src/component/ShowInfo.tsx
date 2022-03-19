import React from 'react'
import type {ProductType} from '../types/products';
type ShowInfoProps = {
  info: ProductType;
}

const ShowInfo = (props: ShowInfoProps) => {
   return (
    <div>
        {
          props.info.name
        }
    </div>
   )
}

export default ShowInfo