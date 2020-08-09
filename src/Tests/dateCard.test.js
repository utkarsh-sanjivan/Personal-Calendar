import React from 'react';
import { create } from "react-test-renderer";
import Date from './../Components/DateCard/index';

test('Test Today Date Component Component', () => {
    const component = create(<Date 
        onDateClick={() => {}}
        onSeeMoreClick={() => {}}
        onEventClick={() => {}}
        formattedDate={''}
        isActive={true}
        events={[]}
        date={'10 August 2020'}
        textClassName=''
    />);
  expect(component.toJSON()).toMatchSnapshot()
});

test('Test Active Date Component Component', () => {
    const component = create(<Date 
        onDateClick={() => {}}
        onSeeMoreClick={() => {}}
        onEventClick={() => {}}
        formattedDate={''}
        isActive={true}
        events={[]}
        date={'10 August 2020'}
        textClassName=''
    />);
  expect(component.toJSON()).toMatchSnapshot()
});

test('Test Inactive Date Component Component', () => {
    const component = create(<Date 
        onDateClick={() => {}}
        onSeeMoreClick={() => {}}
        onEventClick={() => {}}
        formattedDate={''}
        isActive={true}
        events={[]}
        date={'10 August 2020'}
        textClassName=''
    />);
  expect(component.toJSON()).toMatchSnapshot()
});