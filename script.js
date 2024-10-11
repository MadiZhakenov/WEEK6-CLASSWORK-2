function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("cel_to_fah").value);
    var fahrenheit = (celsius * 9/5) + 32;
    alert((celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit"));
}
function convertFahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fah_to_cel").value);
    var celsius = (fahrenheit - 32) * 5/9;
    alert((fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius"));
}
function getCurrentDate(){
    var currentDate = new Date();
    var day = currentDate.getDay();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    if(hour > 12){
        hour = hour - 12 + " PM";
    }
    else{
        hour = hour + " AM";
    }

    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    alert("Today is: " + day + '\n' + hour + " : " + minute + " : " + second);
}
function isLeapYear(){
    var year = parseInt(document.getElementById("year").value);
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                alert(year + " is a leap year");
            }
            else{
                alert(year + " is not a leap year");
            }
        }
        else{
            alert(year + " is a leap year");
        }
    }
    else{
        alert(year + " is not a leap year");
    }
}
function findSundaysOnJanuaryFirst(){
    var sundays = ""
    var count = 0;
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        let day = date.getDay();
        if (day === 0) {
            sundays += "1st January is being a Sunday " + year + "\n";
            count++;
        }
    }
    alert(count + " times" + '\n' + sundays);
}
function removeCharacter(){
    var str = document.getElementById("string").value;
    var index = document.getElementById("index").value;
    var newStr = str.substring(0, index) + str.substring(index + 1);
    alert(newStr);
}