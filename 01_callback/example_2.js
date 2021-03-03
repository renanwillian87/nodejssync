const delayedSum = function (a, b, callback) {
    setTimeout(function(){
        callback(a + b);
    }, 2000);
}

delayedSum(2,2, (result) => {
    console.log(result);
});

console.log('event loop');