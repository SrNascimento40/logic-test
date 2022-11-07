export enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec }



export function getMonthDays(month: Month, year: number): number {
    switch (month) {
        case Month.Jan:
        case Month.Mar:
        case Month.May:
        case Month.Jul:
        case Month.Aug:
        case Month.Oct:
        case Month.Dec:
            return 31;
            break;
        case Month.Apr:
        case Month.Jun:
        case Month.Sep:
        case Month.Nov:
            return 30;
            break;
        case Month.Feb:
            if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
                return 29
                break
            } else {
                return 28
                break
            }
    }
}

export function getYearDays(year: number): number {
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
        return 366
    } else {
        return 365
    }
}


console.log(getMonthDays(Month.Jan, 1354))
console.log("\n")
console.log(getMonthDays(Month.Mar, 1578))
console.log("\n")
console.log(getMonthDays(Month.Dec, 1987))
console.log("\n")
console.log(getMonthDays(Month.Feb, 1988))
console.log("\n")
console.log(getMonthDays(Month.Feb, 1900))
console.log("\n")
console.log(getMonthDays(Month.Feb, 2000))
// console.log(getYearDays(3))
// console.log("\n")
// console.log(getYearDays(4))
// console.log("\n")
// console.log(getYearDays(100))
// console.log("\n")
// console.log(getYearDays(300))
// console.log("\n")
// console.log(getYearDays(400))
// console.log("\n")
// console.log(getYearDays(1600))
// console.log("\n")
// console.log(getYearDays(1999))
// console.log("\n")
// console.log(getYearDays(1992))
// console.log("\n")
// console.log(getYearDays(2000))