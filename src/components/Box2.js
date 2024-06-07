import React from "react"
import "../index.css"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on?"black":"white"
    }
    return (
        <div 
        style={styles} 
        className="box" 
        onClick={()=>props.toggle(props.id)} >
        </div>
    )
}