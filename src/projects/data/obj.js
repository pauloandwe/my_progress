const obj = {
    name:"Paulo",
    age: 19,
    "keyTrue": false,
    sayMyName: function(){
        console.log(this.name);
    }
}
console.log(obj.keyTrue);
obj.sayMyName()