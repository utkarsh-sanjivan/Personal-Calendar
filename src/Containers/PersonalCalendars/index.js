import  React from 'react' ;
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as dateFns from 'date-fns';
import { uuid } from 'uuidv4';
import FuzzySearch from 'fuzzy-search';
import Calendar from './../../Components/Calendar/index';
import Header from './../../Components/Header/index';
import DateModal from './../../Components/DateModal/index';
import AddEventModal from './../../Components/AddEventModal/index';
import EventModal from './../../Components/EventModal/index';
import * as DateEventActions from '../../store/DateEvent/actions';
import withFirebase from './../../Components/Firebase/index';
import { getDaysInMonth, getMonthObj } from './../../Utils/dateFromatter';
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
            autoCompleteData: [],
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
        const eventId = uuid();
        this.props.firebase.database().ref('events/' + eventId).set({
            dateText: this.state.selectedDate.dateText,
            description: event.description,
            duration: event.duration,
            eventType: event.eventType,
            name: event.name,
            time: event.time,
        });
        // this.props.dateEventActions.addEvent({ event, dateText: this.state.selectedDate.dateText });
        this.setState(prevState=>({ 
            showAddEventModal: !prevState.showAddEventModal,
            selectedDate: !prevState.showAddEventModal? this.state.selectedDate: {},
            switchAddEventModalState: !prevState.switchAddEventModalState,
        }));
    }

    fetchAllEvents = () => {
        const dateEventActions = this.props.dateEventActions;
        const eventRef = this.props.firebase.database().ref('events');
        eventRef.orderByValue().on("value", function(snapshot) {
            const eventsObj = snapshot.val();
            dateEventActions.saveFetchedEvents(Object.keys(eventsObj).map(key => ({ ...eventsObj[key], key })));
        });
    }

    onSearch = text => {
        const searcher = new FuzzySearch(this.props.dateEvent.events, ['name', 'description'], {caseSensitive: false});
        this.setState({ 
            autoCompleteData: searcher.search(text).map(event => ({ ...event, value: event.name })),
        });
    }
    
    onSelect = (value, option) => {
        this.props.dateEventActions.getMonthDateArray(getDaysInMonth(getMonthObj(option.dateText)));
        this.setState({ currentDate: getMonthObj(option.dateText) });
    }

    render() {
        return (
            <div className="personal-calendar-container">
                <Header 
                    currentDate={this.state.currentDate} 
                    navMonth={this.navMonth} 
                    getToday={this.getToday}
                    onSearch={this.onSearch}
                    onSelect={this.onSelect}
                    autoCompleteData={this.state.autoCompleteData}
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
        this.fetchAllEvents();
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

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(PersonalCalendars));