import { useState, useEffect } from "react";
// import './App.css'

import { Power } from "lucide-react";

function App() {
    const [toggle, setToggle] = useState(localStorage.getItem("toggle") || "Off");
    const [background, setBackground] = useState(localStorage.getItem("theme") || "black");

    useEffect(() => {
        localStorage.setItem("theme", background);
        localStorage.setItem("toggle", toggle);
    }, [background, toggle]);

    return (
        <div
            className={`flex flex-col w-screen h-screen justify-center items-center bg-${background}`}
        >
            <h1 className={`mb-5 ${background === "white" ? "text-black" : "text-white"}`}>{toggle}</h1>
            {/* <div className="flex gap-2 border-1 p-3 rounded-full max-w-fit"> */}
            <button
                onClick={() => {
                    toggle === "Off" ? setToggle("On") : setToggle("Off");
                    background === "white"
                        ? setBackground("black")
                        : setBackground("white");
                }}
                className={``}
            >
                <Power />
            </button>
            {/* </div> */}
        </div>
    );
}

export default App;
