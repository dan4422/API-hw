const form = document.querySelector(".form")
const zipcode = document.querySelector(".zipWeather")
const city = document.querySelector(".cityWeather")
const cityBtn = document.querySelector(".cityBtn")
const zipBtn = document.querySelector(".zipBtn")
const apikey = '47b85d44ece5cad30ecf48a4239379b3'

const weatherSection = document.querySelector(".weathersection")


zipBtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode.value},us&units=imperial&appid=${apikey}`)
  .then(res => res.json())
  .then(data => {
    if (data.weather[0].main == "Clear") {
      weatherImage = "https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2"
    } else if (data.weather[0].main == "Clouds") {
      weatherImage = "https://media4.giphy.com/media/Ke7i5t6QDmDSO82Uga/200w.webp?cid=ecf05e47sgw7nhpomrckcv260n4rhe1vnhtjul2n2z3x6706&rid=200w.webp&ct=g"
    } else if (data.weather[0].main == "Rain" || data.weather[0].main == "Mist" || data.weather[0].main == "Thunderstorm") {
      weatherImage = "https://media0.giphy.com/media/oSaLJmbUgZQm4/200w.webp?cid=ecf05e478upz3wvqkeca7f0lpvugxhu71vk9gtdaslo9s3o0&rid=200w.webp&ct=g"
    } else if (data.weather[0].main == "Snow") {
      weatherImage = "https://media4.giphy.com/media/BDucPOizdZ5AI/giphy.webp?cid=ecf05e477qmcm3zuhmxt3v7kmk2ea66ngmpywgr7zgilsd1x&rid=giphy.webp&ct=g"
    } else {
      weatherImage = "https://media3.giphy.com/media/QRhtqYeEywJI4/200.webp?cid=ecf05e47ceeqiutch5lzw2ri9j4o540hqk0qmrmnkl8x3pi4&rid=200.webp&ct=g"
    }
    weatherHtml = `
    <h1 class="text-center mt-5">${data.name}, ${data.sys.country}</h1>
    <div class="row mt-5 justify-content-between">
      <div class="col-auto">
        <h3 class="border-bottom border-3 border-success mb-4">Weather in ${data.name}</h3>
        <h5 class="mt-4">Weather: ${data.weather[0].main}</h5>
        <h5 class="mt-4">Description: ${data.weather[0].description}</h5>
        <h5 class="mt-4">Temperature: ${data.main.temp}F</h5>
        <h5 class="mt-4">Highest Temperature: ${data.main.temp_max}F</h5>
        <h5 class="mt-4">Lowest Temperature: ${data.main.temp_min}F</h5>
        <h5 class="mt-4">Feels Like: ${data.main.feels_like}F</h5>
        <h5 class="mt-4">Wind Speed: ${data.wind.speed}m/s</h5>
      </div>
      <div class="col-auto">
        <div>
          <img style="width:700px;" class="img-fluid img-thumbnail rounded p-0 m-0" src="${weatherImage}" alt="weather">
        </div>
      </div>
    </div>
    `
    weatherSection.innerHTML = weatherHtml
    })
  form.reset()
})

cityBtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.weather[0].main == "Clear") {
        weatherImage = "https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2"
      } else if (data.weather[0].main == "Clouds") {
        weatherImage = "https://media4.giphy.com/media/Ke7i5t6QDmDSO82Uga/200w.webp?cid=ecf05e47sgw7nhpomrckcv260n4rhe1vnhtjul2n2z3x6706&rid=200w.webp&ct=g"
      } else if (data.weather[0].main == "Rain" || data.weather[0].main == "Mist" || data.weather[0].main == "Thunderstorm") {
        weatherImage = "https://media0.giphy.com/media/oSaLJmbUgZQm4/200w.webp?cid=ecf05e478upz3wvqkeca7f0lpvugxhu71vk9gtdaslo9s3o0&rid=200w.webp&ct=g"
      } else if (data.weather[0].main == "Snow") {
        weatherImage = "https://media4.giphy.com/media/BDucPOizdZ5AI/giphy.webp?cid=ecf05e477qmcm3zuhmxt3v7kmk2ea66ngmpywgr7zgilsd1x&rid=giphy.webp&ct=g"
      } else {
        weatherImage = "https://media3.giphy.com/media/QRhtqYeEywJI4/200.webp?cid=ecf05e47ceeqiutch5lzw2ri9j4o540hqk0qmrmnkl8x3pi4&rid=200.webp&ct=g"
      }
      weatherHtml = `
      <h1 class="text-center mt-5">${data.name}, ${data.sys.country}</h1>
      <div class="row mt-5 justify-content-between">
        <div class="col-auto">
          <h3 class="border-bottom border-3 border-success mb-4">Weather in ${data.name}</h3>
          <h5 class="mt-4">Weather: ${data.weather[0].main}</h5>
          <h5 class="mt-4">Description: ${data.weather[0].description}</h5>
          <h5 class="mt-4">Temperature: ${data.main.temp}F</h5>
          <h5 class="mt-4">Highest Temperature: ${data.main.temp_max}F</h5>
          <h5 class="mt-4">Lowest Temperature: ${data.main.temp_min}F</h5>
          <h5 class="mt-4">Feels Like: ${data.main.feels_like}F</h5>
          <h5 class="mt-4">Wind Speed: ${data.wind.speed}m/s</h5>
        </div>
        <div class="col-auto">
          <div>
            <img style="width:700px;" class="img-fluid img-thumbnail rounded p-0 m-0" src="${weatherImage}" alt="weather">
          </div>
        </div>
      </div>
      `
      weatherSection.innerHTML = weatherHtml
    })
  form.reset()
})


