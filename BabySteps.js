var math = process.argv.slice(2);
console.log(math.reduce(function(total, math) {
    return total += parseInt(math, 10)
}, 0));