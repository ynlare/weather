/*To get url from open weather ,  I have to go to open weather site and create an account to get a 
API Key. You can get your url in any language, open weather worked like wunder ground site.*/

  const BOOBA = '344ff4343a71b91f5d10e856ac855c71';
//If you get our API Key, you can assigned a name for it. My API Key becames BOOBA.
  // Call to the openWeather API with city as a function parameter 
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${BOOBA}&units=metric&lang=en
`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
        document.querySelector(
          'footer'
        ).innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='temps'> Meteo`;
      })
    )
    .catch((err) => console.log('Erreur : ' + err));
};

// I get my icons from https://fontawesome.com/start, and my background image from google 



// Event listener on form submission 
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});

// Call by default to load the page
apiCall('Rouen');
