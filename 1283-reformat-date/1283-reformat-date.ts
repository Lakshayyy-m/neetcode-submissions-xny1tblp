function reformatDate(date: string): string {
    let [day, month, year] = date.split(" ")
    const months = { "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": 10, "Nov": 11, "Dec": 12 }

    let dayNumber = ""
    for (let i = 0; i < day.length; i++) {
        if (!isNaN(+day[i])) {
            dayNumber += day[i]
        }
    }
    if (dayNumber.length < 2) {
        dayNumber = "0" + dayNumber
    }

    return `${year}-${months[month]}-${dayNumber}`
};


// Pattern Recognition
// 1. Constraint -> No array algorithm needed.
