document.addEventListener("DOMContentLoaded", () => {
    candyCrushGame();
});

function candyCrushGame() {
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const width = 8;
    const squares = [];
    let score = 0;

    const candyColors = [
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/red-candy.png)",
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/blue-candy.png)",
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/green-candy.png)",
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/yellow-candy.png)",
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/orange-candy.png)",
        "url(https://raw.githubusercontent.com/kvgvmi/CandyCrush/master/Photos/purple-candy.png)",
    ];

// Creating Game Board
function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement("div");
        square.setAttribute("draggable", true);
        square.setAttribute("id", i);
        let randomColor = Math.floor(Math.random() * candyColors.length);
        square.style.backgroundImage = candyColors[randomColor];
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();

// Dragging the Candy
let colorBeingDragged;
let colorBeingReplaced;
let squareIdBeingDragged;
let squareIdBeingReplaced;

squares.forEach((square) =>
    square.addEventListener("dragstart", dragStart)
);
squares.forEach((square) => square.addEventListener("dragend", dragEnd));
squares.forEach((square) => square.addEventListener("dragover", dragOver));
squares.forEach((square) =>
    square.addEventListener("dragenter", dragEnter)
);
squares.forEach((square) =>
    square.addEventListener("drageleave", dragLeave)
);
squares.forEach((square) => square.addEventListener("drop", dragDrop));

function dragStart() {
    colorBeingDragged = this.style.backgroundImage;
    squareIdBeingDragged = parseInt(this.id);
    // this.style.backgroundImage = ''
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.style.backgroundImage = "";
}

function dragDrop() {
    colorBeingReplaced = this.style.backgroundImage;
    squareIdBeingReplaced = parseInt(this.id);
    this.style.backgroundImage = colorBeingDragged;
    squares[
        squareIdBeingDragged
    ].style.backgroundImage = colorBeingReplaced;
}

function dragEnd() {
    //Defining, What is a valid move?
    let validMoves = [
        squareIdBeingDragged - 1,
        squareIdBeingDragged - width,
        squareIdBeingDragged + 1,
        squareIdBeingDragged + width
    ];
    let validMove = validMoves.includes(squareIdBeingReplaced);

    if (squareIdBeingReplaced && validMove) {
        squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove) {
        squares[
            squareIdBeingReplaced
        ].style.backgroundImage = colorBeingReplaced;
        squares[
            squareIdBeingDragged
        ].style.backgroundImage = colorBeingDragged;
    } else
        squares[
            squareIdBeingDragged
        ].style.backgroundImage = colorBeingDragged;
}

 //Dropping candies once some have been cleared
 function moveIntoSquareBelow() {
    for (i = 0; i < 55; i++) {
        if (squares[i + width].style.backgroundImage === "") {
            squares[i + width].style.backgroundImage =
                squares[i].style.backgroundImage;
            squares[i].style.backgroundImage = "";
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);
            if (isFirstRow && squares[i].style.backgroundImage === "") {
                let randomColor = Math.floor(
                    Math.random() * candyColors.length
                );
                squares[i].style.backgroundImage = candyColors[randomColor];
            }
        }
    }
}

