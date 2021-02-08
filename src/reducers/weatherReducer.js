import {FETCH_WEATHER} from '../actions/types'

const initialState = {
    weatherInfo:{}
  };
 export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_WEATHER:
        console.log({...state,
            weatherInfo: payload},"plplp")
      return {
        ...state,
        weatherInfo: payload
      };
    
    default:
      return state;
  }
}