import React, { useContext } from 'react';
import { Context } from '../store/store';


export default function Home (){
    const [ state, dispatch ] = useContext(Context);

    console.table(state);
    return (
        <div>
            <h1>Home</h1>
        </div>
        
    )
};