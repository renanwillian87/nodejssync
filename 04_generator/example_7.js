const loop = function*(){
    let y = 0;
    while(true) {
        console.log(y++);
        yield;
    }
}

const generator = loop();
generator.next();
generator.next();
generator.next();
generator.next();


console.log(generator.next());
