import React, { useRef, useState } from "react";
import {ProductType} from '../types/products'

type Props = {
  onSubmit : () => void
};


const Search = (props: Props) => {
    const {onSubmit} = props
    const [searchs, setSearch] = useState('')
    const typingTimeout = useRef(null);

    const handleSearchChange = (e: any) => {
        const a = e.target.value
        setSearch(a)

        if(!onSubmit) return;
        if(typingTimeout.current){
            clearTimeout(typingTimeout.current)
        }

        typingTimeout.current = setTimeout(()=>{
          const valueForm = {
              searchs: a
          };
          onSubmit(valueForm)
        }, 300)

    }

  return (
    <div className="mt-4">
        <form >
            <input className="p-2 m-2 rounded float-"
            type="text"
            placeholder="Search"
            value={searchs}
            onChange={handleSearchChange}
            />
        </form>
    </div>
  );
};

export default Search;
