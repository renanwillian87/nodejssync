
const delayedSum = function (a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(a + b);
        }, 500);
    });
}

console.time('performance');
Promise.all([
    delayedSum(2,2),
    delayedSum(4,4)
]).then((result) => {
    const [a, b] = result;
    delayedSum(a,b).then((result) => {
        console.log(result);
        console.timeEnd('performance');
    });
});
console.log('event loop');
