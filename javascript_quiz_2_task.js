// Task 1

// a
var input = prompt("").toUpperCase();
document.write(input)

// b
var input = prompt("").length
document.write(input)

// c
var input = prompt("").replaceAll(" ","_");
document.write(input)

// Task 2

var n = +prompt("Type the number of which you want factorial") 
var i,f=1;
for(i = n;i>=1;i--)
{
  f = f*i;
}

document.write("factorial of "+n+" is "+f);