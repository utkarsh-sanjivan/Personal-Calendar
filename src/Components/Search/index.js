import React from 'react';
import { Input, Tooltip } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import './style.css';

const SearchField = props => (
    <Input 
        {...props}
        prefix={
            <Tooltip title="Search Date">
                <SearchOutlined className="search-icon"/>
            </Tooltip>
        }
        suffix={<CalendarOutlined />}
    />
)

export default SearchField;
