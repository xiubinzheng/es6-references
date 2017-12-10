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