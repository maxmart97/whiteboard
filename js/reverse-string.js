function reverseString() {

    var str = document.getElementById("myString").value;
    var reversedStr = "";

    for(var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    document.getElementById("orig").innerText = "Original String: " + str;

    document.getElementById("rev").innerText  = "Reversed String: " + reversedStr;
}

window.onload = function() {
    document.getElementById("go").onclick = reverseString;
};
