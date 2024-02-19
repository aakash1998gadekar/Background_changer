import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
 
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color, height: "100vh"}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        style={{justify:"center"}}>
          <button 
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}
          >Red</button>
            <button 
            onClick={()=> setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}
          >Green</button>
            <button 
            onClick={()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}
          >Blue</button>
            <button 
            onClick={()=> setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}
          >Black</button>
            <button 
            onClick={()=> setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"white"}}
          >White</button>

         <button 
            onClick={()=> setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"orange"}}
          >Orange</button>

         <button 
            onClick={()=> setColor("brown")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"brown"}}
          >Brown</button>

         <button 
            onClick={()=> setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}
          >Purple</button>

        <button 
            onClick={()=> setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}
          >Pink</button>

        <button 
            onClick={()=> setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
         <button 
            onClick={()=> setColor("aqua")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"aqua"}}
          >Aqua</button>

        <button 
            onClick={()=> setColor("beige")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"beige"}}
          >Beige</button>

<button 
            onClick={()=> setColor("gold ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"gold "}}
          >Gold </button>

<button 
            onClick={()=> setColor("gainsboro ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"gainsboro "}}
          >Gainsboro </button>

<button 
            onClick={()=> setColor("fireBrick ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"fireBrick "}}
          >FireBrick </button>

<button 
            onClick={()=> setColor("darkViolet ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"darkViolet "}}
          >DarkViolet </button>

<button 
            onClick={()=> setColor("darkSeaGreen ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"darkSeaGreen "}}
          >DarkSeaGreen </button>

<button 
            onClick={()=> setColor("darkSlateBlue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"darkSlateBlue "}}
          >DarkSlateBlue </button>

<button 
            onClick={()=> setColor("cornsilk ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"cornsilk "}}
          >Cornsilk </button>

<button 
            onClick={()=> setColor("chartreuse ")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"chartreuse "}}
          >Chartreuse </button>

<button 
            onClick={()=> setColor("chocolate")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"chocolate"}}
          >Chocolate </button>
        </div>

      </div>
  
    </div>
    
  )
}

export default App
