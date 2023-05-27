import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
    const [collapsedValue, setCollapsedValue] = useState<boolean>(false)
    const [collapsedSecondValue, setCollapsedSecondValue] = useState<boolean>(false)

    const setCollapsedHandler= () => {
        setCollapsedValue(!collapsedValue)
    }
    const setCollapsedSecondHandler =()=> {
        setCollapsedSecondValue(!collapsedSecondValue)
    }

    return (
        <div>
            <Accordion
                collapsed={collapsedValue}
                setCollapsedHandler={setCollapsedHandler}
            />
            <Accordion
                collapsed={collapsedSecondValue}
                setCollapsedHandler={setCollapsedSecondHandler}
            />
            <hr/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;