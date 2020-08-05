import  React from 'react' ;
import * as dateFns from 'date-fns';
import Calendar from './../../Components/Calendar/index';
import Header from './../../Components/Header/index';
import DateModal from './../../Components/DateModal/index';
import AddEventModal from './../../Components/AddEventModal/index';
import EventModal from './../../Components/EventModal/index';
import { getDaysInMonth } from './../../Utils/dateFromatter';
import './style.css';

class PersonalCalendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            datesMonthArray: getDaysInMonth(new Date()),
            selectedDate: {},
            showAddEventModal: false,
            showDateModal: false,
            showEventModal: false,
        };
    }

    getToday = () => {
        this.setState({
            currentDate: new Date(),
            datesMonthArray: getDaysInMonth(new Date()),
        });
    }

    navMonth = (ditection) => {
        const currentDate = ditection === 'prev'? 
            new Date(dateFns.format(dateFns.subMonths(this.state.currentDate, 1), 'MM/dd/yyyy'))
            : new Date(dateFns.format(dateFns.addMonths(this.state.currentDate, 1), 'MM/dd/yyyy'));
        this.setState({ currentDate, datesMonthArray: getDaysInMonth(currentDate), });
    }

    onDateClick = selectedDay => {
        this.setState(prevState => ({ 
            showAddEventModal: !prevState.showAddEventModal,
            selectedDate: !prevState.showAddEventModal? selectedDay: {},
        }));
    }

    onSeeMoreClick = selectedDay => {
        this.setState(prevState => ({ 
            showDateModal: !prevState.showDateModal,
            selectedDate: !prevState.showAddEventModal? selectedDay: {},
        }));
    }

    onEventClick = selectedEvent => {
        this.setState(prevState => ({ 
            showEventModal: !prevState.showEventModal,
            selectedEvent: !prevState.showEventModal? selectedEvent: {},
        }));
    }

    handleSaveEvent = event => {
        debugger;
    }

    render() {
        return (
            <div className="personal-calendar-container">
                <Header 
                    currentDate={this.state.currentDate} 
                    navMonth={this.navMonth} 
                    getToday={this.getToday}
                />
                <Calendar 
                    dateColumn={this.state.datesMonthArray}
                    currentDate={this.state.currentDate}
                    onDateClick={this.onDateClick}
                    onSeeMoreClick={this.onSeeMoreClick}
                    onEventClick={this.onEventClick}
                />
                <AddEventModal 
                    visible={this.state.showAddEventModal}
                    handleSaveEvent={this.handleSaveEvent}
                    onClose={this.onDateClick}
                    selectedDate={this.state.selectedDate}
                />
                <DateModal 
                    visible={this.state.showDateModal}
                    selectedDate={this.state.selectedDate}
                    onOk={this.onSeeMoreClick}
                    onCancel={this.onSeeMoreClick}
                />
                <EventModal 
                    visible={this.state.showEventModal}
                    selectedEvent={this.state.selectedEvent}
                    onOk={this.onEventClick}
                    onCancel={this.onEventClick}
                />
            </div>
        );
    }
}

export default PersonalCalendars;