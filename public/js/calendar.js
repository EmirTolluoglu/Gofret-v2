const config = {
    months: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
    ],
    days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    days: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    firstDayOf2022First: 'Cumartesi',
}

document.querySelector(".week-item").classList.add("selected");
const classes = ["first", "second", "third", "fourth", "fifth"];
const weekItems = document.querySelectorAll(".week-item");
const monthSelect = document.querySelector("month-item");
const selectionCursor = document.querySelector(".selection-cursor");

//add selected class to week-item when click and arrow
weekItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        document.querySelector(".selected").classList.remove("selected");
        item.classList.add("selected");
        refreshContent("Ocak", index);
        selectionCursor.classList.remove("first-selected", "second-selected", "third-selected", "fourth-selected", "fifth-selected");
        selectionCursor.classList.add(classes[index] + "-selected");
    });
});

function refreshDays(month) {
    //search for month in config.months and get value of days_in_month
    var days = [];
    var firstMonthDayCount = config.days_in_month[config.months.indexOf(month)];
    var secondMonthDayCount = config.days_in_month[config.months.indexOf(month) + 1];
    var dayCount = firstMonthDayCount + secondMonthDayCount;
    var firstIndex = 1;
    var lastIndex = 14;
    var firstmontyLock = true;
    var secondMonthLock = true;
    var sumDays = 0;
    while (dayCount > 0) {
        days.push({
            first: firstIndex,
            last: lastIndex
        });
        firstIndex += 14;
        lastIndex += 14;
        sumDays += 14;
        if (sumDays > dayCount) {
            days[days.length - 1].last = secondMonthDayCount;
        }
        if (firstIndex > firstMonthDayCount && firstmontyLock) {
            firstIndex = firstIndex - firstMonthDayCount;
            firstmontyLock = false;
        }
        if (lastIndex > firstMonthDayCount && secondMonthLock) {
            lastIndex = lastIndex - firstMonthDayCount;
            secondMonthLock = false;
        }

        if (days.length == 5) {
            break;
        }
    }
    document.querySelectorAll(".week-item").forEach((item, index) => {
        item.querySelector('.first-day').innerHTML = days[index].first;
        item.querySelector('.last-day').innerHTML = days[index].last;
    });
    return days;
}

function refreshContent(month, weekIndex) {
    console.log(month, weekIndex);
    var monthIndex = config.months.indexOf(month);
    if (weekIndex >= 4) {
        monthIndex + 1;
    }
    dayIndex = 1;
    firstDay = new Date(2022, monthIndex, document.querySelectorAll(".week-item")[weekIndex].children[0].innerHTML).getDay();
    firstDay = mar(firstDay, 1, 6);
    for (let i = 0; i < 14; i++) {
        if (i < firstDay) {
            continue;
        }
        // console.log(document.querySelectorAll(".weekday-item")[6].children[0]);
        document.querySelectorAll(".weekday-item")[i].children[0].innerHTML = dayIndex;
        dayIndex++;
    }
}

function getWeekDayName(day) {
    return config.days[day];
}
refreshDays("Ocak");
refreshContent("Ocak", 1);

//divide and floor
function daf(number, divider) {
    return Math.floor(number / divider);
}

//minux and replus
function mar(number, minus, max) {
    if (number - minus < 0) {
        return max - Math.abs(number - minus);
    } else {
        return number - minus;
    }
}