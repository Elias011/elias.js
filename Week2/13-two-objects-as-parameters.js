var obj1 = {
	a: 1, 
	b: 'this is the letter b', 
	c: { foo: 'what is a foo anyway', 
         bar: [1,2,3,4]
        }
  }
	

    
var obj2 = {
	a: '1', 
	b: 'this is the letter b', 
	c: { foo: 'what is a foo anyway', 
          bar: [1,2,3,4]
        }
  }
	

let x = " ";
let y = " ";
let m = " ";
let e = " ";
let z = " ";
let v = " ";
let u = " ";
let n = " ";
function compare(ts1, ts2){
    for (i in obj1.c){   // x is obj1.c  
    x += obj1.c[i];        
    }
    for (i in obj1.c){
    z += typeof(obj1.c[i]);    // z is typeof obj1.c    
    }
    for (i in obj2.c){   
    y += obj2.c[i];            //y is obj2.c 
    }
   for (i in obj2.c){    
    v += typeof(obj2.c[i]);     // v is typeof obj1.c 
    }
    
    
     for (io in obj1){     
    m += obj1[io];           // m is all what in obj1 except c
    }
     for (io in obj1){     
    u += typeof(obj1[io]);   // u is typeof all what in obj1 except c    
    }
    for (io in obj2){    
    e += obj2[io];           // e is all what in obj2 except c
    }
    for (io in obj2){    
    n += typeof(obj2[io]);   // n is typeof all what in obj2 except c    
    }
    
    if (x == y && m == e){
        console.log("true");   
    } else {
        console.log("false");  
    }
    if (x === y && m === e && z === v && u === n){
        console.log("true");
    } else{
        console.log("false");
    }
    
}
compare(obj1, obj2);
