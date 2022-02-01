const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday

function getFormattedDate(dateout) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[dateout.getDay()];
    let minute = dateout.getMinutes();
    let hour = dateout.getHours();
    let year = dateout.toLocaleDateString();
    minute = (minute < 10) ? '0' + minute : minute;
    hour = (hour < 10) ? '0' + hour : hour;

    alert(`${year} ${hour}:${minute} ${day}`);
}