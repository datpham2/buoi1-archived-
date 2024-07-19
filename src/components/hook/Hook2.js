import { useState } from "react"

function Hook2() {
    console.log("render hook2")
    
    const [number, setNumber] = useState(10)
    function handle_number_up() {
        setNumber(number + 10) // number = number + 10
    }
    return (
        <div>
            <p>Number: {number}</p>
            <button onClick={handle_number_up}>Number Up</button>
        </div>
    )
}
export default Hook2