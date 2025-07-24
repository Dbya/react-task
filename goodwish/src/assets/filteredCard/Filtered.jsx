import React from 'react'
import "./Filtered.css"
import { Link } from 'react-router-dom'
const Filtered = ({filteredBlogs}) => {
    
  return (
    
   <div className=" Filter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-2 mt-16">
   {/* {filteredBlogs.map((filteredBlogs)=>{
       return(
          <div key={filteredBlogs.id} className="Singlecard h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {filteredBlogs.title}
          </h5>
          <p className="card-content mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {filteredBlogs.body}
          </p>
        </div>
        <Link to={`/singleblog/${filteredBlogs.id}`}
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
       )
   })} */}


   {
    filteredBlogs.length > 0 ? (filteredBlogs.map((filteredBlogs)=>{
       return(
          <div key={filteredBlogs.id} className="Singlecard h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {filteredBlogs.title}
          </h5>
          <p className="card-content mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {filteredBlogs.body}
          </p>
        </div>
        <Link to={`/singleblog/${filteredBlogs.id}`}
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
       )
   })):(<p>!opps you havent search any blog yet......search your blog by userId  </p>)
   }

      
    </div>
  )
}

export default Filtered
