import React from "react"
import logo from './logo.svg';
import './App.css';
import boxes from "./boxes"
import Box from "./components/Box"

function App() {
  const [sqaures, setSqaures] = React.useState(boxes);


  const squareElements = sqaures.map(square => {
    return <Box key={square.id} on={square.on} />
  }
  )

  return (
    <div className="App">
      <main>
        <h1>Toggle Game: Click on a box to toggle between white and black</h1>
        {squareElements}
      </main>
    </div>
  );
}

export default App;
