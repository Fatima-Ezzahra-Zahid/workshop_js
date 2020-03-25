

var Mymain=document.getElementById('main');
var Mynew=document.getElementById('new');
var copy=Mymain.firstElementChild.cloneNode(true);

Mynew.appendChild(copy);//ajouter 

//cloneNode : copy element 

// window.onload = function() {
//     var pos = 0; 
//    //our box element
//    var box = document.getElementById('box');
//    var t = setInterval(move, 10);
 
//    function move() {
//        if(pos >= 150) {
//            clearInterval(t);
//        }
//        else {
//            pos += 1;
//            box.style.left = pos+'px';
//        }
//    }
// };


var pos = 0; 
//our box element
var box = document.getElementById('box');
var t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
        clearInterval(t);//method to stop the timer
    }
    else {
        pos += 1;
        box.style.left = pos+'px';
    }
}

window.onload = function() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction); //supprimer event
    }
};


var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

var Myelement=document.getElementById('main');
var Mytxt=document.getElementById('txt');
var Mynote=document.getElementById('note');

Mytxt.onfocus=function()
{
    Mynote.textContent="entrer votre mot de pase!!";
};

Mytxt.onblur=function()
{
    Mynote.textContent="";
    if(Mytxt.value.length<4)
    {
        Mynote.textContent="enter une plusieur caractere";
    }
};





