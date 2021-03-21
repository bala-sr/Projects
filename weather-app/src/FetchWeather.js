import axios from "axios";

//const api = "437ca1a3a93638ee61698b6cc58ffa50";

export const fetchWeather = async (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=437ca1a3a93638ee61698b6cc58ffa50";
    
    const {data} = await axios.get(url)
 
    console.log("data fetched:", data);
    console.log("data.main fetched:", data.main);
    console.log("data.weather fetched:", data.weather[0]);
    return data;
}