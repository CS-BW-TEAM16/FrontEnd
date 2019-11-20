import React from 'react';
import MapCol from './MapCol';

const MapRow = props => {

    return (
        <div className="gridRow" style={{display: 'flex'}}>
            {props.row.map(col => <MapCol col={col}/>)}
        </div>
    )
}

export default MapRow;