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

 