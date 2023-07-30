import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/"  className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="28px" height="28px"><path fill="#b39ddb" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"/><linearGradient id="5qKAcydctVb3hkGT27jhwa" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b39ddb"/><stop offset="1" stopColor="#b39ddb"/></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"/></svg>

        <span className="self-center mx-2 text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo App</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#b39ddb" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"/><linearGradient id="5qKAcydctVb3hkGT27jhwa" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b39ddb"/><stop offset="1" stopColor="#b39ddb"/></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"/></svg>

    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-white bg-purple-500 rounded md:bg-transparent md:text-purple-500 md:p-0 dark:text-white md:dark:text-purple-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
        </li>
        <li>
          <a href="/Todos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Todos</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Header







{/* <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href='/' className="mr-5 hover:text-white">Home</a>
      <a href='/' className="mr-5 hover:text-white">About Me</a>
      <a href='/Todos' className="mr-5 hover:text-white">Todos</a>
      <a href='/' className="hover:text-white">Contact Me</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl xl:block lg:hidden">Tailblocks</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header> 


    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#b39ddb" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"/><linearGradient id="5qKAcydctVb3hkGT27jhwa" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b39ddb"/><stop offset="1" stopColor="#b39ddb"/></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"/></svg>




<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/}
