import {FETCH_WEATHER} from './types'
export function fetchWeather(city){
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e87bce52bcf0a00c4f98a55e44b6f5f7`)
        .then(res => {
            return res.json();
        })
        .then(JSONres =>{
            //dispatch the action
            dispatch({type:FETCH_WEATHER,
            payload: JSONres});
        }).catch(err =>{
            console.log(err);
        })
    }
}