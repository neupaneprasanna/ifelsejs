console.log("Write a C program to read an integer m and display n as 1 when m > 0, 0 when m == 0, and -1 when m < 0.")
alert("this is the 6th Question")

let m = prompt("enter a integer")
m = Number.parseInt(m)

if(m>0)
{
    console.log("n is equal to 1")
    alert("n is equal to 1")
}
else if(m==0)
{
    console.log("n is equal to 0")
    alert("n is equal to 0")
}
else{
    console.log("n is equal to -1")
    alert("n is equal to -1")
}