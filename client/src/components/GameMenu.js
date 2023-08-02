//functional components
//use hooks;
//useHistory is replaced with useNavigate

import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = props => {
    //access to history object
    let navigate = useNavigate();
    return(
        <div className = "text-center">
            <h1>Welcome to Coderacer</h1>
            <button type = "button" onClick = {()=> navigate.push('/game/create')}
                                    className = "btn btn-primary btn-lg mr-3">Create Room</button>
            <button type = "button" onClick = {()=> navigate.push('/game/join')}
                                    className = "btn btn-primary btn-lg">Join Room</button>
        </div>
    )
}
export default GameMenu;

