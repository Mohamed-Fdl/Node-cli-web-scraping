var collect = require('./collect')

const yargs = require("yargs");

const mounths = yargs.usage("Usage: -m <mounth>").option("m", { alias: "mounth", describe: "The movie's mounth", type: "string", demandOption: true }).argv;

const years = yargs.usage("Usage: -y <year>").option("y", { alias: "year", describe: "The movie's year", type: "string", demandOption: true }).argv;

collect(mounths.mounth, years.year)