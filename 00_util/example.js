console.time('performance_increment');
let x = 0;
while(x < 100000) {
    x++;
}
console.timeEnd('performance_increment');


// console.time('performance_log');
// let y = 0;
// while(y < 100000) {
//     console.log(y++);
// }
// console.timeEnd('performance_log');