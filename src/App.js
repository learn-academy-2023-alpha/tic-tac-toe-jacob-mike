import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [player, setPlayer] = useState("❌")
 
  const handleGamePlay = (index) => {

    let updateGrid = [...squares]
   
    if(squares[index] ===  null){
      updateGrid[index] = player
      setSquares(updateGrid)
      //If the player is X, then change to next player. else change to X
      if(player === "❌"){
        setPlayer("⭕️")
      } else {
        setPlayer("❌")
      }
    } else{
      updateGrid[index] = updateGrid[index]
      setSquares(updateGrid)
    } 
 }

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