import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [todo, settodo] = useState({title:"",desp:""})

  const AddTodo = () => {
    let todos=localStorage.getItem("todos");
    if(todos){
      let todosJson=JSON.parse(todos);
      // If title of todo already exsis then 
      if(todosJson.filter(value=>{return value.title==todo.title}).length>0){
        alert("Todo of This Title already exist Please change the title ")
      }
      else{
        todosJson.push(todo);
        localStorage.setItem("todos",JSON.stringify(todosJson));
        alert("Successfully Added Task in List");
      }
      
    }
    else{
      localStorage.setItem("todos",JSON.stringify([todo]));
    }

  }
  
  const onChange = (e) => {
    settodo({...todo,[e.target.name]:e.target.value})
    
  }
  
  return (
    <div className="BodyCon">

    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">To Do App</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Make your day to day task here</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="title" className="leading-7 text-sm text-gray-400">Add To Do</label>
                <input onChange={onChange} value={todo.title} type="text" id="title" name="title" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="desp" className="leading-7 text-sm text-gray-400">Your Todo</label>
                <textarea onChange={onChange} value={todo.desp}  type="text" id="desp" name="desp" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button onClick={AddTodo} className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Add Task</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className="text-purple-400">Made by Yash Malhotra</a>
              <p className="leading-normal my-5">Web developer.
                <br/>Student,Galgotias University 
              </p>
              <span className="inline-flex">
                <a  className="ml-4 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
