console.log("Write a C program to accept a person's height in centimeters and categorize them based on their height.")
let a = prompt("enter your age in centimeter")
a = Number.parseInt(a)

if(a<120)
{
    console.log("you are dwarf")
    alert("you are dwarf")
}
else if(a>=120 && a<=150)
{
    console.log("your height is of child")
    alert("your height is of child")
}
else if(a>150 && a<200)
{
    console.log("your height is normal")
    alert("your height is normal")
}
else if(a>= 200 && a<250)
{
    console.log("you are bigger than what you think")
    alert("you are bigger than what you think")
}
else if(a>=250)
{
    console.log("you are a giant")
    alert("you are a giant")
}
else
{
    console.log("your age is incorrect")
    alert("your age is incorrect")
}