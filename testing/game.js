var grid = new Array(17);
var turn = 0
var score = 0

//FROM INIT FUNCTION, i IS Y VALUES, j IS X VALUES

function init() {
    grid = []
    $(".grid").empty().show();
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    for (i = 1; i < 17; i++) {
        grid.push([]);
        grid[i].push(0);
        $('<div class="outside"></div>').appendTo('.grid');
        for (j = 1; j < 17; j++) {
            var v;
            v = Math.floor((Math.random() * 4) + 1);

            r = Math.random();
            if (r < 0.0013) {
                v = 5
            };

            r = Math.random();
            if (r < 0.0039) {
                v = 6
            };

            grid[i].push(v);

            switch (v) {
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
            $(`<div class="${v}" onclick="test(${j},${i})"></div>`).appendTo(`body > section > div.grid > div:nth-child(${i})`);
            //$(`<div class="${v}"></div>`).appendTo(`.grid div:nth-child(${i})`);
        }
        
        grid[i].push(0);
    }
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    animateIn();
    console.log(grid);
};

function test(x, y) {
    turn++;
    recurs = 0;
    var c = grid[y][x]

    if (c == 5) {
        var n = [0, 0, 0, 0]
        var low = 0
        for (i = 1; i < 17; i++) {
            for (j = 1; j < 17; j++) {
                var a = grid[j][i]
                if (a == 1) {
                    n[0] = n[0] + 1
                } else if (a == 2) {
                    n[1]++
                } else if (a == 3) {
                    n[2]++
                } else if (a == 4) {
                    n[3]++
                }
            }
        }
        for (k = 0; k < 3; k++) {
            if (n[k] <= n[low]) low = k;
        }
        recurs = n[low];
        for (i = 1; i < 17; i++) {
            for (j = 1; j < 17; j++) {
                var a = grid[j][i]
                if (a == low) {
                    grid[j][i] = 0
                }
            }
        }


 /*   } else if (c == 6) {
        test(x, y - 1);
        test(x, y + 1);
        test(x - 1, y);
        test(x + 1, y);*/
    } else {
        if (grid[y - 1][x] == c) {
            grid[y - 1][x] = 0;
            test2(x, y - 1, c);
        };
        if (grid[y + 1][x] == c) {
            grid[y + 1][x] = 0;
            test2(x, y + 1, c);
        };
        if (grid[y][x - 1] == c) {
            grid[y][x - 1] = 0;
            test2(x - 1, y, c);
        };
        if (grid[y][x + 1] == c) {
            grid[y][x + 1] = 0;
            test2(x + 1, y, c);
        }
    }
    grid[y][x] = 0;

    for (i = 1; i < 17; i++) {
        for (j = 1; j < 17; j++) {
            if (grid[i][j] == 0) {
                $(`.outside:nth-child(${i}) > div:nth-child(${j})`).removeAttr('class').addClass("transparent");
            }
        }
    };

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
function test2(x, y, c) {
    console.log('Recurring...')
    recurs++;
    if (grid[y - 1][x] == c) {
        grid[y - 1][x] = 0;
        test2(x, y - 1, c);
    };
    if (grid[y + 1][x] == c) {
        grid[y + 1][x] = 0;
        test2(x, y + 1, c);
    };
    if (grid[y][x - 1] == c) {
        grid[y][x - 1] = 0;
        test2(x - 1, y, c);
    };
    if (grid[y][x + 1] == c) {
        grid[y][x + 1] = 0;
        test2(x + 1, y, c);
    };
    grid[y][x] = 0;


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
    };
};

//Animations
function animateIn() {
    TweenMax.staggerFrom($('.outside'), 0.5, {x: '-100vh', autoAlpha: 0, ease: Expo.easeOut }, 0.03);
};

function start() {
    score = 0
    turn = 0
    $('body > section > div.controls > div > h1').text(`Score: ${score}`).show();
    $('body > section > div.controls > div > h2').text(`Turn: ${turn}/50`).show();
    $('button').text("Reset grid");
    init();
}