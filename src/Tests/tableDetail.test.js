import React from 'react';
import { create } from "react-test-renderer";
import TableDetails from '../Components/TableDetails/index';

test('Test Table Details Component', () => {
  const component = create(<TableDetails 
        current={1}
        dataSource={[]}
        loading={false}
    />
);
  expect(component.toJSON()).toMatchSnapshot()
});