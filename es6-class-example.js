class Car{
    constructor(options){
        this.title = options.title;
    }
    drive(){
        return 'vroom';
    } 
}


const car =  new Car({title:'Toyota'});

console.log(car);
console.log(car.drive());


// class is different from an object where you don't need a , to seperate the methods


class Toyota extends Car{
    constructor(options){
        super(options);// calling Car.constructor()
        this.color = options.color;
    }
    honk(){
        return 'beep';
    }
}

const toyota = new Toyota({color: 'red',title:' driver'});

console.log('------');
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());

class Monster{
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

class Snake extends Monster{
    bite(snake){
        snake.health -=10;
    }

}

const drago = new Snake({name:'ninja drago'});
const evilGoku = new Snake({name:'evil ninja goku'});

drago.bite(evilGoku);
console.log(drago);
console.log(evilGoku);
console.log(toyota);
