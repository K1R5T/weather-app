const fetch = require('node-fetch');

const getWeather = async () => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,&APPID=${process.env.APPID}`,);
    return await data.json();
}


module.exports = getWeather;