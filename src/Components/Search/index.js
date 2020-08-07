import React from 'react';
import { Input, Tooltip, AutoComplete } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import './style.css';

const SearchField = props => (
        <AutoComplete 
            {...props}
            options={props.autoCompleteData}
        >
        <Input 
            placeholder="Search Events"
            prefix={
                <Tooltip title="Search Event">
                    <SearchOutlined className="search-icon"/>
                </Tooltip>
            }
            suffix={<CalendarOutlined />}
        />
        </AutoComplete>
)

export default SearchField;
