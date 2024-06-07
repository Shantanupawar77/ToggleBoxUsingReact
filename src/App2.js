import React from "react"
// import logo from './logo.svg';
import './App.css';
import boxes from "./boxes"
// import Box from "./components/Box"
import Box2 from "./components/Box2"

function App2() {
    const [sqaures, setSqaures] = React.useState(boxes);

    // function toggle(id) {
    //     console.log("Clicked!");
    //     console.log(id);

    //     setSqaures((prevSquares)=>{
    //         const newSqaures=[]
    //         for(let i=0;i<prevSquares.length;i++){
    //             const currentSqaure=prevSquares[i];
    //             if(currentSqaure.id===id){
    //                 const updatedSqaure={
    //                     ...currentSqaure,
    //                     on:!currentSqaure.on
    //                 }
    //                 newSqaures.push(updatedSqaure)
    //             }
    //             else{
    //                 newSqaures.push(currentSqaure)
    //             }
    //         }
    //         return newSqaures;
    //     })
    // }
    function toggle(id) {
        setSqaures(prevSqaures=>{
            return prevSqaures.map((square)=>{
                return square.id === id ? { ...square, on: !square.on } : square;
            })
        })
    }

    const squareElements = sqaures.map(square => {
        return (
            <Box2
                key={square.id}
                on={square.on}
                toggle={toggle}
                id={square.id}
            />
        )
        
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

export default App2;
