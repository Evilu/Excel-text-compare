const XLSX = require('xlsx');

function dealwith1() {
    let wb = XLSX.readFile('2.xlsx', {type: 'string'});
    let ws = wb.Sheets[wb.SheetNames[0]];
    let item = XLSX.utils.sheet_to_json(ws, {raw: true, header: 1});
    return [].concat.apply([], item);
}

function dealwith2() {
    let wb = XLSX.readFile('1.xlsx', {type: 'string'});
    let ws = wb.Sheets[wb.SheetNames[0]];
    let item = XLSX.utils.sheet_to_json(ws, {raw: true, header: 1});
    return [].concat.apply([], item);
}

function compare() {
    let arr1 = dealwith1();
    let arr2 = dealwith2();
    let res = arr2.filter(function (n) {
        return !this.has(n)
    }, new Set(arr1));

    console.log('We found',
        res.length,
        'differences' +
        '\n' +
        'Here are they:',
        res);
};

compare()
