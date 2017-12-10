
var Car  = function(options){
    this.title = options.title;
};

Car.prototype.drive = function(){
    return 'vroom';
}

/*
const car = new Car({title: 'Focus'});
car.drive();
car;
*/

var Toyota= function(options){
    Car.call(this,options);
    this.color  = options.color;
}
/*
const toyota = new Toyota({color:'red', 
title: 'Daily Driver'});
*/

// lol, nobody understands this

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function(){
    return 'beep';
}

const toyota = new Toyota({color:'red',title:'daily Driver'});


console.log('------');



console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());