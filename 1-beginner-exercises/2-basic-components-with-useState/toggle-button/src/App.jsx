import { useState } from "react";
// import './App.css'

import { Power } from "lucide-react";

function App() {
    const [toggle, setToggle] = useState("Off");
    const [background, setBackground] = useState("white");

    return (
        <div
            className={`flex flex-col w-screen h-screen justify-center items-center ${
                toggle === "On" ? "bg-white text-black" : ""
            }`}
        >
            <h1 className="mb-5">{toggle}</h1>
            {/* <div className="flex gap-2 border-1 p-3 rounded-full max-w-fit"> */}
            <button
                onClick={() =>
                    toggle === "Off" ? setToggle("On") : setToggle("Off")
                }
                className={`${toggle === "On" ? "text-white": ""}`}
            >
                <Power />
            </button>
            {/* </div> */}
        </div>
    );
}

export default App;
