import { useState } from "react";
import "./App.css";

function App() {
    const [paragraphHidden, setParagraphHidden] = useState(false);

    return (
        <>
            <div className={`${paragraphHidden ? "hidden" : ""} mb-10`}>
                The ocean is a vast and mysterious place that covers more than
                70% of our planet. It is home to countless creatures, from tiny
                fish to giant whales. The ocean plays a big role in our weather
                and climate, helping to keep temperatures stable around the
                world. Many people enjoy activities like swimming, fishing, and
                boating in the ocean. It also provides food for millions of
                people and is a source of great beauty and adventure. However,
                the ocean faces many threats, such as pollution and climate
                change, which can harm its creatures and ecosystems. It's
                important for everyone to help protect the ocean so that it can
                continue to thrive for future generations.
            </div>

            <button onClick={() => setParagraphHidden(!paragraphHidden)}>Show paragraph</button>
        </>
    );
}

export default App;
