import {combineReducers} from "redux";
import { weatherInfo } from "./weatherReducer";

//combining reducers
const reducers = combineReducers({
    WeatherInfo: weatherInfo,
//another reducer can comein to be combined too 
});
export default reducers;