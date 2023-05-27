import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";

function App() {

    const [collapsedValue, setCollapsedValue] = useState<boolean>(false)
    const [collapsedSecondValue, setCollapsedSecondValue] = useState<boolean>(false)
    const setCollapsedHandler= () => {
        setCollapsedValue(!collapsedValue)
    }
    const setCollapsedSecondHandler =()=> {
        setCollapsedSecondValue(!collapsedSecondValue)
    }

    const [squareOnOff, setSquareOnOff] = useState(false)
    const [roundOnOff, setRoundOnOff] = useState(false)
    const setSquareChecker= () => {
        setSquareOnOff(!squareOnOff)
    }
    const setRoundChecker= () => {
        setRoundOnOff(!roundOnOff)
    }

    const [ratingValue, setRatingValue] = useState(0)

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
            <OnOff
                squareOnOff={squareOnOff}
                roundOnOff={roundOnOff}
                setSquareChecker={setSquareChecker}
                setRoundChecker={setRoundChecker}
            />
            <hr/>
            <Rating
                setRatingValue={setRatingValue}
                ratingValue={ratingValue}
            />
        </div>
    );
}

export default App;