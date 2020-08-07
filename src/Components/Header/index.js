import React from 'react';
import CalendarButton from '../CalendarButton/index';
import Search from './../Search/index';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { getMonthString } from './../../Utils/dateFromatter';
import './style.css';

const Header = props => (
    <div className="calendar-header-container">
        <div style={{ width: '85%' }}>
            <CalendarButton className="today-button" onClick={props.getToday}>Today</CalendarButton>
            <CalendarButton className="nav-button" onClick={() => props.navMonth('prev')}><LeftOutlined /></CalendarButton>
            <CalendarButton className="nav-button" onClick={() => props.navMonth('next')}><RightOutlined /></CalendarButton>
            <span className="header-text">{getMonthString(props.currentDate.getMonth())}</span>
            <span className="header-text">{props.currentDate.getFullYear()}</span>
        </div>
        <div style={{ width: '15%' }}>
            <Search className="search-input" onPressEnter={e => props.onPressEnter(e.target.value)}/>
        </div>
    </div>
);

export default Header;