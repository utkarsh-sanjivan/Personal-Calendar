import React from 'react';
import DateCard from '../DateCard/index';
import { Row } from 'antd';
import './style.css';

const Calendar = props => (
    <div className='calendar-container'>
        <Row className='calendar-days-row'>
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day=> <DateCard textClassName='day-card' day={day}/>)}
        </Row>
        {props.dateColumn.map(dateArr => (
            <Row className='calendar-date-rows'>
                {dateArr.map(date => 
                    <DateCard
                        onDateClick={selectedDay => { if(date.isActive) props.onDateClick(selectedDay) }}
                        onSeeMoreClick={selectedDay => props.onSeeMoreClick(selectedDay)}
                        onEventClick={selectedEvent => props.onEventClick(selectedEvent)}
                        formattedDate={date.formattedDate}
                        isActive={date.isActive}
                        events={date.events}
                        date={date}
                        textClassName={
                            date.isActive?
                                date.isToday? 
                                    'today-date-card'
                                    : 'date-card'
                                : 'blocked-date-card'
                        }
                    />
                )}
            </Row>
        ))}
    </div>
)

export default Calendar;
