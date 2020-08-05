import React from 'react';
import { Modal } from 'antd';
import { EVENT_TYPES } from './../../Utils/constant';
import './style.css';

const EventModal = props => {
    const getEventType = () => {
        const eventType = EVENT_TYPES.find(event => event.key===props.selectedEvent.eventType);
        return eventType && (
            <>
                <i class={eventType.icon+'  event-modal-title-icon'} />
                <div className='event-modal-title-text'>{eventType.name}</div>
            </>
        );
    }

    return (
        <Modal
            {...props}
            title={
                <div className="event-modal-title-container">{props.selectedEvent && getEventType()} Event</div>
            }
        >
            <div className="event-modal-container">
                <div className='event-modal-row'>
                    <i class="fas fa-signature event-modal-icon" />
                    <div className='event-modal-text'>{props.selectedEvent && props.selectedEvent.name}</div>
                </div>
                <div className='event-modal-row'>
                    <i class="fas fa-sticky-note event-modal-icon" />
                    <div className='event-modal-text'>{props.selectedEvent && props.selectedEvent.description}</div>
                </div>
                <div className='event-modal-row'>
                    <i class="fas fa-clock event-modal-icon" />
                    <div className='event-modal-text'>{props.selectedEvent && props.selectedEvent.time}</div>
                </div>
                <div className='event-modal-row'>
                    <i class="fas fa-stopwatch event-modal-icon" />
                    <div className='event-modal-text'>{props.selectedEvent && props.selectedEvent.duration}</div>
                </div>
                <div className='event-modal-row'>
                    <i class="far fa-calendar-alt event-modal-icon" />
                    <div className='event-modal-text'>{props.selectedEvent && props.selectedEvent.dateText}</div>
                </div>
            </div>
        </Modal>
    );
};

export default EventModal;
