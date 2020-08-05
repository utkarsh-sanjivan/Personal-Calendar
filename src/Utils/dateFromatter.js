import * as dateFns from 'date-fns';

export function getMonthString(month) {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthArr[month];
}

export function getDaysInMonth(currentMonth) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        days.push({ 
            formattedDate,
            day,
            dateText: day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(),
            events: [
                { name: 'Event 1', time: '03:00', description: 'Description 1', duration: '2 hrs', dateText:  day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(), eventType: 'b_day' },
                { name: 'Event 2', time: '03:00', description: 'Description 2', duration: '2 hrs', dateText:  day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(), eventType: 'anniversary' },
                { name: 'Event 3', time: '03:00', description: 'Description 3', duration: '2 hrs', dateText:  day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(), eventType: 'meeting' },
                { name: 'Event 4', time: '03:00', description: 'Description 4', duration: '2 hrs', dateText:  day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(), eventType: 'conference' },
                { name: 'Event 5', time: '03:00', description: 'Description 5', duration: '2 hrs', dateText:  day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(), eventType: 'others' },
            ],
            isToday:  dateFns.isSameDay(day, new Date()),
            isActive:  dateFns.isSameMonth(day, currentMonth),
        });
        day = dateFns.addDays(day, 1);
      }
      rows.push(days);
      days = [];
    }
    return rows;
}