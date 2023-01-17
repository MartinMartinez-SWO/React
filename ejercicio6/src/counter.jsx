import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(count * 0);
    }

    return (
        <div>
       
                <h2>{count}</h2>
    
            <button className="btn btn-success" onClick={increment}>Increment</button>
            <button className="btn btn-success" onClick={decrement}>Decrement</button>
            <button className="btn btn-success" onClick={reset}>Reset</button>
        </div>
    )

}
export default Counter