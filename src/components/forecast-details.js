import React from 'react';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecastDetails__maxTemp">
      <span>Max Temp: {props.max}</span>
    </div>
    <div className="forecastDetails__minTemp">
      <span>Min Temp: {props.min}</span>
    </div>
    <div className="forecastDetails__humidity">
      <span>Humidity: {props.humidity} %</span>
    </div>
    <div className="forecastDetails__windSpeed">
      <span>Wind speed: {props.speed} mph</span>
    </div>
    <div className="forecastDetails__windDirection">
      <span>Wind Direction: {props.direction}</span>
    </div>
  </div>
);

export default ForecastDetails;
