let info = {
    book1:{
        "title":"Aleph",
        "Language":"Language: Portuguese",
        "Author": "Author: Paulo-Coelho <br>"
    },
    book2:{
          "title":"The_instant_millionaire",
         "Language":"Language: English",
         "Author": "Author: Mark-Fisher <br>"
    },
    book3:{
         "title":"The_broken_wings",
         "Language":"Language:Arabic-English",
         "Author": "Author:Gibran<br>Khalil Gibran"
    },
    book4:{
        "title": "The_brothers_karamazov",
        "Language":"Language:Russian",
        "Author": "Author:Dostoevsky"
    },
    book5:{
        "title": "Het_huis_van_de_moksee",
        "Language":"Language:Dutch",
        "Author": "Author:Kader Abdolah"
    },
    book6:{
        "title": "The_alchemist",
        "Language":"Language:Portuguese",
        "Author": "Author:Paulo Coelho"
    },
    book7:{
        "title": "Zorba_the_greek",
        "Language":"Language:Greek",
        "Author": "Author:Nikos Kazantzakis"
    },
    book8:{
        "title": "Love_in_the_time_of_cholera",
        "Language":"Language:Portuguese",
        "Author": "Author:Gabriel<br>García Márquez"
    },
     book9:{
        "title": "One_hundred_years_of_solitude",
        "Language":"Language:Portuguese",
        "Author": "Author:Gabriel<br>García Márquez"
    },
    
    book10:{
        "title": "Chaos_of_the_senses",
        "Language":"Language:Arabic-English",
        "Author": "Author:Ahlam Mosteghanemi"
    }
    
};



function myList(){
let mainTitle = document.createElement('h4');
document.body.appendChild(mainTitle);
mainTitle.innerHTML = '<strong>"Read as much as you can.Nothing will help you as much as reading"<strong>';    
let ul = document.createElement('ul');

document.body.appendChild(ul);
   
for (i in info){
  
    
     let li=document.createElement('li'); //to controle the Title of the book
      
       ul.appendChild(li);
    
    let h1=document.createElement('h1');//to controle the title of the book
    li.appendChild(h1);

h1.setAttribute("id", info[i].title);
    
    let h2=document.createElement('h2');//to controle the author of the book
    li.appendChild(h2);
    h2.innerHTML = info[i].Author;       
h2.setAttribute("id", info[i].Author);
    
     let h3=document.createElement('h3');//to controle the language of the book    
    li.appendChild(h3);
    h3.innerHTML = info[i].Language;
h3.setAttribute("id", info[i].Language); 
}
}
myList();

let bookCover={
    Aleph: "image/aleph.jpg",
    The_instant_millionaire: "image/the-instant-millionaire.jpg",
    The_broken_wings: "image/the-broken-wings.jpg",
    The_brothers_karamazov: "image/the-brothers-karamazov.jpg",
    Het_huis_van_de_moksee: "image/het-huis-van-de-moksee.jpg",
    The_alchemist: "image/the_alchemist.jpg",
    Zorba_the_greek: "image/zorba-the-greek.jpg",
    Love_in_the_time_of_cholera: "image/love-in-the-time-of-cholera.jpg",
    One_hundred_years_of_solitude: "image/one-hundred-years-of-solitude.jpg",
    Chaos_of_the_senses: "image/chaos-of-the-senses.jpg"
};

let coverKeys = Object.keys(bookCover);

function cover(){
    for (i of coverKeys){
        let im = document.createElement('img');
        im.setAttribute('src', bookCover[i]);
        document.getElementById(i).appendChild(im);
    }
}
cover();
