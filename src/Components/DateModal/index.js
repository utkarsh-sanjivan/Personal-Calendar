import React from 'react';
import { Modal } from 'antd';
import TableDetails from '../TableDetails/index';
import { CalendarOutlined } from '@ant-design/icons';

import './style.css';

const DateModal = props => {
    const tableColumns = [
        {
            title: <div>Name</div>,
            dataIndex: 'name',
            key: 'name',
            render: (value, record) => (
                <div className="event-modal-title" onClick={() => props.onTitleClick(record)}>{value}</div>
            ),
        },
        {
            title: <div>Time</div>,
            dataIndex: 'time',
            key: 'time',
            render: (value, record) => (
                <div className="event-modal-title">{value}</div>
            ),
        },
        {
            title: <div>Description</div>,
            dataIndex: 'description',
            key: 'description',
            render: (value, record) => (
                <div className="event-modal-title">{value}</div>
            ),
        },
        {
            title: <div>Duration</div>,
            dataIndex: 'duration',
            key: 'duration',
            render: (value, record) => (
                <div className="event-modal-title">{value}</div>
            ),
        },
    ];
    return (
        <Modal
            {...props}
            title={
                <div style={{ display: 'flex' }}>
                    <CalendarOutlined className='date-modal-calendar-icon'/>
                    <div>Events on {props.selectedDate.dateText}</div>
                </div>
            }
        >
            <TableDetails 
                width={600}
                dataSource={props.selectedDate.events || []}
                columns={tableColumns}
            />
        </Modal>
    );
};

export default DateModal;
