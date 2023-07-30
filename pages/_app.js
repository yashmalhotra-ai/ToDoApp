import '@/styles/globals.css'

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function App({ Component, pageProps }) {
  return(
    <>
    

    <Header/>

    <Component {...pageProps} />
    <div className='container mx-auto min-h-full'>

    </div>
    <Footer/>
    
    </>
  ) 
}
