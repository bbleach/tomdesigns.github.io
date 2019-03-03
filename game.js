var grid = new Array(17);
var turn = 0
var score = 0

/*---------------------------------------------------------------------------------
 init();
 
 The array structure is grid[y][x] - where '0 <= [y], [x] <= 18.'
 
 The grid is 18 * 18 although the game is 16 * 16 in the middle.  The 'padding'
 of 0's means the testing functions won't throw range errors when checking
 the edges.  The 'play area' could be defined as '0 < [y], [x] < 18.'

The init() function works to both start and reset a game (See line comments)
---------------------------------------------------------------------------------*/

function init() {
    grid = [] //Empty grid array
    $(".grid").empty().show(); //Empty the grid <div> tag in index.html
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //Padding zeros
    for (i = 1; i < 17; i++) {
        grid.push([]); //Creates a row
        grid[i].push(0); //Padding zeros
        $('<div class="outside"></div>').appendTo('.grid'); //Create html <div> rows
        for (j = 1; j < 17; j++) {
            var v = Math.floor((Math.random() * 4) + 1) //Random integer 0 < v <= 4
            grid[i].push(v); //Append v to row

            switch (v) { //Convert v into colour string
                case 1:
                    v = "red";
                    break;
                case 2:
                    v = "green";
                    break;
                case 3:
                    v = "blue";
                    break;
                case 4:
                    v = "yellow";
            };
            $(`<div class="${v}" onclick="test(${j},${i})"></div>`).appendTo(`body > section > div.grid > div:nth-child(${i})`); //Creates block objects, where v is the class referencing style.css (for colour).
        }
        
        grid[i].push(0);
    }
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    animateIn();
};

/*---------------------------------------------------------------------------------
test(x coordinate, y coordinate); 

Pop the block at the clicked location, attempt to also pop any adjacent blocks.
If an adjacent block is popped, the iterative function is called to do so until
no more blocks can be popped.
---------------------------------------------------------------------------------*/

function test(x, y) {
    //Add 1 to turn counter, set recursions to 0, initialize c as the (x, y) point in the array
    turn++;
    recurs = 0;
    var c = grid[y][x]

    //Top
    if (grid[y - 1][x] == c) {
        grid[y - 1][x] = 0;
        iterate(x, y - 1, c);
    };
    //Bottom
    if (grid[y + 1][x] == c) {
        grid[y + 1][x] = 0;
        iterate(x, y + 1, c);
    };
    //Left
    if (grid[y][x - 1] == c) {
        grid[y][x - 1] = 0;
        iterate(x - 1, y, c);
    };
    //Right
    if (grid[y][x + 1] == c) {
        grid[y][x + 1] = 0;
        iterate(x + 1, y, c);
    }
    //Set initial point to 0, then update
    grid[y][x] = 0;
    updateGrid();
    updateScore();
};
/*---------------------------------------------------------------------------------
iterate(x coordinate, y coordinate, colour value); 

Same as above, however c is passed to the function from 'test().'  This stops the
original value of the colour changing from it's original value.  This is the only
reason a discrete second function is needed.
---------------------------------------------------------------------------------*/

function iterate(x, y, c) {
    recurs++;
    if (grid[y - 1][x] == c) {
        grid[y - 1][x] = 0;
        iterate(x, y - 1, c);
    };
    if (grid[y + 1][x] == c) {
        grid[y + 1][x] = 0;
        iterate(x, y + 1, c);
    };
    if (grid[y][x - 1] == c) {
        grid[y][x - 1] = 0;
        iterate(x - 1, y, c);
    };
    if (grid[y][x + 1] == c) {
        grid[y][x + 1] = 0;
        iterate(x + 1, y, c);
    };
    grid[y][x] = 0;
};

/*---------------------------------------------------------------------------------
updateGrid(); 

Simple subroutine to iterate through the playable area, detect the colour value
stored in the grid array and update classes as necessary.
---------------------------------------------------------------------------------*/

function updateGrid() {
    for (i = 1; i < 17; i++) {
        for (j = 1; j < 17; j++) {
            v = grid[i][j];
            switch (v) {
                case 0:
                    $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("transparent");
                    break;
                case 1:
                    $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("red");
                    break;
                case 2:
                    $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("green");
                    break;
                case 3:
                    $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("blue");
                    break;
                case 4:
                    $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("yellow");
                    break;
            }
        }
    }
};

/*---------------------------------------------------------------------------------
updateScore(); 

The number of times the iterate() function is called is equivalent to the number
of blocks 'popped.'  This allows for an extremely easy way of calculating the
fixed score increases as well as the math-based score multiplier - 50n(n+1)
---------------------------------------------------------------------------------*/

function updateScore() {
    if (recurs == 0) {
        score -= 100
    } else if (recurs == 2) {
        score += 100
    } else if (recurs == 3) {
        score += 300
    } else if (recurs == 4) {
        score += 600
    } else if (recurs == 5) {
        score += 1000
    } else {
        score += ((50 * recurs) * (recurs + 1))
    }
    $('body > section > div.controls > div > h1').text(`Score: ${score}`);
    $('body > section > div.controls > div > h2').text(`Turn: ${turn}/50`);
};

/*---------------------------------------------------------------------------------
animateIn(); 

Nothing special, TweenMax staggering animation of each row - purely aesthetic.
---------------------------------------------------------------------------------*/

function animateIn() {
    TweenMax.staggerFrom($('.outside'), 2, {x: '-100vh', autoAlpha: 0, ease: Expo.easeOut }, 0.1);
};

/*---------------------------------------------------------------------------------
start(); 

Main function called by the start button - resets score and turn values and sets
up the play area (ish)
---------------------------------------------------------------------------------*/

function start() {
    score = 0
    turn = 0
    $('body > section > div.controls > div > h1').text(`Score: ${score}`).show();
    $('body > section > div.controls > div > h2').text(`Turn: ${turn}/50`).show();
    $('button').text("Reset grid");
    init();
}