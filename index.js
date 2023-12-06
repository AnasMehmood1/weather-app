const apikey = "9ee8a04d336959c25b2f5cbaf392e610";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    if (response.status == 404){
document.querySelector(".error").style.display = "block"
        
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json()

console.log(data)

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


const weathercondition = data.weather[0].main.toLowerCase()
const card = document.querySelector(".card")
switch (weathercondition) {
    case "clouds":
        card.style.backgroundImage = "url('images/cloud.jpg')";
        break;
    case "clear":
        card.style.backgroundImage = "url('images/clear.jpg')";
        break;
    case "rain":
        card.style.backgroundImage = "url('images/rain.jpg')";
        break;
    case "drizzle":
        card.style.backgroundImage = "url('images/drizzle.jpg')";
        break;
    case "mist":
        card.style.backgroundImage = "url('images/mist.jpg')";
        break;
    default:
        // Handle other weather conditions or no background change
        card.style.backgroundImage = "none";
}
document.querySelector(".weather").style.display = "block" 
document.querySelector(".error").style.display = "none"
}   
    }
   

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    console.log("click hua")
})

checkWeather()