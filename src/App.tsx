import React from 'react';
import './App.css';
import {Button} from "./components/Button";


// UI
function App() {
    const button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const button3Foo = () => {
        console.log("Im stupid button")
    }

    return (
        <div>
            <Button name="MyYouTubeChanel - 1" callBack={()=>button1Foo('Im Vasya')}/>
            <Button name="MyYouTubeChanel - 2" callBack={()=>button1Foo('Im Ivan')}/>
            <Button name="MyYouTubeChanel - 3" callBack={button3Foo}/>
        </div>
    );
}

export default App;
