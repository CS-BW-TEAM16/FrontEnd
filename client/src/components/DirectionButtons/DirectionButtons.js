import React from "react";

const DirectionButtons = ({ handleMove }) => {
    return (
        <div>
            <div onClick ={() => handleMove("n")} />
            <div onClick ={() => handleMove("e")} />
            <div onClick ={() => handleMove("s")} />
            <div onClick ={() => handleMove("w")} />
        </div>
    );
};

export default DirectionButtons;
DirectionButtons.defaultProps = {
    handleMove: () => "moved"
};