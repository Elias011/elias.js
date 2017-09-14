let info = {
    "Aleph":{
        "title":"Aleph",
        "img": "image/aleph.jpg",
        "Language":"Language: Portuguese",
        "Author": "Author: Paulo-Coelho <br>"
    },
    "The-instant-millionaire":{
          "title":"The instant<br>millionaire",
          "img" : "image/the-instant-millionaire.jpg",
         "Language":"Language: English",
         "Author": "Author: Mark-Fisher <br>"
    },
    "The-broken-wings":{
         "title":"The broken<br>wings",
         "img" : "image/the-broken-wings.jpg",
         "Language":"Language:Arabic-English",
         "Author": "Author:Gibran<br>Khalil Gibran"
    },
    "The-brothers-karamazov":{
        "title": "The brothers<br>karamazov",
        "img" : "image/the-brothers-karamazov.jpg",
        "Language":"Language:Russian",
        "Author": "Author:Dostoevsky"
    },
    "Het-huis-van-de-moksee":{
        "title": "Het huis van<br>de moksee",
        "img" : "image/het-huis-van-de-moksee.jpg",
        "Language":"Language:Dutch",
        "Author": "Author:Kader Abdolah"
    },
    "The-alchemist":{
        "title": "The alchemist",
        "img" : "image/the_alchemist.jpg",
        "Language":"Language:Portuguese",
        "Author": "Author:Paulo Coelho"
    },
    "Zorba-the-greek":{
        "title": "Zorba the greek",
        "img" : "image/zorba-the-greek.jpg",
        "Language":"Language:Greek",
        "Author": "Author:Nikos Kazantzakis"
    },
    "Love-in-the-time-of-cholera":{
        "title": "Love in the<br>time of cholera",
        "img" : "image/love-in-the-time-of-cholera.jpg",
        "Language":"Language:Portuguese",
        "Author": "Author:Gabriel<br>García Márquez"
    },
     "One-hundred-years-of-solitude":{
        "title": "One hundred<br>years of solitude",
         "img" : "image/one-hundred-years-of-solitude.jpg",
        "Language":"Language:Portuguese",
        "Author": "Author:Gabriel<br>García Márquez"
    },
    
    "Chaos-of-the-senses":{
        "title": "Chaos of the senses",
        "img" : "image/chaos-of-the-senses.jpg",
        "Language":"Language:Arabic-English",
        "Author": "Author:Ahlam Mosteghanemi"
    }
    
};



function myList(){
let mainTitle = document.createElement('h0');
document.body.appendChild(mainTitle);
mainTitle.innerHTML = '<strong>"Read as much as you can.Nothing will help you as much as reading"<strong>';    
let ul = document.createElement('ul');

document.body.appendChild(ul);
   
for (i in info){
  
    
     let li=document.createElement('li'); //to controle the Title of the book
    

    ul.appendChild(li);
    

    let im=document.createElement('img');
    li.appendChild(im);
    im.src = info[i].img;
im.setAttribute("id", info[i].img); 
    
    let h1=document.createElement('h1');//to controle the title of the book
    li.appendChild(h1);
    h1.innerHTML = info[i].title;
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
