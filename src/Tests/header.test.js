import React from 'react';
import { create } from "react-test-renderer";
import Header from './../Components/Header/index';

test('Test Header Component', () => {
const component = create(<Header 
    currentDate={new Date}
    navMonth={() => {}}
    onChangeMonth={() => {}}
    onChangeYear={() => {}}
    getToday={() => {}}
    onSearch={() => {}}
    onSelect={() => {}}
    autoCompleteData={[]}
  />);
  expect(component.toJSON()).toMatchSnapshot()
});