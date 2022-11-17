const elDefaultList = document.querySelector(".weather-list");
// Celcius import
const elTokyoCelcius = elDefaultList.querySelector(".tokyo-gradus");
const elParisCelcius = elDefaultList.querySelector(".paris-gradus");
const elTurkeyCelcius = elDefaultList.querySelector(".turkey-gradus");
const elRussiaCelcius = elDefaultList.querySelector(".russia-gradus");

// Humidity Import
const elTokyoHumidity = elDefaultList.querySelector(".tokyo-humidity");
const elParisHumidity = elDefaultList.querySelector(".paris-humidity");
const elTurkeyHumidity = elDefaultList.querySelector(".turkey-humidity");
const elRussiaHumidity = elDefaultList.querySelector(".russia-humidity");

// Default search Fetch 
const elSearchedCelcius = document.querySelector(".weather-celcius");
const elSearchedRegionName = document.querySelector(".weather-region");
const elSearchedLocation = document.querySelector(".weather-location");
const elForm = document.querySelector(".search-form");
const elFormInput = document.querySelector(".search-input");
const elSearchedHumidity = document.querySelector(".weather-humidity");
const elSearchedAirPressure = document.querySelector(".weather-air-pressure");
const elSearchedWindSpeed = document.querySelector(".weather-wind-speed");
const elSearchedWeatherImage = document.querySelector(".weather-image");

// Default Tokyo Celcius Import
try {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")
    .then(res => res.json())
    .then(data => {
        elTokyoCelcius.textContent = data.main.temp;
        elTokyoHumidity.textContent = `${data.main.humidity}%`;
    })
} catch (error) {
    console.log(error);
}

// Default Paris Celcius Import
try {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")
    .then(res => res.json())
    .then(data => {
        elParisCelcius.textContent = data.main.temp;
        elParisHumidity.textContent = `${data.main.humidity}%`;
    })
} catch (error) {
    console.log(error);
}

// Default Turkey Celcius Import
try {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")
    .then(res => res.json())
    .then(data => {
        elTurkeyCelcius.textContent = data.main.temp;
        elTurkeyHumidity.textContent = `${data.main.humidity}%`;
    })
} catch (error) {
    console.log(error);
}

// Default Russia Celcius Import
try {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Moskva&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")
    .then(res => res.json())
    .then(data => {
        elRussiaCelcius.textContent = data.main.temp;
        elRussiaHumidity.textContent = `${data.main.humidity}%`;
    })
} catch (error) {
    console.log(error);
}


// Default search Fetch
function defaultSearch(api){
    try {
        fetch(`${api}`)
        .then(res => res.json())
        .then(data => {
            data.weather.forEach(item => {
                elSearchedWeatherImage.src = `https://openweathermap.org/img/wn/${item.icon}.png`
            });
            elSearchedRegionName.textContent = data.name;
            elSearchedCelcius.textContent = Math.round(data.main.temp);
            elSearchedHumidity.textContent = `${data.main.humidity}%`;
            elSearchedAirPressure.textContent = data.main.pressure;
            elSearchedWindSpeed.textContent = data.wind.speed;
            elSearchedLocation.href = `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=rain&lat=${data.coord.lat}&lon=${data.coord.lon}&zoom=5`
        })
    } catch (error) {
        // defaultSearch("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")
        alert("Bunday davlat mavjud emas")
    }
}

defaultSearch("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric")

elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const formInputValue = elFormInput.value.trim();
    console.log(formInputValue);
    
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${formInputValue}&appid=1e9bf328761a9b488e6d2c32bbb829d8&units=metric`
    defaultSearch(API)

    elFormInput.value = ""
})

