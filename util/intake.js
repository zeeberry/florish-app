export function getOptionRank(options, choice) {
    return options.findIndex(element => element.toLowerCase() === choice) + 1;
}