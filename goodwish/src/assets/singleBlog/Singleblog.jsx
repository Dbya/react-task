import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Singleblog.css'

const Singleblog = () => {
  const { id } = useParams();
  console.log(id, "ma taile click gareko id ho");
  const [oneBlog, setOneBlog] = useState({});
  const singleBlog = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(response, "i m response");
    setOneBlog(response.data);
    console.log(oneBlog);
  };
  useEffect(() => {
    singleBlog();
  }, []);

  return (
    <div className="singleBlog flex flex-col justify-center items-center min-h-screen" >
      <p>i m single blog no.{id}</p>

      <div className="flex justify-center items-center   p-4">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
            { oneBlog.title }
          </h2>
          <p className="text-gray-700 mb-6 capitalize">{oneBlog.body}</p>
          <div className="flex gap-4">
            <Link
              to="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
            >
              back
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </div>
    
    


    </div>
    // <>
     
    //  {oneBlog ? (<div className="singleBlog flex flex-col justify-center items-center min-h-screen" >
    //   <p>i m single blog no.{id}</p>

    //   <div className="flex justify-center items-center   p-4">
    //     <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
    //       <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
    //         {oneBlog? oneBlog.title :"loading........"}
    //       </h2>
    //       <p className="text-gray-700 mb-6 capitalize">{oneBlog.body}</p>
    //       <div className="flex gap-4">
    //         <Link
    //           to="/"
    //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
    //         >
    //           back
    //         </Link>
    //         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    //           Edit
    //         </button>
    //         <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    
    


    // </div>):(<p>Loading..........</p>)}
    
    // </>


  );
};

export default Singleblog;
