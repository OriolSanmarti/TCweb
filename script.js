//console.log('javascript is read');

var num = 10;
var string = 'Hello there';
var isRad = true;

if(num == 10 && isRad == true) console.log(string);

var d = document.getElementById("diameter").value;
var h = document.getElementById("height").value;
var v = Math.PI*d*d/4.0*h;
console.log(d);
console.log(h);
document.getElementById("volume").value = v;

function calculatevolume()
{

    
}