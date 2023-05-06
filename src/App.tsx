import React from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
    return (
        <div>
            {/*<PageTitle value={"I'm the Page"}/>*/}
            {/*<PageTitle value={"two"}/>*/}
            <Accordion titleValue={"three"} collapsed={false}/>
            <Accordion titleValue={"two"} collapsed={true}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

export default App;