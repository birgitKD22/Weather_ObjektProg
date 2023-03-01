document.addEventListener('DOMContentLoaded', cityWeather)

const form = document.querySelector('#weather-form')
form.addEventListener('submit', cityWeather)

function weatherDataFetch(city){
let key = '8c5970635a367c3807587c04fbc0f958'
let req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

fetch(req)
.then(function (resp){
    return resp.json()
})
.then(function (data){
    console.log(data)
    drawWeather(data)
})
    .catch(function (error){
        console.log(error)
    })
}

function drawWeather(data){
    let temp = Math.round(data.main.temp - 273.15)

    document.querySelector(`#location`).innerHTML = data.name
    document.querySelector(`#description`).innerHTML = data.weather[0].description
    document.querySelector(`#temp`).innerHTML = `${temp}&deg`
}
function cityWeather(event){
    if(document.querySelector('#city').value !== ''){
        city = document.querySelector('#city').value
        ocument.querySelector('#city').value = ''
    } else {
        city = 'Jõgeva'
    }
    weatherDataFetch(city)
    event.preventDefault()
}
