import React from 'react';

const MapCol = props => {
    return(
        <div 
            className="gridCol" 
            style={{
                width: '40px', 
                height: '40px', 
                border: '1px solid black', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
         {props.col.id}
        </div>
    )
}

export default MapCol;