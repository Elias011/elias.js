function vehicle (color, code, age){
   //Used
    if (code === 1 && age > 0){
       console.log("a" + " " + color + " " + "used car");
   }else if (code === 2 && age > 0){
       console.log("a" + " " + color + " " + "used motor");
   }
    //New
    if (code === 1 && age === 0){
       console.log("a" + " " + color + " " + "new car");
   }else if (code === 2 && age === 0){
        console.log("a" + " " + color + " " + "used motor");
   }
    return;
}
vehicle('red', 1, 0);