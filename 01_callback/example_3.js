const delayedSum = function (a, b, callback) {
    setTimeout(function(){
        callback(a + b);
    }, 500);
}

console.time('performance');
delayedSum(2,2, (a) => {
    delayedSum(4,4, (b) => {
        delayedSum(a,b, (result) => {
            console.log(result);
            console.timeEnd('performance');
        });
    });
});

console.log('event loop');