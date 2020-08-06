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
            events: [],
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