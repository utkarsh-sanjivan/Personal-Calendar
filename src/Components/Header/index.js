import React from 'react';
import { Select } from 'antd';
import CalendarButton from '../CalendarButton/index';
import Search from './../Search/index';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { getMonthString } from './../../Utils/dateFromatter';
import { MONTHS } from './../../Utils/constant';
import './style.css';
const { Option } = Select;

const Header = props => (
    <div className="calendar-header-container">
        <div style={{ width: '85%' }}>
            <CalendarButton className="today-button" onClick={props.getToday}>Today</CalendarButton>
            <CalendarButton className="nav-button" onClick={() => props.navMonth('prev')}><LeftOutlined /></CalendarButton>
            <CalendarButton className="nav-button" onClick={() => props.navMonth('next')}><RightOutlined /></CalendarButton>
            <Select defaultValue={getMonthString(props.currentDate.getMonth())} onChange={props.onChangeMonth}>
                {MONTHS.map(month => <Option {...month} value={month.name}>{month.name}</Option>)}
            </Select>
            <Select defaultValue={props.currentDate.getFullYear()} onChange={props.onChangeYear}>
                {Array(130).fill(null).map((__, index) => <Option index={index} value={index+1970}>{index+1970}</Option>)}
            </Select>
        </div>
        <div style={{ width: '15%' }}>
            <Search 
                className="search-input"
                onSearch={props.onSearch}
                onSelect={props.onSelect}
                autoCompleteData={props.autoCompleteData}
            />
        </div>
    </div>
);

export default Header;