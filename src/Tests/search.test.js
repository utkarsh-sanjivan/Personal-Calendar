import React from 'react';
import { create } from "react-test-renderer";
import Search from './../Components/Search/index';

test('Test Search Component', () => {
const component = create(<Search 
    className=""
    onSearch={() =>{}}
    onSelect={() =>{}}
    autoCompleteData={[]}
  />);
  expect(component.toJSON()).toMatchSnapshot()
});