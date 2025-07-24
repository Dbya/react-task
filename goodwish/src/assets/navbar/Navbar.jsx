import { useState } from 'react';
import { Link} from 'react-router-dom'

const Navbar = ({setSearchData}) => {
  
//   const[searchData,setSearchData]=useState()

// const filteredBlogs = blog.filter((item) => {
//     const searchUserId = Number(searchData);
//     if (!isNaN(searchUserId)) {
//       return item.userId === searchUserId;
      
//     }
    
//     return false;
//   });
//   console.log(filteredBlogs,"ma ho taile filter gareko")

  

   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <div>
      

{/* <nav class="bg-black-500 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 bg-white shadow">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  <a  class="flex items-center space-x-3 rtl:space-x-reverse">
      
      <Link to="/" class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BlogApp</Link>
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input onChange={(e)=>setSearchData(e.target.value)}  type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by userId..." />
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to='/' class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">AllBlog</Link>
        </li>
        <li>
          <Link to="/filteredblog" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FilteredBlog</Link>
        </li>
        <li>
          <Link to="/addblog" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">createBlog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


<nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          BlogApp
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Search input (desktop and mobile) */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:mx-4">
          <input
            type="text"
            placeholder="Search by userId..."
            aria-label="Search blogs"
            onChange={(e) => setSearchData(e.target.value)}
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Menu Links desktop */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link
            to="/"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            AllBlog
          </Link>
          <Link
            to="/filteredblog"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            FilteredBlog
          </Link>
          <Link
            to="/addblog"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            CreateBlog
          </Link>
        </div>
      </div>

      {/* Mobile menu - toggled */}
      {menuOpen && (
        <div
          id="navbar-menu"
          className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 shadow-md"
        >
          {/* Search input mobile */}
          <input
            type="text"
            placeholder="Search by userId..."
            aria-label="Search blogs"
            onChange={(e) => setSearchData(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />

          {/* Links mobile */}
          <Link
            to="/"
            className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            AllBlog
          </Link>
          <Link
            to="/filteredblog"
            className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            FilteredBlog
          </Link>
          <Link
            to="/addblog"
            className="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            CreateBlog
          </Link>
        </div>
      )}
    </nav>

    </div>
  )
}

export default Navbar
