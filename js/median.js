/*
    Google Median Problem from AITP meeting

    Create a class that contains at least two functions:
    1. Function that inserts an integer into any type of collection.
    2. Function that gets the median of a collection.

    The collection will only contain integers.

    You may use helper functions or you can create them yourself.
*/

function insertIntoArray(arr, num) {
    arr[arr.length] = num;
    return arr;
}

function getMedian(myArray) {
    if (myArray.length < 1) {
        document.write("Please add values to the collection.");
    } else {
        var myArray = insertionSortAsc(myArray);
        if (myArray.length % 2 == 0) {
            var hi = myArray.length / 2;
            var lo = hi - 1;
            return ((myArray[hi] + myArray[lo]) / 2);
        } else {
            return myArray[Math.floor(myArray.length / 2)];
        }
    }
}

function insertionSortAsc(arr) { //Sort in ascending order
    for (var j = 1; j < arr.length; j++) { //[6,5]
        var key = arr[j]; //5
        var i = j - 1; //0

        while (i > -1 && arr[i] > key) { //arr[0] == 6, 6 >5
            arr[i+1] = arr[i]; //arr[1] = arr[0], arr[1] = 6
            i = i - 1; //-1
        }

        arr[i+1] = key; //arr[0] = 5
    }

    return arr;
}

function insertionSortDesc(arr) { //Sort in descending order
    for (var j = 1; j < arr.length; j++) { //[5,6]
        var key = arr[j]; //6
        var i = j - 1; //0

        while (i > -1 && arr[i] < key) { //arr[0] == 5, 5 < 6
            arr[i+1] = arr[i]; //arr[1] = arr[0], arr[1] = 5
            i = i - 1; //-1
        }

        arr[i+1] = key; //arr[0] = 6
    }

    return arr;
}


