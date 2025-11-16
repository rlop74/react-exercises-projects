import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Simple Form</h1>
            <div className="flex flex-col w-100">
                Name:{" "}
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-1 rounded-lg p-1"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                Email address:{" "}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-1 rounded-lg p-1"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)
                    }
                />

            </div>

            <div className="flex flex-col mt-5">
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default App;
