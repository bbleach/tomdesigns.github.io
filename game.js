//Init. global scope variables
var grid = new Array(17), turn = 0, score = 0, recurs = 0, h = 0

//JQuery document ready callback
$(document).ready(start);

/*---------------------------------------------------------------------------------
 init();
 
 The array structure is grid[y][x] - where '0 <= [y], [x] <= 16.'

 The init() function works to both start and reset a game (See line comments)
---------------------------------------------------------------------------------*/

function init() {
    grid = [] //Empty grid array
    $(".grid").empty().show(); //Empty the grid <div> tag in index.html
    for (i = 0; i < 16; i++) {
        grid.push([]); //Creates a row
        $('<div class="outside"></div>').appendTo('.grid'); //Create html <div> rows
        for (j = 0; j < 16; j++) {
            var v = Math.floor((Math.random() * 4) + 1) //Random integer 0 < v <= 4

            if (Math.random() < 0.002 && i > 0 && j > 0 && i < 15 && j < 15) {
                v = 6
            } else if (Math.random() < 0.001) {
                v = 5
            };

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
                    break;
                case 5:
                    v = "wipeout";
                    break;
                case 6:
                    v = "bomb";
            };
            $(`<div class="${v}" onclick="test(${j},${i})"></div>`).appendTo(`body > section > div.grid > div:nth-child(${i + 1})`); //Creates block objects, where v is the class referencing style.css (for colour).
        }
    }
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
    
    //Crash prevention
    if (c == 0) {
        return;
    };
 
    //Top
    try {
        if (grid[y - 1][x] == c) {
            grid[y - 1][x] = 0;
            iterate(x, y - 1, c);
        }
    }
    catch (error) {
    };
    //Bottom
    try {
        if (grid[y + 1][x] == c) {
            grid[y + 1][x] = 0;
            iterate(x, y + 1, c);
        }
    }
    catch (error) {
    };
    //Left
    try {
        if (grid[y][x - 1] == c) {
            grid[y][x - 1] = 0;
            iterate(x - 1, y, c);
        }
    }
    catch (error) {
    };
    //Right
    try {
        if (grid[y][x + 1] == c) {
            grid[y][x + 1] = 0;
            iterate(x + 1, y, c);
        }
    }
    catch (error) {
    };

    if (c == 5) {
        l = least();
        for (i = 0; i < 16; i++) {
            for (j = 0; j < 16; j++) {
                if (grid[j][i] == l) {
                    grid[j][i] = 0
                }
            }
        }
    };

    if (c == 6) {
        grid[y][x] = 0
        test(x + 1, y);
        test(x - 1, y);
        test(x, y + 1);
        test(x, y - 1);
        test(x - 1, y - 1);
        test(x + 1, y - 1);
        test(x + 1, y + 1);
        test(x - 1, y + 1);
        turn = turn - 8
    };
    
    //Set initial point to 0, then update
    grid[y][x] = 0;
    updateGrid();
    updateScore();

    if (turn > 49) {
        checkScore();
    };
};
/*---------------------------------------------------------------------------------
iterate(x coordinate, y coordinate, colour value); 

Same as above, however c is passed to the function from 'test().'  This stops the
original value of the colour changing from it's original value.  This is the only
reason a discrete second function is needed.
---------------------------------------------------------------------------------*/

function iterate(x, y, c) {
    recurs++;
    //Top
    try {
        if (grid[y - 1][x] == c) {
            grid[y - 1][x] = 0;
            iterate(x, y - 1, c);
        }
    }
    catch (error) {
    };
    //Bottom
    try {
        if (grid[y + 1][x] == c) {
            grid[y + 1][x] = 0;
            iterate(x, y + 1, c);
        }
    }
    catch (error) {
    };
    //Left
    try {
        if (grid[y][x - 1] == c) {
            grid[y][x - 1] = 0;
            iterate(x - 1, y, c);
        }
    }
    catch (error) {
    };
    //Right
    try {
        if (grid[y][x + 1] == c) {
            grid[y][x + 1] = 0;
            iterate(x + 1, y, c);
        }
    }
    catch (error) {
    };
    grid[y][x] = 0;
};

/*---------------------------------------------------------------------------------
updateGrid(); 

Simple subroutine to iterate through the playable area, detect the colour value
stored in the grid array and update classes as necessary.
---------------------------------------------------------------------------------*/

function updateGrid() {

    drop();
    fill();

    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            v = grid[i][j];
            switch (v) {
                case 0:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("transparent");
                    break;
                case 1:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("red");
                    break;
                case 2:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("green");
                    break;
                case 3:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("blue");
                    break;
                case 4:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("yellow");
                    break;
                case 5:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("wipeout");
                    break;
                case 6:
                    $(`.outside:nth-child(${i + 1}) > div:nth-child(${j + 1})`).removeAttr('class').addClass("bomb");
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
    $('body > section > div.controls > div > h2:nth-child(3)').text(`Turn: ${turn}/50`);
};

/*---------------------------------------------------------------------------------
least(); 

Returns the numerical value of the least occurring colour.
---------------------------------------------------------------------------------*/

function least() {
    var n = [0, 0, 0, 0]
    var low = 0

    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            switch (grid[i][j]) {
                case 1:
                    n[0]++
                    break;
                case 2:
                    n[1]++
                    break;
                case 3:
                    n[2]++
                    break;
                case 4:
                    n[3]++
            }
        }
    };
    for (k = 0; k < 4; k++) {
        if (n[k] < n[low]) low = k;
    };

    recurs = n[low]
    low++
    return low
};

/*---------------------------------------------------------------------------------
drop(); 

Iterates through the grid array, where the value below is 0, the value is shifted
down.  The 'a' value allows this to iterate while the value below is zero.
This is much more efficient than any other method.
---------------------------------------------------------------------------------*/

function drop() {
    for (i = 15; i > -1; i--) {
        for (j = 15; j > -1; j--) {
            if (grid[i][j] != 0) {
                var a = 0
                try {
                    while (grid[i + 1 + a][j] == 0) {
                        grid[i + 1 + a][j] = grid[i + a][j]
                        grid[i + a][j] = 0
                        a++
                    }
                }
                catch (error) {
                }
            }
        }
    }
};

/*---------------------------------------------------------------------------------
fill(); 

Iterates through the array, replacing all 0's with a random colour value.
Wipeout and bomb blocks have the same chance of spawning as in the init()
function.
---------------------------------------------------------------------------------*/

function fill() {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            if (grid[i][j] == 0) {
                var v = Math.floor((Math.random() * 4) + 1)

                if (Math.random() < 0.002) {
                    v = 6
                } else if (Math.random() < 0.001) {
                    v = 5
                };

                grid[i][j] = v
            }
        }
    }
}

/*---------------------------------------------------------------------------------
checkScore(); 

Compares the current score the localStorage 'highscore' key and updates as
necessary.
---------------------------------------------------------------------------------*/

function checkScore() {
    h = localStorage.getItem('highscore')
    if (score > h) {
        localStorage.setItem('highscore', score)
    }
    $('body > section > div.controls > div > h2:nth-child(2)').text(`Highscore: ${localStorage.getItem('highscore')}`);
    start();
}

/*---------------------------------------------------------------------------------
clearScore(); 

Sets the localStorage key 'highscore' to 0 and updates the play area as necessary.
---------------------------------------------------------------------------------*/

function clearScore() {
    localStorage.setItem('highscore', 0)
    $('body > section > div.controls > div > h2:nth-child(2)').text(`Highscore: ${localStorage.getItem('highscore')}`);
}

/*---------------------------------------------------------------------------------
animateIn(); 

Nothing special, TweenMax staggering animation of each row - purely aesthetic.
---------------------------------------------------------------------------------*/

function animateIn() {
    TweenMax.staggerFrom($('.outside'), 0.4, {x: '-100vh', autoAlpha: 0, ease: Expo.easeOut }, 0.023);
};

/*---------------------------------------------------------------------------------
start(); 

Main function called by JQuery's page load callback.  Resets score and turn values
and sets up the play area (ish)
---------------------------------------------------------------------------------*/

function start() {
    score = 0
    turn = 0
    $('body > section > div.controls > div > h1').text(`Score: ${score}`).show();
    $('body > section > div.controls > div > h2:nth-child(2)').text(`Highscore: ${localStorage.getItem('highscore')}`).show();
    $('body > section > div.controls > div > h2:nth-child(3)').text(`Turn: ${turn}/50`).show();
    $('body > section > div.controls > div > p').show();
    $('body > section > div.controls > div:nth-child(2) > button:nth-child(1)').show();
    $('body > section > div.controls > div:nth-child(2) > button:nth-child(2)').show();
    init();
};
