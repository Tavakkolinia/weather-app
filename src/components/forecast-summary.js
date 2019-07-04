import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  return (
    <div className="forecast-summary">
      <div className="date">
        <span>{moment(props.date).format('ddd Do MMM')}</span>
      </div>
      <div className="temperature">
        <span>{props.temperature}&#8451;</span>
      </div>
      <div className="temperatureMax">
        <span>{props.max}&#8451;</span>
      </div>
      <div className="temperatureMin">
        <span>{props.min}&#8451;</span>
      </div>
      <div className="description">
        <span>{props.description}</span>
      </div>
      <div className="windSpeed">
        <span>{props.speed}mph</span>
      </div>
      <div className="windDirection">
        <span>{props.direction}</span>
      </div>
      <div className="icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <button onClick={() => console.log('Hello!')}>More details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ForecastSummary;
