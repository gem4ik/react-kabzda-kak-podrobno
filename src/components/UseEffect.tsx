import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)


    useEffect(()=> {
        document.title = count.toString()
    }, [count])

    return (
        <div>
            Hello, {count}, {fake}
            <button onClick={()=>setCount(count+1)} > counter + </button>
            <button onClick={()=>setFake(fake+1)} > fake + </button>
        </div>
    );
};