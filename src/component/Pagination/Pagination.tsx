import React from 'react'
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { Link } from 'react-router-dom';
type Props = {
    _page: number,
    _limit: number,
    _totalRows: number
    onPageChange: ()=>void
}

const Paginate = (props: Props) => {
  
   const {pagination, onPageChange} =    props;
   const {_page, _limit, _totalRows} = props;
    const totalPage = Math.ceil(_totalRows / _limit)

   const handlePage = (newPage)=>{
       if(onPageChange){
           onPageChange(newPage)
       }
   }
   

  return (
    <div className="text-center">
        <button className="btn btn-primary mx-4 mb-4"
          disabled={_page <= 1}
          onClick={() =>handlePage(_page - 1)}
        >Prev</button>


        <button className="btn btn-primary mx-4 mb-4"
        disabled={_page >= totalPage}
        onClick={() =>handlePage(_page + 1)}
        >Next</button>

    </div>
  )
}

export default Paginate