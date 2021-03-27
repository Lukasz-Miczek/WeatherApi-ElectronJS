const request = require('request');

window.onload = showWeather();
function showWeather(){

let apiKey = 'yourApiKey';
// let city = document.getElementById('city').value;
let url = "http://api.openweathermap.org/data/2.5/weather?q=Pszczyna&lang=pl&appid="+apiKey;


request(url, function (error, response, body) {
    if(error){
      console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        
        let descWeather = `${weather.weather[0].icon}`;

        let message = `
        Miasto: ${weather.name}<br> 
        Pogoda: ${weather.weather[0].description} <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}.png' id='icon'> <br><br>
        Aktualna temperatura wynosi: ${parseInt(weather.main.temp) -273}  ℃ <br><br>
        Odczuwalna temperatura wynosi: ${parseInt(weather.main.feels_like) -273}  ℃ <br><br>
        Prędkość wiatru: ${weather.wind.speed} M/s  <br> <br>
        `
        // let cityName = `${weather.name}`;
        // let actualWeather = `Pogoda:   ${weather.weather[0].description} `;
        // let weathetIcon = `<img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}.png'>`;
        // let temp = `Aktualna temperatura:${parseInt(weather.main.temp) -273}  &#x2103 `;
        // let tempLike = `Odczuwalna temperatura:${parseInt(weather.main.feels_like) -273}  &#x2103`;
        // let windSpeed = `Prędkość wiatru: ${weather.wind.speed} M/s`
      var body = document.getElementsByTagName("body")[0];

      console.log('body:', weather);
      if(descWeather == "01d" || descWeather =="01n"){
        body.style.backgroundImage="url('./backgrounds/clearsky.jpg')";
      }else if(descWeather =="02d" || descWeather =="02n"){
        body.style.backgroundImage="url('./backgrounds/fewclouds.jpg')";
      }else if(descWeather =="03d" || descWeather =="03n"){
        body.style.backgroundImage="url('./backgrounds/scatteredclouds.jpg')";
      }else if(descWeather =="04d" || descWeather =="04n"){
        body.style.backgroundImage="url('./backgrounds/brokenclouds.jpg')";
      }else if(descWeather =="09d" || descWeather =="09n"){
        body.style.backgroundImage="url('./backgrounds/rain.jpg')";
      }else if(descWeather == "10d" || descWeather =="10n"){
        body.style.backgroundImage="url('./backgrounds/rain.jpg')";
      }else if(descWeather =="11d" || descWeather =="11n"){
        body.style.backgroundImage="url('./backgrounds/thunderstorm.jpg')";
      }else if(descWeather =="13d" || descWeather =="13n"){
        body.style.backgroundImage="url('./backgrounds/snow.jpg')";
      }else if(descWeather =="50d" || descWeather =="50n"){
        body.style.backgroundImage="url('./backgrounds/snow.jpg')";
      }
      
      document.getElementById("bg-text").innerHTML = message;
    }
});
}


window.onload = showTime();
function showTime(){
  var data = new Date();
  var hours = data.getHours();
  var minutes = data.getMinutes();
  var seconds = data.getSeconds();
  var days = data.getDate();
  var weekDays = data.getDay();
  var month = data.getMonth();
  var year = data.getFullYear();
           
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (hours < 10) hours = "0"+hours;
  var timer = document.getElementById("timer");
  var showWeekDays = document.getElementById("showWeekDays");
           
  var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
  var miesiace = new Array("Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia");
      
  // var pokazDate = "Dzisiaj jest " + dni[dzienN] + ', ' + dzien + ' ' + miesiace[miesiac] + ' ' + rok + " roku.<br />Godzina " + godzina + ':' + minuta + ':' + sekunda;
  showWeekDays.innerHTML = dni[weekDays] + ",   " +days+"  "+miesiace[month];
  timer.innerHTML = hours + ":" + minutes + ":" + seconds;
  
  setTimeout("showTime()",1000);
}
