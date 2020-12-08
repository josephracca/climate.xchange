let apiKey = "&APPID=b4d9354b6e12bef844b7718d4870c0ff";

//=============INTRO============//
//take our open weather api key and FETCH (not xmlhttp request)
//fetch came after xmlhttp req
//does exactly the same thing but introduces the "promise"
//create connection to server, i would like to receive data from this and comes back as a promise that takes care of opening and closing of the retrieval of the data

//http://api.openweathermap.org/data/2.5/weather?q=london&APPID=b4d9354b6e12bef844b7718d4870c0ff

let urlPt1 = "http://api.openweathermap.org/data/2.5/weather?q=";
let city = "Stockton";
let urlPt2 = apiKey;

let urlFull = urlPt1 + city + urlPt2;

// create function
function loadWeather(url){
//need a variable name
    let weatherData = fetch(url).then(
        
        //this is like writing a function...
        //
        response => response.json()
    ).then( data => {
        //this is where you parse your data
        console.log(data);
        console.log(data.name);
        console.log(data.weather[0].description);
        console.log(Math.floor(((((data.main.feels_like)-273.15)*1.8)+32)) + "°F");
    })
    // console.log(weatherData);
    
}

//call the function
loadWeather(urlFull);

// ======== this is the long-hand version of "   response => response.json()   "
// function (anything) {
//     return anything.json();
// }

//ASYNC AND AWAIT method (another way to do the above...)

async function lW3(url){
    let w = await fetch(url);
    let d = await w.json();
    console.log(d);
}

lW3(urlFull);

//temp conversion
/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
    farenheit = ((((data.main.feels_like)-273.15)*1.8)+32)
  }