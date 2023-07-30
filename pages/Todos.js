import React from 'react'
import { useEffect, useState } from 'react';


const Todos = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const [Todos, settodo] = useState([]);

    useEffect(() => {
        let Todos = localStorage.getItem("todos");
        settodo(JSON.parse(Todos))
    }, [])


    const deleteTodo = (title) => {
        let todoDel = Todos.filter(item => {
            return item.title != title;
        })
        localStorage.setItem("todos", JSON.stringify(todoDel));
        settodo(todoDel);
        setTimeout(function () {
            alert("Your Task Has Been Deleted");
        }, 450);

    }





    let currentDate = `${day}-${month}-${year}`;


    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    {Todos.length == 0 && <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">Add Your Task First</h1>}
                    {Todos.length != 0 && <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">Your Task Today</h1>}
                    {Todos.length == 0 && <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add your task from Home Page</p>}
                    {Todos.length != 0 && <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Make Sure to complete your task ASAP!!</p>}
                </div>
                <div className="flex flex-wrap -m-4">
                    {Todos.map(item => {
                        return <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`https://picsum.photos/300/500?a=${item.title}`} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">{item.title}</h2>
                                    <h3 className="text-gray-500 mb-3">{currentDate}</h3>
                                    <p className="mb-4">{item.desp}</p>
                                    <span className="inline-flex">
                                        {/* edit */}
                                        <a className="ml-2 text-gray-500 cursor-pointer" href={`/edit/${item.title}`}>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28px" height="28px"><linearGradient id="0O0q6J4HBgQKyT39nvTa~a" x1="46.807" x2="46.807" y1="9.849" y2="24.215" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff" /><stop offset="1" stopColor="#e6abff" /></linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~a)" d="M49.482,24.392l-9.874-9.874l4.232-4.232c0.39-0.39,1.021-0.39,1.411,0l8.464,8.464 c0.39,0.39,0.39,1.021,0,1.411L49.482,24.392z" /><linearGradient id="0O0q6J4HBgQKyT39nvTa~b" x1="32" x2="32" y1="8.084" y2="55.83" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff" /><stop offset="1" stopColor="#c822ff" /></linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~b)" d="M50.697,25.999l4.428-4.428c1.167-1.167,1.167-3.065,0-4.232l-8.464-8.464 c-1.167-1.167-3.065-1.167-4.232,0l-4.428,4.428c-0.664-0.175-1.4-0.011-1.92,0.509l-1.411,1.411c-0.52,0.52-0.684,1.256-0.509,1.92 L11.198,40.106l-0.508,0.508l-0.2,0.2l-2.373,9.967c-0.343,1.442,0.078,2.928,1.126,3.976s2.534,1.469,3.976,1.125l9.967-2.373 l0.2-0.2l0.508-0.508l22.964-22.964c0.664,0.175,1.4,0.011,1.92-0.509l1.411-1.411C50.708,27.399,50.872,26.663,50.697,25.999z M47.367,27.92L36.081,16.634l1.411-1.411l11.285,11.285L47.367,27.92z M23.46,50.414c-0.28-1.063-0.682-2.077-1.198-3.034 l20.872-20.872l2.116,2.116L23.46,50.414z M14.916,53.428c-0.12-1.074-0.58-2.115-1.405-2.939c-0.825-0.825-1.865-1.285-2.939-1.405 l0.698-2.931c1.649,0.266,3.173,1.036,4.357,2.22c1.184,1.184,1.954,2.709,2.22,4.357L14.916,53.428z M17.038,46.962 c-1.447-1.447-3.301-2.396-5.306-2.75l0.463-1.943c2.382,0.441,4.533,1.562,6.254,3.282s2.841,3.872,3.282,6.254l-1.943,0.463 C19.433,50.263,18.485,48.409,17.038,46.962z M19.859,44.141c-0.477-0.477-0.987-0.907-1.517-1.304l20.561-20.561l2.821,2.821 L21.163,45.658C20.766,45.128,20.336,44.618,19.859,44.141z M16.62,41.738c-0.957-0.516-1.971-0.918-3.034-1.198l21.79-21.79 l2.116,2.116L16.62,41.738z M43.84,10.286c0.389-0.389,1.022-0.389,1.411,0l8.464,8.464c0.389,0.389,0.389,1.022,0,1.411 l-4.232,4.232l-9.874-9.874L43.84,10.286z" /></svg>
                                        </a>
                                        {/* delete */}
                                        <a className="ml-2 text-gray-500 cursor-pointer" onClick={() => deleteTodo(item.title)}>


                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#b39ddb" d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z" /><path fill="#9575cd" d="M28 6L20 6 14 12 34 12z" /><path fill="#7e57c2" d="M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z" /></svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Todos
