import * as dateFns from 'date-fns';

export function getMonthString(month) {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthArr[month];
}

export function getMonthObj(dateText) {
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [ dd, mm, yyyy ] = dateText.split(' ');
  const monthText = monthArr.indexOf(mm)+1;
  const compText = `${monthText}/${dd}/${yyyy}`;
  return new Date(compText);
}

export function getDaysInMonth(currentMonth, todayDates) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let formattedDate = '';
    for (let day = startDate; day <= endDate; day) {
      for (let i = 0; i < 7; i++) {
        const tempDay = day;
        formattedDate = dateFns.format(day, dateFormat);
        days.push({ 
          formattedDate,
          day,
          dateText: day.getDate()+" "+getMonthString(day.getMonth())+" "+day.getFullYear(),
          events: [],
          isToday:  todayDates.some(today => dateFns.isSameDay(tempDay, today)),
          isActive:  dateFns.isSameMonth(day, currentMonth),
        });
        day = dateFns.addDays(day, 1);
      }
      rows.push(days);
      days = [];
    }
    return rows;
}