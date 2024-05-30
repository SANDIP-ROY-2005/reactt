const apiKey = 'f28bd1a82eff7521d8a8670e8c8480f4';
const baseURl = 'https://api.openweathermap.org/data/2.5';
 

const getWeather = async(city) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let response = await fetch (URL);
  let data = await response.json();
  console.log(data);
  return data;

}

export  default   getWeather;

 