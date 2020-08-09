import React from 'react';
import './style.css';

const DateCard = props => (
    <div  className="card-container">
            {props.day?
                <div className={props.textClassName}>{props.day}</div>
                :  <div className={props.textClassName}>
                    <div className="date-text" onClick={() => props.onDateClick(props.date)}>{props.formattedDate}</div>
                    {props.isActive && props.events && props.events.slice(0,3).map((event, index) => {
                        return index ===2 && props.events.length>3?
                            <p className="content-para-2">
                                <p className="content-para" onClick={() => props.onEventClick(event)}>{event.name}</p>
                                <p className="more-text" onClick={() => props.onSeeMoreClick(props.date)}>  ...more</p>
                            </p>
                            : <p className="content-para" onClick={() => props.onEventClick(event)}>{event.name}</p>
                    })}
                </div>
            }
    </div>
);

export default DateCard;