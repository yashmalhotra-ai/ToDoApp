import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font ">
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                
                    <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 Yash Malhotra —
                        <a href="https://twitter.com/InRusher_" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@InRusher_</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    
                        <a className="ml-3 text-gray-400" href='https://www.instagram.com/yash_.malhotra__/' target='_blank'>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400" href='https://www.linkedin.com/in/yashmal8810' target='_blank'>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
