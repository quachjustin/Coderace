//functional components
//use hooks;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import createBrowserHistory from 'history';


const GameMenu = props => {
    //access to history object
    let history = useNavigate();
    return(
        <div className = "text-center">
            <h1>Welcome to Coderacer</h1>
            <button type = "button" onClick = {()=> history.push('/game/create')}
                                    className = "btn btn-primary btn-lg mr-3">Create Room</button>
            <button type = "button" onClick = {()=> history.push('/game/join')}
                                    className = "btn btn-primary btn-lg">Join Room</button>
        </div>
    )
}

export default GameMenu;

