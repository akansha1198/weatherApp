import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import './App.css'
//action
import { fetchWeather } from "./actions/fetchWeather";
import Weather from './Weather'

function Dashboard({ weatherDetails }) {

  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state.WeatherInfo);
  const dispatch = useDispatch();
  const getWeatherInfo = (city) => { dispatch(fetchWeather(city)) };


  const getWeatherData = (e) => {
    e.preventDefault();
    getWeatherInfo(city);
    setCity('')


  }
  console.log(weatherDetails)
  const data = weatherDetails;
  return (
    <React.Fragment>
      <h is="x3d">React Redux WeatherApp (Powered by Hooks)</h>
      <div className="App" style={{ backgroundColor: "#D3D3D3", height: "auto" }}>

        <form className="form-inline centerq">
          <div className="form-group mb-2 ">
            <label htmlFor="cityName">Enter City</label>
            <input type="text" className="form-control" id="city" aria-describedby="city" name="city" placeholder="Enter city" onChange={e => setCity(e.target.value)} value={city} />
            <Button type="button" className="btn btn-primary"  onClick={getWeatherData} >Search</Button>
          </div>
        </form>
      </div>
      <div>
        {data.cod === 200 && <Weather weatherDetails={data} />}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  weatherDetails: state.weatherInfo,
  
});
export default connect(
  mapStateToProps,
  { fetchWeather }
)(Dashboard);

