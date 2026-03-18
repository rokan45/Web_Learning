import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCount=()=>{
        // setCount(1);
        const newCount=count+1;
        setCount(newCount);
    }

    //style for the componet
    const counterStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius:'5px',
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}