import { useState } from "react"

function App() {
  const [color, setColor] = useState("red")
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center" style={{backgroundColor: color}}>
      <div className="fixed top-10 bg-white px-4 py-2 rounded-full">
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
          <button className="px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
