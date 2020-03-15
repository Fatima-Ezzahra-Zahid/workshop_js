//nombre3

//methode1

function binair()
{
    var y=120;
    var x="";
    while(y>0)
    {
        x=(y%2)+x;
        y=Math.floor(y/2);
    }
    return x;
}
console.log(binair());

//methode2
function binair()
{
    var y=120;
    var x="";
    for(let i=0;i<y;i++)
    {
      x=(y%2)+x;
      y=Math.floor(y/2);
    }
    return x;
}
console.log(binair());

//methode 3

function binair(decimale)
{
    if(decimale>=1)
    {
        return binair(Math.floor(decimale/2))+(decimale%2);
    }
    return('');
}
console.log(binair(120));
 
//methode4

var decimal=456;
var binary=decimal.toString(2);
console.log("le nombre bianire est "+binary);