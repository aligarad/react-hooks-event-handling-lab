// Code EyesOnMe Component Here
import React, { useState } from "react";


function EyesOnMe(){

    const {focus, setFocus} = useState("Eyes on me")
    const {blur, setBlur} = useState("Eyes on me")

    return(
        <>
        <button onClick= {() => setFocus(console.log("Good!"))}>Eyes on me</button>
        <button onClick= {() => setBlur(console.log("Hey! Eyes on me!"))}>{blur}</button>

        
        </>
    )
}


export default EyesOnMe