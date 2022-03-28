const puppeteer = require('puppeteer');
const fs = require('fs')

module.exports = function(mounth, year) {
    const fileName = 'moviesOf-' + mounth + '-' + year + '.json'
    console.log(fileName);

    (async() => {
        const browser = await puppeteer.launch({ headless: true }); // default is true
        const page = await browser.newPage();
        await page.goto(`https://www.imdb.com/movies-coming-soon/${year}-${mounth}/`, {
            waitUntil: 'load',
            // Remove the timeout
            timeout: 0
        });
        const movies = await page.evaluate(() => {
            const movies = []
            var elements = document.querySelectorAll('div.list_item')
            for (e of elements) {
                movies.push({
                    img: e.querySelector('img.poster').src,
                    title: e.querySelector('td.overview-top').querySelector('a').text,
                    descrpition: e.querySelector('div.outline').textContent.trim()
                })
            }
            return movies
        })
        fs.writeFile('./movies/' + fileName, JSON.stringify(movies), (err) => {
            if (err) throw err
        })
        await browser.close()
    })();
}