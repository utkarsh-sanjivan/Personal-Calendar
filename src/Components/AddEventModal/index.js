import React, { useState } from 'react';
import { Modal, Input, Select, TimePicker } from 'antd';
import { EVENT_TYPES } from './../../Utils/constant';
import './style.css';
const { Option } = Select;

const AddEventModal = props => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [eventType, setEventType] = useState({ name: 'Meeting', key: 'meeting' });
    const [errorObj, setErrorObj] = useState({
        name: false,
        description: false,
        time: false,
        duration: false,
    });

    function onClose() {
        setName('');
        setDescription('');
        setTime('');
        setDuration('');
        setEventType({ name: 'Meeting', key: 'meeting' });
        setErrorObj({
            name: false,
            description: false,
            time: false,
            duration: false,
        });
        props.onClose();
    }

    function onChange(time, timeString) {
        setTime(timeString);
    }

    function onChangeName(text) {
        setName(text);
    }

    function onChangeDescription(text) {
        setDescription(text);
    }

    function onChangeDuration(text) {
        setDuration(text);
    }

    function onChangeEventType(type) {
        setEventType(EVENT_TYPES.find(event => event.name===type));
    }

    function handleSaveEvent() {
        if (name!=='' && description!=='' && time!=='') {
            setErrorObj({
                name: false,
                description: false,
                time: false,
                duration: false,
            });
            props.handleSaveEvent({
                name,
                description,
                time,
                eventType,
                date: props.selectedDate.day,
            });
        } else {
            setErrorObj({
                name: name==='',
                description: description==='',
                time: time==='',
                duration: duration==='',
            });
        }
    }

    return (
        <Modal
            {...props}
            title={
                <div className="date-modal-title">Add Event on {props.selectedDate.dateText}</div>
            }
            okText={'Save Event'}
            onOk={() => handleSaveEvent()}
            onCancel={onClose}
        >
            <div className="add-event-key-container">
                <div className="add-event-title">Event Name:</div>
                <Input
                    value={name}
                    onChange={e => onChangeName(e.target.value)}
                />
                {errorObj.name?<div className="add-event-error-msg">** Required</div>: null}
            </div>
            <div className="add-event-key-container">
                <div className="add-event-title">Event Description:</div>
                <Input
                    value={description}
                    onChange={e => onChangeDescription(e.target.value)}
                />
                {errorObj.description?<div className="add-event-error-msg">** Required</div>: null}
            </div>
            <div className="add-event-key-container">
                <div className="add-event-title">Event Type:</div>
                <Select defaultValue='Meeting' onChange={onChangeEventType}>
                    {EVENT_TYPES.map(type => <Option key={type.key} value={type.name}>{type.name}</Option>)}
                </Select>
            </div>
            <div className="add-event-key-container">
                <div className="add-event-title">Select the event time:</div>
                <TimePicker
                    placeHolder="Select Event Time"
                    onChange={onChange}
                    format='HH:mm'
                />
                {errorObj.time?<div className="add-event-error-msg">** Required</div>: null}
            </div>
            <div className="add-event-key-container">
                <div className="add-event-title">Event Duration (in hrs):</div>
                <Input
                    value={duration}
                    onChange={e => onChangeDuration(e.target.value)}
                />
                {errorObj.name?<div className="add-event-error-msg">** Required</div>: null}
            </div>
        </Modal>
    );
};

export default AddEventModal;
