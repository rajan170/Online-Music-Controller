import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Room(props) {

    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    const { roomCode } = useParams();
    return <div>
        <h3>Room Code: {roomCode}</h3>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {guestCanPause}</p>
        <p>Host: {isHost}</p>
    </div>
}





// import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";

// export default class Room extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             votesToSkip: 2,
//             guestCanPause: false,
//             isHost: false,
//         };

//         this.RoomCode = this.props.match.params.roomCode
//         //{this.RoomCode}=useParams();
//     }


//     render() {
//         return (
//             <div>
//                 <h3>Room Code:{this.roomCode}</h3>
//                 <p>{this.state.votesToSkip}</p>
//                 <p>Guest Can Pause: {this.state.guestCanPause}</p>
//                 <p>Host:{this.state.isHost}</p>
//             </div>
//         );
//     }
// }