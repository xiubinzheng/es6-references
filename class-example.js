
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
    this.color  = options.color;
}

const toyota = new Toyota({color:'red', 
title: 'Daily Driver'});

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

// lol, nobody understands this


console.log(toyota);