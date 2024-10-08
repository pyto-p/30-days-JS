let days = 0;
let month = prompt("Enter a month: ").toLowerCase();
const now = new Date();
const currentYear = now.getFullYear();

const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);

const monthsWith30Days = ['april', 'june', 'september', 'november'];

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

switch (month) {
    case 'february':
        days = isLeapYear ? 29 : 28;
        break;
    case monthsWith30Days.includes(month) && month:
        days = 30;
        break;
    default:
        days = 31;
}

console.log(`This ${currentYear} ${capitalizeFirstLetter(month)} has ${days} days.`);
