import React from 'react'
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { Link } from 'react-router-dom';
type Props = {
    page: number,
    url: string,
    totalPages: number

}

const Paginate = ({ page, totalPages, url }: Props) => {
    const pagination = []
    
    for (let i = 1; i <= totalPages; i++) {
        pagination.push(
            <li >
                <Link to={`/${url}/page/${i}`} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white ${page === i ? "border-[#D9A953] bg-[#D9A953] text-white" : "border-gray-500 text-gray-500"}`}>{i}</Link>
            </li>
        )
    }
  return (
    <div>
        <ul>
        {page > 1 && (
                <li>
                    <Link to={`/${url}/page/${page - 1}`} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <button>
                            Prev
                        </button>
                    </Link>
                </li>
            )}

            {totalPages > 1 && pagination}

            {page < totalPages && (
                <li>
                    <Link to={`/${url}/page/${page + 1}`} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <button>
                            Next
                        </button>
                    </Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Paginate