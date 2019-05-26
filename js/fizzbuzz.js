/*
    FizzBuzz

    Display a list of numbers from 1 to 100.
    If the number is divisible by 3, display Fizz.
    If the number is divisible by 5, display Buzz.
    If the number is divisible by 3 and 5, display FizzBuzz.
    Otherwise, display the number.
*/

function fizzBuzz() {
    var result = "";
    
    for(var i=1; i < 101; i++) {
        if (i % 15 == 0)
            result += "FizzBuzz, ";
        else if (i % 3 == 0)
            result += "Fizz, ";
        else if (i % 5 == 0)
            result += "Buzz, ";
        else
            result += (i + ", ");
    }

    document.write(result.slice(0, result.length-2));
}

window.fizzBuzz();