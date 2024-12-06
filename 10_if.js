console.log("Temperature Conversion (Celsius to Fahrenheit)");
let a = prompt("enter celsius or farenheit");
let celcius;
let farenheit;
if(a === "C" || a === "Celcius" || a === "celcius" || a === "c")
{
    celcius =parseFloat(prompt("enter your temperature"));
farenheit = (celcius*9/5)+32;
alert ("the converted number is"+farenheit);
}

else if(a === "f" || a === "farenheit" || a === "Farenheit" || a === "F")

{
    farenheit = parseFloat(prompt("enter your temperature"));
    celcius = (farenheit - 32) * 5/9;
    alert("the converted number is"+celcius);
}

else
{
    alert("invalid number or wrong typing");
}


