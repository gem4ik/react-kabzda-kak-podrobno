import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {HandmadeSelector} from "./components/HandmadeSelector";
import {v1} from "uuid";

export type SelectorItemTypes = {
    id: string
    title: string
    value: number
}

function App() {

    const SelectorItems: SelectorItemTypes[]= [
        {id: v1(), title: "Moscow", value: 0},
        {id: v1(), title: "Minsk", value: 1},
        {id: v1(), title: "Kiev" , value: 2},
    ]

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
            <hr/>
            <HandmadeSelector option={SelectorItems}/>
            <hr/>
        </div>
    );
}

export default App;