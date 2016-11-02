/*
Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way.
*/

function drop_egg (height){
    if(height > 14){
        return true
    } 
      else {
        return false
    }
}

function egg_drop_binary(maxHeight) {
    var minHeight = 0; ++maxHeight;
    console.log("setting minHeight:", minHeight);
    console.log("setting maxHeight:", maxHeight);
    while (maxHeight > minHeight + 1){
        var height = Math.floor((maxHeight + minHeight) / 2);
        console.log("current minHeight:", minHeight, "current maxHeight:", maxHeight);
        console.log("height:",height);
        if (drop_egg(height)){
            console.log("egg broke. floor is higher than 14\n");
            maxHeight = height;
        } else {
            console.log("egg intact. floor is lower than 14\n");
            minHeight = height;
        }
    }
    console.log("return minHeight:", minHeight);
    return minHeight;
}

egg_drop_binary(100)