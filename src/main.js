let browsersArray = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];
let browsersObject = {
    Chrome: 'Chrome',
    Opera: 'Opera',
    Firefox: 'Firefox',
    Edge: 'Edge',
    Safari: 'Safari',
};

for (let browser in browsersObject) {
    console.log(browser.padStart(20, `let`.padEnd(20, `...`))); // 'Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'
    console.log(browsersObject[browser]); // 'норм', 'норм', 'так се', 'сука', 'сука'
};
