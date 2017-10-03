function truncate(str, num) {
    var trun = '';
    if (str.length > num) {
        trun = str.slice(0, num - 3) + ' . . .';
        return trun;
    }
    return str;
}