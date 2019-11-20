import React, { useState, useEffect } from "react";
import DirectionButtons from "../DirectionButtons/DirectionButtons";
import { connect } from 'react-redux';
import { initGame, fetchRooms, playerMove } from '../../redux/actions'
import Map from '../Map/Map'
//Will add other components here as we get going

const Game = _ => {

    const logOut = _ => {

        localStorage.removeItem('authToken')
        this.props.history.replace('/')
    }

    useEffect( _ => {
        console.log('didmount')

        this.props.initGame()
        this.props.fetchRooms()

        window.addEventListener('keydown', e => {
            console.log(e.keyCode)
            e.preventDefault()
            switch(e.keyCode){
                case 37:
                    return (this.props.playerMove('w'))
                
                case 38:

                    return (this.props.playerMove('n'))
                case 39:

                    return (this.props.playerMove('e'))
                case 40:

                    return (this.props.playerMove('s'))
            }
        })
    })  

        

        
    
    

    
   
        return (
            <>
                <section>
                    <input type="submit" value="Start" onClick={this.initialize} />
                    <input type="submit" value="Logout" onClick={this.logOut} />
                    <h1>Welcome, {this.props.name}</h1>
                    <h2>Players in the room: { this.props.playersInRoom.map(player => <p style={{fontSize: '12px'}}>{player}</p>) }</h2>
                    <h2>{this.props.current_room}</h2>
                    <h3>{this.props.description}</h3>
                    <p>Press start and use your arrow keys for movement between rooms</p>
                </section>
                <Map 
                />                
            </>
        );
    
}

    const mapStateToProps = state => ({
        name: state.playerState.name,
        allRooms: state.gameState.allRooms,
        current_room: state.playerState.current_room,
        description: state.gameState.description,
        playersInRoom: state.gameState.playersInRoom,
        playerPosition:{
            x: state.playerState.x,
            y: state.playerState.y
        }
    })

    export default connect(
        mapStateToProps,
        { initGame, fetchRooms, playerMove }
    )(Game)