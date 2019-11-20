import React from 'react'

const Room = props => {

    
  
        console.log(props)

        return(
            <div 
                className="room"
                style={{
                    position: "absolute",
                    top: `${props.room.x}px`,
                    left: `${props.room.y}px`,
                    border: "1px solid black",
                    width: "40px",
                    height: "40px"
                }}
            >
                {props.room.id}
            </div>
        )
   
}

export default Room;