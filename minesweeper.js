document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}

function setUpBoard() {

  board.cells = [];

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      var cell = {
        row: i,
        col: j,
        hidden: true,
        isMine: Math.random () >= 0.7,
        isMarked: false
      }
      board.cells.push(cell); 
    }  
  }
 return board

}

  // Don't remove this function call: it makes the game work!
function startGame() {

  setUpBoard();

  for (let i = 0; i < board.cells.length; i++) {

    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

  }

  lib.initBoard()

  //assign left mouse click to call checkForWin
  document.addEventListener("mousedown", checkForWin)
  //assign right mouse click to call checkForWin
  document.addEventListener("contextmenu", checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  for (let i = 0; i < board.cells.length; i++) {

    if (board['cells'][i].isMine == true && 
         board['cells'][i].isMarked == false) {

        return;

    } else if (board['cells'][i].isMine === false &&
                board['cells'][i].isHidden === true) {

        return;

    } 

  } 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!');
    alert("Victory!!!!")
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  var count = 0;

  for (let i = 0; i <= surrounding.length - 1; i++) {

    if (surrounding[i].isMine === true) {
      count++
    }
  }
  return count;
}

// Testing out sound functions

// function playSound() {

//   var victory = new Audio('audio/victory');
//   var defeat = new Audio('audio/defeat.mp3');
//   var clicked = new Audio('audio/clicked');

//   if (board['cells'][i].isMine == true) {

//     defeat.play();
    
  // }

  // var audio = new Audio('audio');
  //   audio.play();
// }