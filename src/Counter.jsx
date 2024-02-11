import { useState } from "react";
import './App.css';

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div className="countStyle">
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <br /> <br />
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}