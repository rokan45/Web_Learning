import { useState } from "react"

export default function ScoreCount() {
    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = () => {
        const singleRun = run + 1;
        setRun(singleRun);
    }
    const handleFour = () => {
        const fourRun = run + 4;
        setRun(fourRun);
    }
    const handleSixes = () => {
        const sixRun = run + 6;
        setRun(sixRun);
        const sixCount=six+1;
        setSix(sixCount);
    }

    return (
        <div>
            <h1>Total Runs:{run} </h1>
            {
                <h2>Total six : {six}</h2>
            }
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}