/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var row;
  // randomly place a rook in first row
  board.togglePiece(0, _.random(n - 1));

  // add a rook each to second row onwards on non conflicting places
  for (var i = 1; i < n; i++) {
    ithRow = board.get(''+i);
    col = 0;
    while (col < n) {
      board.togglePiece(i, col);
      if (board.hasColConflictAt(col)) {
        board.togglePiece(i, col); // remove piece
        col++;
      } else {
        break;
      }
    }
  }
  var solution = board.getBoardMatrix(); 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 

  function subroutine (n, board) {
  // start with a fresh board if current board is not passed
  var board = board || new Board({n:n});
  var rowsIndeces = _.range(n);
  for (var i = 0; i <= rows; i++) {
    if (board.)
  };
  // if all rows contain a piece each
    // solutionCount++
    // return

  // recurse through unconfilcting rows
    // find first unconflicting row in board
    // make copies of the board for every unconflicting pos in row
    // place piece at first unconflicting piece

  }(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
