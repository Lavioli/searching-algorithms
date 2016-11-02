var binarySearch = function(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

	//recursion base case- start will keep on incrementing to find the value until it reaches the end if it hasn't been found
    if (start > end) {
        return -1;
    }
    
    //index at the middle of a binary search
    var index = Math.floor((start + end) / 2);
    //the value of that specific index
    var item = array[index];
	
    console.log("start: ",start, " end: ", end, " index:", index);
    
    if (item == value) {
    	console.log("item == value  => true")
        return index;
    }
    else if (item < value) {
    	console.log("item < value  => true")
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
    	console.log("item > value  => true")
        return binarySearch(array, value, start, index - 1);
    }
};


var arr = [0, 1 ,2 ,3 ,4]
binarySearch(arr, 1);

/* 
OUTPUT:

start:  0  end:  5  index: 2
item > value  => true
start:  0  end:  1  index: 0
item < value  => true
start:  1  end:  1  index: 1
item == value  => true
*/