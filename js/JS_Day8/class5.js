class CoffeeMachine {
    #waterlimit = 200;

    checkWater(value) {
        if(value < 0 ) throw new Error(" negative water");
        if(value > this.#waterlimit) throw new Error(" Too Much Water ");
    }
}

let coffeeMachine = new CoffeeMachine()

coffeeMachine.#waterLimit = 1000;