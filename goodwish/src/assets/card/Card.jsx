import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({blog}) => {
    console.log(blog,"i m card blog")
  
  return (

<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="Singlecard h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {blog.title}
          </h5>
          <p className="card-content mb-4 font-normal text-gray-700 dark:text-black-700 line-clamp-3">
            {blog.body}
          </p>
        </div>
        <Link to={`/singleblog/${blog.id}`}
          href="#"
          className="inline-flex text-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>

//     <div >
//       <div  className="Singlecard max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <h5 className="  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
//     </a>
//     <p className="card-content mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.body}</p>
//     <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         Read more
//         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//         </svg>
//     </a>
// </div>
//     </div>
  )
}

export default Card
