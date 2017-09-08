let garage = {
    ad1: "Motor, ",
    ad2: "Cars, ",
    ad3: "caravan ",
    ad4: "and bikes"
};

let x = " ";
for(let i in garage){
  x = x + garage[i];
}
 console.log( "Amazing Joe's Garage, we service" + " " + x); 
 
