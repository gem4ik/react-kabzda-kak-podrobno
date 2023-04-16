import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {PageTitle} from "./components/PageTitle";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div>
            <PageTitle value={"I'm the Page"}/>
            <PageTitle value={"two"}/>
            <Accordion titleValue={"three"} collapsed={true}/>
            <Accordion titleValue={"two"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;