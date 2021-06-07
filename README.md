<h1 align="center">This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a>.</h1>
<p align="center">
  <a href="https://reactjs.org/" rel="noopener" target="_blank"> <img src="https://reactjs.org/favicon.ico"></a></p>
</p>
<br>
<br>

<h1>Weather-inf</h1>
🌨️ Web application for monitoring local climate

<br>

<h3> Overview </h3>
<a href="https://weather-inf.web.app">weather inf</a>, is made for tracking the weather information in your locality and some approximate details of this, such as the minimum temperature, pressure, wind speed, humidity, etc... The information is received through calls to the official API of <a href="http://openweathermap.org/">open-weather-map</a>, returned in JSON format and processed to be rendered directly in the web page.

### Data fetching
&nbsp; To fetch current weather data from the server, is defined an asynchronous function and called from useEffect React hook to recieve a response in JSON format to unpack in the main page, you could check the parameters that are passed inside the fetch() call, i. e. find?q=${city}&lat=${lat}&lon=${long} where {city}, {lat, long} are one  of requiere's to proccess current weather, more information here <a href="`https://community-open-weather-map.p.rapidapi.com/">community-open-weather-map</a>. 

    // This gets called on every request
    async function fetchCurrentWeather(lat, long, city) {

      // Fetch data from external API
      console.log('lat, long and location: ', lat, long, city)
      const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&lat=${lat}&lon=${long}t&id=2172797&lang=null&units=metric&mode=xml%2C%20html`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key":  "YOUR_SECRET_KEY",
          "x-rapidapi-host": "HOSTING_WEBSITE",
          "content-type": "application/json",
        }
      })

<br>
### Run locally
&nbsp; To run this project locally it is necessary to install all the necessary dependencies (please pay attention), some of which may be missing and you will have to install manually on your computer.

yarn: <br>

    yarn install
    ...
    yarn start

npm: <br>

    npm install
    ...
    npm start


### Built for production
&nbsp; build web for production

    yarn run build
or

    npm run build

### Bug report
&nbsp; You can send me a message to my email with any suggestion or in case of error, you would help me a lot.

