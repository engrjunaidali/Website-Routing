import React, { useState } from 'react'

const Counter = () => {
    let first = "Junaid";
    const [name,setName] = useState(first);

    const changeName = () =>{
        let newName = "Ali";
        setName(newName);
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Click</button>
            <input type="text" />
        </div>
    )
}

export default Counter
