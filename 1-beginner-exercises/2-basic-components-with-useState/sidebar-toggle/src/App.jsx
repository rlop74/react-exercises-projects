import { useState } from "react";
import { PanelLeftClose } from "lucide-react";
import { PanelLeftOpen } from "lucide-react";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={`flex flex-col h-screen bg-red-300 transition-all duration-300 ease-in-out ${
                    isSidebarOpen === true ? "w-[10%]" : "w-[60px]"
                }`}
            >
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-fit self-end">
                    {isSidebarOpen === true ? <PanelLeftClose /> : <PanelLeftOpen />}
                </button>
                Sidebar
            </div>
            <div>Main</div>
        </div>
    );
}

export default App;
