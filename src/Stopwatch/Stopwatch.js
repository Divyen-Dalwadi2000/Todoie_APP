import { useEffect, useState } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    useEffect(() => {
        if (running) {

            console.log("Add New 🔴 Interval");
            const timer = setInterval(() => setTime(time + 1), 1000);
            console.log(timer);
            return function () {
                console.log("Clean Old 🍏 Interval");
                clearInterval(timer);
            }
        }
    }, [time,running]);
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>THe count Down : {time}</p>
            <button className="btn btn-outline-danger" onClick={()=> setRunning(!running)}>Click to {!running ? "start" : "stop"}</button>
            <button className="btn btn-outline-info" onClick={()=> setTime(0)}>Click to reset</button>
        </div>
    );
}

export default Stopwatch; 