import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
 
  const handleGamePlay =(index)=>{
  let updateGrid = [...squares]
 updateGrid[index] = "❌";
 setSquares(updateGrid);
 
 }
 console.log(handleGamePlay);
 console.log(setSquares);
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {squares.map((value, index) => {
          return (
            <Square 
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          

          )
        })}
        
      </div>

    </>
  )
}

export default App