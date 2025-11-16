import { useState } from "react";

function App() {
    const [inputType, setInputType] = useState("password");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col h-screen justify-center items-center gap-3">
            <input type={showPassword === true ? "text" : "password"} className="border-1 w-74" />
            <div>
                <input type="checkbox" onChange={() => setShowPassword(!showPassword)}/> Show password
            </div>
        </div>
    );
}

export default App;
