import React, { Component } from 'react'
import "./card.css"

export default class Weather extends Component {

    render() {
        let { weatherDetails } = this.props;
        console.log("--", this.props.weatherDetails)
        return (
            <div className='card-aligin'>
                {weatherDetails && <div className="row" style={{ marginTop: "20px", marginLeft: "40%" }}>
                    <div className="card" style={{ width: "16rem", marginLeft: "30px", marginTop: "15px", color: "black" }}>
                        <div className='card-header'>
                            <h5 className="" >
                                Your entered location is :
                        </h5>
                            <span className='title-align'>
                                <h3 className = 'city-title'>
                                    {weatherDetails.name},
                                    {weatherDetails.sys.country}
                                </h3>

                                <img style={{ marginLeft: '20%' }} src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`} />
                            </span>
                        </div>

                        <div className="card-body bgColor" >

                            <strong>{this.props.description}</strong>
                            <ul className="list-group list-group-flush alignment" >
                                <li className="list-group-item">Max-Temp : {weatherDetails.main.temp_max}</li>
                                <li className="list-group-item">Min-Temp : {weatherDetails.main.temp_min}</li>
                                <li className="list-group-item">Humidity : {weatherDetails.main.humidity}</li> 
                                <li className="list-group-item">Wind : {weatherDetails.wind.speed}</li>
                                <li className="list-group-item">Pressure : {weatherDetails.main.pressure} hPa</li>
                                 <li className="list-group-item">Latitude : {weatherDetails.coord.lat}</li> 
                                <li className="list-group-item">Longitude : {weatherDetails.coord.lon}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                }
            </div>

        );
    }
}