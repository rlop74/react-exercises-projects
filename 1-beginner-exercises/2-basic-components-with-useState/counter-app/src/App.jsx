import "./App.css";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

function App() {
    let [count, setCount] = useState(localStorage.getItem("count") || 0);

    // const increaseCount = () => {
    //     count++;
    //     setCount(count);
    // };

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <>
            <h1 className="mb-10">{count}</h1>
            <div
                onClick={() => {
                    count++;
                    setCount(count);
                }}
                className="border-1 cursor-pointer hover:bg-white/50 p-4 w-[100px] flex justify-center"
            >
                <Plus />
            </div>
            <div
                onClick={() => {
                    count--;
                    setCount(count);
                }}
                className="border-1 cursor-pointer hover:bg-white/50 p-4 w-[100px] flex justify-center"
            >
                <Minus />
            </div>
        </>
    );
}

export default App;
