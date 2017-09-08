function vehicle (color, code, age){
   //New
    if (code === 1 && age > 0){
       console.log("a" + " " + color + " " + "new car");
   }else if (code === 2 && age > 0){
       console.log("a" + " " + color + " " + "new motor");
   }else if (code === 3 && age > 0){
       console.log("a" + " " + color + " " + "new caravan");
   }
    //Used
    if (code === 1 && age === 0){
       console.log("a" + " " + color + " " + "used car");
   }else if (code === 2 && age === 0){
        console.log("a" + " " + color + " " + "used motor");
   }else if (code === 3 && age === 0){
        console.log("a" + " " + color + " " + "used caravan");
   }
    return;
}
vehicle('green', 3, 1);
