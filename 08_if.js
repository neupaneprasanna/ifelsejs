console.log("Write a C program to find the largest of three numbers.")
let a = parseInt(prompt("enter the first number"));
let b = parseInt(prompt("enter the second number"));
let c = parseInt(prompt("enter the third number"));

if(a>b && a>c)
{
    alert("the largest number = "+a);
}
else if(b>a && b>c)
{
    alert("the largest number = "+b);
}
else
{
    alert("the largest number = "+c)
}

