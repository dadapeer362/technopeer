import React from "react";
import { useState } from "react";

function HookUseState() {
    const [counter, setCounter] = useState(0)
    const handleClickIncrease = () => {
        setCounter(counter + 1)
    }

    const handleClickDecrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-black p-12 rounded-lg">
                <h1 className="text-amber-400">useState</h1>
                <p className="text-center font-bold text-white text-2xl">{counter}</p>
                <div className="flex justify-around">
                    <button className="p-2 bg-green-500 rounded-lg font-semibold mr-2" onClick={handleClickIncrease}>Increase count</button>
                    <button className="p-2 bg-red-500 rounded-lg font-semibold" onClick={handleClickDecrease}>Decrease count</button>
                </div>
            </div>
        </div>
    )
}

export default HookUseState