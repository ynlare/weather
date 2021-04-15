//const APIKEY = '344ff4343a71b91f5d10e856ac855c71';

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=${344ff4343a71b91f5d10e856ac855c71}';


//let url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}&lang=en-US';


fetch(url).then((response) =>
response.json().then((data)=> {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = data.main.temp + '°';
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('wind').innerHTML = data.wind.speed + 'km/h';
})
    
    );
//let url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}';