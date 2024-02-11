const key= "aee7797cb674508f1c9ac2fa7e7c2196";
const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkweather(){
    const response = await fetch(url + `&appid=${key}`);
    var data = await response.json();

    return console.log(data);
}