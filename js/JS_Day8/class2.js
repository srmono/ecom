//inheritance 

class Animal {
    constructor(name){
        this.speed = 0; 
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
    }

}

let animal = new Animal("Any");

class Rabbit extends Animal {

    constructor(name, legLength){
        super(name)
        this.legLength = legLength
    }

    hide(){
        console.log(`${this.name} hides...!`)
    }

    stop(){
        //super.stop(); // calls parent stop
        //this.hide(); // then hide
        setTimeout(() => super.stop(), 1000);
        //setTimeout( function(){ super.stop() }, 1000); //SyntaxError: 'super' keyword unexpected here
    }
}

let rabbit = new Rabbit("Whilte Rabbit", 20);
//rabbit.run(70);
//rabbit.stop();

console.log(rabbit.legLength)










