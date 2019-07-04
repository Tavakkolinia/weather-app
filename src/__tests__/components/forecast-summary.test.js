import React from 'react';
import { shallow } from 'enzyme';

import ForecastSummary from '../../components/forecast-summary';

it('renders the date', () => {
  const testDate = 1526106890000;
  const wrapper = shallow(
    <ForecastSummary
      date={testDate}
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  );

  expect(wrapper.find('.date').text()).toEqual('Sat 12th May');
});
it('renders the temperature', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  );

  expect(wrapper.find('.temperature').text()).toEqual('mockTemperature℃');
});

it('renders the description', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  );

  expect(wrapper.find('.description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  );
  const icon = wrapper.find('WeatherIcon');

  expect(icon.props().iconId).toEqual('mockIcon');
});
