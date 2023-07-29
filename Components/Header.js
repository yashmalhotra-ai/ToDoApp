import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href='/' className="mr-5 hover:text-white">Home</Link>
      <Link href='/' className="mr-5 hover:text-white">About</Link>
      <Link href='/Todos' className="mr-5 hover:text-white">My Todos</Link>
      <Link href='/' className="hover:text-white">Contact us</Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">

    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#b39ddb" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"/><linearGradient id="5qKAcydctVb3hkGT27jhwa" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b39ddb"/><stop offset="1" stopColor="#b39ddb"/></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"/></svg>
      <span className="ml-3 text-xl xl:block lg:hidden">ToDo App</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      
    </div>
  </div>
</header>
    
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
</header> */}
