import  React from 'react' ;
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as dateFns from 'date-fns';
import Calendar from './../../Components/Calendar/index';
import Header from './../../Components/Header/index';
import DateModal from './../../Components/DateModal/index';
import AddEventModal from './../../Components/AddEventModal/index';
import EventModal from './../../Components/EventModal/index';
import * as DateEventActions from '../../store/DateEvent/actions';
import { getDaysInMonth } from './../../Utils/dateFromatter';
import './style.css';

class PersonalCalendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            selectedDate: {},
            showAddEventModal: false,
            showDateModal: false,
            showEventModal: false,
            switchAddEventModalState: false,
        };
    }

    getToday = () => {
        this.setState({
            currentDate: new Date(),
        });
        this.props.dateEventActions.getMonthDateArray(getDaysInMonth(new Date()));
    }

    navMonth = (ditection) => {
        const currentDate = ditection === 'prev'? 
            new Date(dateFns.format(dateFns.subMonths(this.state.currentDate, 1), 'MM/dd/yyyy'))
            : new Date(dateFns.format(dateFns.addMonths(this.state.currentDate, 1), 'MM/dd/yyyy'));
        this.setState({ currentDate });
        this.props.dateEventActions.getMonthDateArray(getDaysInMonth(currentDate));
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
            selectedDate: !prevState.showDateModal? selectedDay: {},
        }));
    }

    onEventClick = selectedEvent => {
        this.setState(prevState => ({ 
            showEventModal: !prevState.showEventModal,
            selectedEvent: !prevState.showEventModal? selectedEvent: {},
        }));
    }

    handleSaveEvent = event => {
        this.props.dateEventActions.addEvent({ event, dateText: this.state.selectedDate.dateText });
        this.setState(prevState=>({ 
            showAddEventModal: !prevState.showAddEventModal,
            selectedDate: !prevState.showAddEventModal? this.state.selectedDate: {},
            switchAddEventModalState: !prevState.switchAddEventModalState,
        }));
    }

    handleEditEvent = event => {
        
    }

    handleDeleteEvent = event => {
        
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
                    dateColumn={this.props.dateEvent.monthDateArray}
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
                    switchAddEventModalState={this.state.switchAddEventModalState}
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

    componentDidMount() {
        this.props.dateEventActions.getMonthDateArray(getDaysInMonth(new Date()));
    }
}

const mapStateToProps = ( store ) => ({
  dateEvent: store.dateEvent,
});

function mapDispatchToProps(dispatch) {
    return {
      dateEventActions: bindActionCreators(DateEventActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCalendars);