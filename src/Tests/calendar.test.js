import React from 'react';
import { create } from "react-test-renderer";
import Calendar from './../Components/Calendar/index';

test('Test Calendar Component', () => {
const component = create(<Calendar 
  dateColumn={[]}
  currentDate={''}
  onDateClick={()=>{}}
  onSeeMoreClick={()=>{}}
  onEventClick={()=>{}}
  />);
  expect(component.toJSON()).toMatchSnapshot()
});