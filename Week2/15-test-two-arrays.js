var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
console.log(x==y);    // Returns false
console.log(JSON.stringify(x)==JSON.stringify(y)); // Return true
console.log(JSON.stringify(z)==JSON.stringify(x)); //// Return true
