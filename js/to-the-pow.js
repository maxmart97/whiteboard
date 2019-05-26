function toThePow() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);

    document.getElementById("x").value = x;
    document.getElementById("y").value = y;

    if (isNaN(x) && isNaN(y)) {
        alert("Please enter an integer for both x and y.");
    } else if (x < 0) {

    } else if (y < 0) {

    } else if (x < 0 && y < 0) {

    } else {
        var counter = 1;
        var result = 1;

        while (counter <= y) {
            result *= x;
            counter++;
        }

        var result = "Result: " + x + "<sup>" + y + "</sup>" + " = " + result;
        document.getElementById("result").innerHTML = result;
    }
}

window.onload = function() {
    document.getElementById("go").onclick = toThePow;
}