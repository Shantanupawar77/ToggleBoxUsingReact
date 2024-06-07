import React from "react"
import "../index.css"

export default function Box(props){
    let initialValue = props.on ? "black" : "white"
    const [bgcolor, setBgColor] = React.useState(initialValue)

    const styles={
        backgroundColor: bgcolor
    }
    function handleClick(){
        setBgColor((prevBgColor)=>{
            if (prevBgColor ==="black"){
                return "white"
            }
            else{
                return "black"
            }
        })
    }

    return (
        <div style={styles} className="box" onClick={handleClick}> 
        </div>
    )
}