//Need to create a new map
//starting with idendifying rows and columns
//Can add room/space/tile size if we want to do this like a gameboard or example 2 provided as visualization
//Otherwise need to do dots plotted
//Need items in rooms as well

export class MapMaker {
    constructor(rows, columns, room_size, layers) {
        this.rows = rows;
        this.columns = columns;
        this.room_size = room_size;
        this.layers = layers;
    }
//gets room of specific location on map
    getRoom = (layer, column, row) => {
        return this.layers[layer][row *this.columns +column];
    };
//get column at x axis coordinate 
    getColumn = x => {
        return Math.floor(x / this.room_size);
    };
//get row at y axis coordinate
    getRow = y => {
        return Math.floor(y / this.room_size);
    };
//get x and y coordinates where columns and rows are
    getX = column => {
        return column * this.room_size;
    };

    getY = row => {
        return row * this.room_size;
    };

//Check to see if there's a wall at the next space

    isSolidWall = (x, y) => {
        const column = Math.floor(x / this.room_size);
        const row = Math.floor(y / this.room_size);

        return this.layers.reduce((res, layer, index) => {
            const room = this.getRoom(index, column, row);
            //set some solid walls
            const isWall = room === 3 || room === 4 || room === 5;

            return res || isWall;
        }, false);
    };
}