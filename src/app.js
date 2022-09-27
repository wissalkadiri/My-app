let currentTime = document.querySelector("#current-time")
 let now = new Date();
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()-1];
  let date = now.getDate();
  let hour= now.getHours();
  let minutes =now.getMinutes();
  currentTime.innerHTML=`<strong><em>${day} ${date} ${hour}: ${minutes}</em></strong>`
  function showTemp(response){
    let temp = document.querySelector("#temp")
    let temperature = Math.round(response.data.main.temp);
    temp.innerHTML= `${temperature}`
    let wind = document.querySelector("#wind");
    let currentWind = Math.round(response.data.wind.speed);
    wind.innerHTML=`${currentWind}`
    let humidity = document.querySelector("#humidity");
    let currenthumidity= Math.round(response.data.main.humidity);
    humidity.innerHTML=`${currenthumidity}`
    let h2 = document.querySelector("h2");
    let description= response.data.weather[0].main;
    h2.innerHTML=`${description}`
  }
  function showCity(event){
    event.preventDefault();
    let city = document.querySelector("#city");
    let h1 = document.querySelector("h1");
    let cityValue = city.value;
    h1.innerHTML=`${cityValue} `;
    let apiKey= "bd3bb6534458ba51b48c49f5155745b6"
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showTemp)
    
    
}
 let searchInput = document.querySelector("#search-input");
 searchInput.addEventListener("click",showCity);
function showPosition(position){
  let latitude 
}
navigator.geolocation.getCurrentPosition(showPosition)
let locationInput =document.querySelector("#location-input")
locationInput.addEventListener("click",showPosition)