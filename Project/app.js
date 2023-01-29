const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'ca23dcc918d31c2fc1b6c8cdfecf8c1c';

if(localStorage.getItem("Şehir")){
    getResult(localStorage.getItem("Şehir"));

}


const setQuery = (e) => {
    if(e.keyCode == '13'){
            getResult(searchBar.value)
            searchBar.value = ''
    }
}
    
function getResult(cityName) {
    console.log(cityName);
    localStorage.setItem("Şehir", cityName);
    console.log(localStorage.getItem("Şehir"));
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr `;
    console.log(query);
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult);
}
    
function displayResult(result) {
    console.log(result);
    let city = document.querySelector('.city');
    city.innerHTML = `${result.name}, ${result.sys.country} `;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${result.main.temp}°C`;

    let desc = document.querySelector('.desc');
    desc.innerHTML = `${result.weather[0].description} `.toUpperCase();


    let minmax = document.querySelector('.minmax');
    minmax.innerHTML = `${result.main.temp_max} / ${result.main.temp_min}`;
}


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress' , setQuery)







