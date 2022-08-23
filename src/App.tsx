import React from 'react';
import './App.css';


// UI
function App() {
    /*const myFirstSubscriber = () => {
        console.log("Hello! I`m Vasya!")
    }
    const mySecondSubscriber = () => {
        console.log("Hello! I`m Ivan!")
    }*/

      const onClickHandler = (name: string) => {
          return console.log(name)
      }


    return (
        <div>
            <button onClick={()=>onClickHandler('Vasya')}>MyYouTubeChanel - 1</button>
            <button onClick={()=>onClickHandler('Ivan')}>MyYouTubeChanel - 2</button>


        </div>
    );
}

export default App;
