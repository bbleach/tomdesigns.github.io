$(function() {
    var arr = [blue, red, green, teal, darkblue, grey, purple, pink, orange],
        rand = Math.floor(Math.random() * arr.length),
        func = arr[rand];

    func();
});