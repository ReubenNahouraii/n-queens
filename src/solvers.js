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
  var solution = []; 
  
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    // populate n by n array of arrays of 0s
    solution.push(Array(n).fill(0));
    // edit diagonal elements to all be 1s
    solution[rowIndex][rowIndex] = 1; 
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.makeDataCopy = function(arrayOfArrays) {
  return arrayOfArrays.map(array => array.slice());
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {


  solutionsArray = [];
  // start by making board of all 0s
  var solution = []; 
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    solution.push(Array(n).fill(0));
  }
  let numPieces = 0;
  let currentRow = 0;
  let currentCol = 0; 
  // placePiece(currentRow, currentCol) 
    // check if currentRow or currentCol is out of bounds. If so, exit
    // look for the first place that is a 0, and replace that 0 by a 1
    // increment numPieces
    // check if numPieces = n. 
      // If so, check against our requirements for no col/row collisions. 
        // If it passes, push to solutions array
  
        // return
    

    // increment currentCol and if currentCol is too big, take it mod n, and then increment currentRow
    // while (currentRow and currentCol are both in bounds) {
      // placePiece(currentRow, currentCol, numPieces, copyOfBoard) again
      // increment currentCol and if currentCol is too big, take it mod n, and then increment currentRow
      // placePiece again
      // etc
    // }
      
    
  

    
  //var solutionCount = solutionsArray.length;
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
