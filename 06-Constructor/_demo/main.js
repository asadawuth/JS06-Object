function Developer(name, age) {
    this.name = name;
    this.age = age;
    this.role = 'dev';
    this.sakary = 40_000;
    this.dev = function () {
        console.log("I'm develop some features")
    };
}

const dev2 = new Developer('a',20);
//log(dev2);
//dev2.dev();
const dev3 = new Developer('b',30);
//log(dev3);
//dev3.dev();