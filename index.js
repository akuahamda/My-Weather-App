 const apiKey = "8fob310357070bce9t79c94a1a8a4f49";


let iconImg = document.querySelector("img");
let temperature = document.querySelector("#temp");
let description = document.querySelector("#describ");
let humidity = document.querySelector("#humid");
let windSpeed = document.querySelector("#wind"); 
let cityName = document.querySelector(".city-name");



function weatherSearch(event) {
  let cityInput = document.querySelector(".form").value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}`;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityInput}&key=${apiKey}`

     axios.get(apiUrl).then((result)=>{
        iconImg.src = result?.data.condition?.icon_url;
        temperature.innerHTML = Math.round(result.data.temperature.current);
        description.innerHTML = result.data.condition.description;
        humidity.innerHTML = result.data.temperature.humidity;
        windSpeed.innerHTML = result.data.wind.speed;
        cityName.innerHTML = result.data.city;

    })


    axios.get(forecastUrl).then((result)=> {
      displayForecast(result)
    }
  )

}

window.addEventListener('load',weatherSearch)
let formTag = document.querySelector("form")
formTag.addEventListener("submit", (e)=>{
  e.preventDefault();
  weatherSearch()

});

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}




function displayForecast(results) { 

  let forecast = document.querySelector(".forecast");
  forecast.innerHTML = ""


  let days = results?.data?.daily;
  days.slice(0,5)?.forEach (function (day) { 
    forecast.innerHTML += `<div>
          <div>${formatDay(day.time)}</div>
          <div class="forecast-icon">
          <img src=${day?.condition?.icon_url} />
          </div>
          <div class="forecast">
            <div><strong>${Math.round(day?.temperature?.maximum)}&deg;</strong></div>
            <div>${Math.round(day?.temperature?.minimum)}&deg;</div>
          </div>
        </div>

        `;
        
      });


  };
 












