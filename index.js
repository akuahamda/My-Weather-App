// import axios from "axios";
 const apiKey = "8fob310357070bce9t79c94a1a8a4f49";


let iconImg = document.querySelector("img");
let temperature = document.querySelector("#temp");
let description = document.querySelector("#describ");
let humidity = document.querySelector("#humid");
let windSpeed = document.querySelector("#wind"); 
let cityName = document.querySelector(".city-name");


function weatherSearch(event) {
    event.preventDefault();
    let cityInput = document.querySelector(".form").value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}`;

    axios.get(apiUrl).then((result)=>{
        iconImg.src = result?.data.condition?.icon_url;
        temperature.innerHTML = Math.round(result.data.temperature.current);
        description.innerHTML = result.data.condition.description;
        humidity.innerHTML = result.data.temperature.humidity;
        windSpeed.innerHTML = result.data.wind.speed;
        cityName.innerHTML = result.data.city;

    })

}
let input = document.querySelector("form");
input.addEventListener("submit", weatherSearch);


// {
//     "city": "Paris",
//     "country": "France",
//     "coordinates": {
//         "longitude": 2.3200410217200766,
//         "latitude": 48.8588897
//     },
//     "condition": {
//         "description": "overcast clouds",
//         "icon_url": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
//         "icon": "broken-clouds-night"
//     },
//     "temperature": {
//         "current": 10.15,
//         "humidity": 96,
//         "feels_like": 9.73,
//         "pressure": 1031
//     },
//     "wind": {
//         "speed": 3.6,
//         "degree": 30
//     },
//     "time": 1730926501
// }










