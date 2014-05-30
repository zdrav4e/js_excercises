"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  board.forEach(function(row){
    console.log(row.join(""));
  });
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null,
    x,
    y,
    xTurnSign;

  while(!checkWin(board)) {
    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for x");
      xTurnSign = "X";
    } else {
      console.log("Place for y");
      xTurnSign = "Y";
    }

    // this is blocking prompt
    position = prompt("x y>");
    x = position.split("").shift();
    y = position.split("").pop();

    board[x-1][y-1] = xTurnSign;
    xTurn = !xTurn;
  }

  console.log("The winner is " + xTurnSign);
  }

  function checkWin(board) {
    var
      length = board.length,
      maindiagonal = [],
      seconddiagonal = [],
      col = [],
      i,
      j,

      winrow = function(row) {
        var i, l = row.length;
        for (i = 1; i < l; i++) {
          if (row[0] === "*" || row[i] !== row[0]) {
            return false;
          }
        }
        return true;
      };

    for(i = 0; i<length; i++) {
      if (winrow(board[i])) {
        return true;
      }

      for(j = 0; j<length; j++) {
        col.push(board[j][i]);
      }
      if (winrow(col)) {
        return true;
      }
      col = [];

      maindiagonal.push(board[i][i]);
      seconddiagonal.push(board[i][length-i-1]);
    }

    if (winrow(maindiagonal) || winrow (seconddiagonal)) {
      return true;
    }

    return false;
  }

gameLoop();
