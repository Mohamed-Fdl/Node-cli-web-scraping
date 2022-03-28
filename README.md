# Node cli + web scraping(Pupeteer & yargs)
In this repo I show you how I made a little web scraping application using [pupeteer](https://pptr.dev/) to get information and [Yargs](http://yargs.js.org/) for Node CLI  

## Project structure
In the collect module I create a function that take two parameters :the month and the year.I scrap [IMDB](ttps://www.imdb.com/movies-coming-soon)  and get the movies that coming soon according to the parameters and store them in a json file.(moviesOf-month-year.json)

In the index module, I get variables given by the CLI and execute the function in the collect module


 ### Download the project to see more!