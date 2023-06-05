import React, {useMemo, useState} from 'react';

export const Users = ( props: {users: Array<string>})=> {

    return(
        <div>
            {props.users.map((el,i)=><div key={i}>{el}</div>)}
        </div>
    )
}

export const MemoCounter = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['zxc','asd','qwe',])

    const newArray = useMemo(()=>{
        console.log('newArray')
       return users.filter(u=>u.toLowerCase().indexOf('a') > -1)
    },[users, counter])

    return (
        <div>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
            {counter}
            <Users users={newArray}/>
            <Users users={users}/>
        </div>
    );
}


