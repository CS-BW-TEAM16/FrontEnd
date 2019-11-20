import React, { Component } from "react";
import { MapMaker } from "./MapHelpers";
import Player from '../Player/Player'
import Room from './Room'
import MapRow from './MapRow'
import { connect } from 'react-redux';
// import {grid} from './grid'
import config from "../../config/index";

const Map = props => {
    console.log(props)
    return(
        <div 
            className="world"
            style={{
                width: "1000px",
                height: "600px",
                backgroundColor: "green",
                margin: "10% auto",
                position: "relative",
            }}    
        >
            {/* {props.grid.map(row => <MapRow row={row} />)} */}
            {props.allRooms.map(room =>  <Room room={room}  />)}
            <Player
               playerPosition={props.playerPosition}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    allRooms: state.gameState.allRooms,
    grid: state.gameState.grid,
    playerPosition:{
        x: state.playerState.x,
        y: state.playerState.y
    }
})

export default connect(
    mapStateToProps
)(Map) 