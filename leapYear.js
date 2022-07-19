function leap(year) {
    if (year % 400 == 0)
        return true;
    if (year % 100 == 0)
        return false;
    if (year % 4 == 0)
        return true;

    return false;
}

function leap_year(year) {
    return ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0));
}

console.log(leap(2024));
console.log(leap_year(2020));