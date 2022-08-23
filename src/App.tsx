import React, {useState} from 'react';
import './App.css';


// UI
function App() {
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
    }

    const reset = () => {
        setA(a = 0)
    }

    return (
        <div>
           <h1>{a}</h1>
            <button onClick={onClickHandler}>num+</button>
            <button onClick={reset}>0</button>
        </div>
    );
}

export default App;
