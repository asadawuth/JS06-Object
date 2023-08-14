







/*function dev() {
    console.log("I am working")
}
function meet() {
    console.log("I am meeting")
}
function sleep() {
    console.log("zzzzzzzzzzzzzzzzz")
}

log(programmer.name)
log(programmer.age)

programmer.dev();
programmer.meet();
programmer.sleep();*/



////////////////////////////////////

/*const programmer = {
    name: 'John',
    age : 30,
    dev: function () {
         console.log("I'm working");
    },
    meet : () => console.log("I'm meeting "),
    sleep() {
        console.log("zzzzzzzzzzzzzzzzzz")
    }
}

programmer.dev();
programmer.meet();
programmer.sleep();
*/

const me = {
    name : 'tao',
    skillone : function () {
        console.log("skillone")
    },
    skilltwo() {
        console.log("skilltwo")
    },
    skillthree : (skill3) => console.log(`skill ${skill3}   three`),
}
console.log(me.name)
me.skillone();
me.skilltwo();
me.skillthree(555);
