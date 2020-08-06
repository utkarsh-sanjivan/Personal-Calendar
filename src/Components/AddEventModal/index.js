import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Modal, Input, Select, TimePicker } from 'antd';
import { EVENT_TYPES } from './../../Utils/constant';
import './style.css';
const { Option } = Select;

const AddEventModal = props => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(moment().format("hh:mm A"));
    const [timeMoment, setTimeMoment] = useState(moment());
    const [duration, setDuration] = useState('');
    const [eventType, setEventType] = useState({ name: 'Meeting', key: 'meeting' });
    const [errorObj, setErrorObj] = useState({
        name: false,
        description: false,
        durationReq: false,
        durationType: false,
    });

    useEffect(() => {
        resetDefault();
    }, [props.switchAddEventModalState])

    function resetDefault() {
        setName('');
        setDescription('');
        setTime(moment().format("hh:mm A"));
        setTimeMoment(moment());
        setDuration('');
        setEventType({ name: 'Meeting', key: 'meeting' });
        setErrorObj({
            name: false,
            description: false,
            durationReq: false,
            durationType: false,
        });
    }

    function onClose() {
        resetDefault();
        props.onClose();
    }

    function onChange(time, timeString) {
        setTime(timeString);
        setTimeMoment(time);
    }

    function onChangeName(text) {
        setErrorObj({ ...errorObj, name: text.length === 0 });
        setName(text);
    }

    function onChangeDescription(text) {
        setErrorObj({ ...errorObj, description: text.length === 0 });
        setDescription(text);
    }

    function onChangeDuration(text) {
        var reg = /^\d+$/;
        if (text.length === 0 || reg.test(text)) {
            setErrorObj({
                ...errorObj,
                durationReq: text.length === 0,
                durationType: false,
            });
            setDuration(text);
        } else {
            setErrorObj({
                ...errorObj,
                durationType: true,
            });
        }
    }

    function onChangeEventType(type) {
        setEventType(EVENT_TYPES.find(event => event.name===type));
    }

    function handleSaveEvent() {
        if (name!=='' && description!=='' && time!=='') {
            setErrorObj({
                name: false,
                description: false,
                durationReq: false,
                durationType: false,
            });
            props.handleSaveEvent({
                name,
                description,
                time,
                duration,
                eventType,
                date: props.selectedDate.day,
            });
        } else {
            setErrorObj({
                ...errorObj,
                name: name==='',
                description: description==='',
                durationReq: duration==='',
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
                    value={timeMoment}
                    format='hh:mm A'
                />
            </div>
            <div className="add-event-key-container">
                <div className="add-event-title">Event Duration (in hrs):</div>
                <Input
                    value={duration}
                    onChange={e => onChangeDuration(e.target.value)}
                />
                {errorObj.durationReq?<div className="add-event-error-msg">** Required</div>: null}
                {errorObj.durationType?<div className="add-event-error-msg">** Number only</div>: null}
            </div>
        </Modal>
    );
};

export default AddEventModal;
