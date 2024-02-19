const gridHeight = 6
const gridLength = 6
let grid: number[][] = [];

const generateEmptyGrid = (length: number, height: number) => {
  const emptyGrid: number[][] = []
  for(let l = 0; l < height; l++) {
    emptyGrid.push([])
    for(let h = 0; h < length; h++) {
      emptyGrid[l].push(0)
    }
  }
  return emptyGrid;
}

const cloneArray = (original: number[][]) => {
  return original.map(innerArray => [...innerArray]);
}

//this draws corners twice might not be worth solving
const drawRoom = (startingY: number, startingX:number, roomLength: number, roomHeight: number) => {
  const modifiedGrid = cloneArray(grid)
  for(let y = startingY; y < startingY+roomHeight; y++) {
    //left wall
    modifiedGrid[y][startingX] = 1;
    //right wall
    modifiedGrid[y][startingX+roomLength-1] = 1;
  }
  for(let x = startingX; x < startingX+roomLength; x++) { 
    //top wall
      modifiedGrid[startingY][x] = 1;
    //bottom wall
    modifiedGrid[startingY+roomHeight-1][x] = 1;
  }
  return modifiedGrid;
}

//TESTS

// GENERATE GRID
grid = generateEmptyGrid(gridLength, gridHeight);
console.log(grid)

// TODO POPULATE GRID WITH 3X3 ROOMS
console.log(drawRoom(2,1,5,4));
// TODO GROW ROOMS WITH EMPTY SPACE
// TODO LINK ROOMS NEAR EACH OTHER UNTIL THERE IS NO UNLINKED ROOM
// TODO GENERATE ENTRY AND EXIT POINTS

