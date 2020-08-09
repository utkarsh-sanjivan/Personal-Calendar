import React from 'react';
import { create } from "react-test-renderer";
import CalendarButton from './../Components/CalendarButton/index';

test('Test CalendarButton Component', () => {
const component = create(<CalendarButton 
    className=''
    onClick={() => {}}
  />);
  expect(component.toJSON()).toMatchSnapshot()
});