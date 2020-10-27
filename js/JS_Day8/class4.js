class CoffeeMachine {
    _waterAmount = 0; //the amount of the water inside 

    constructor(power){
        this._power = power;

        console.log(`Created a coffee-mahine, powder: ${power}`)
    }
    
    get power(){
        return this._power;
    }

    get waterAmount(){
        return this._waterAmount
    }

    set waterAmount(value){
        if(value < 0 ){
            throw new Error(" Negative water, machine won't work")
        }
        this._waterAmount = value
    }

}

let coffeeMachine = new CoffeeMachine(100); 

//coffeeMachine.waterAmount = 200; //add water

coffeeMachine.power = 20; // error (no setter)
console.log(coffeeMachine.power)

