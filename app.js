
const apikey = "21b1573f220e42fbf1af7e3cb5d15c20";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const seacrhBox = document.querySelector(".search input");
const seacrhBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function  checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWyhHl_AVkMBOgxOie1tzX2LeMrqZZQSjtA&usqp=CAU";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy14dq_E1U9jx9AYb6zSi8qZkx8CiIc7Harw&usqp=CAU";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6YmGXH4xHYReGBGfjnESQQT3dpZvSTNRZw&usqp=CAU";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnKRsv7-ljcubt3EUcQzBnUVWNXo8wmZbmHA44xPSeh0jkvnYDVLE4OmrXlSiGaB-L_A&usqp=CAU";
    }
    else if(data.weather[0].main == "Mist"){

        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwooHS-DPUJredmj6NXcPmuxDRMp9WLJkSuiWnk5DDoFtjuc_6ATh7-ldjEKKUv62tX0&usqp=CAU";
    }
    document.querySelector(".weather").style.display ="block";
     document.querySelector(".error").style.display= "none";
    }

    
}


seacrhBtn.addEventListener("click", () => {
    checkWeather(seacrhBox.value);
    })