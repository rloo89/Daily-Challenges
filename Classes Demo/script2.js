


class Burger { 
    constructor(toppings, protein, containsGluten) {

    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;
    }

    describe = () => {
        console.log(`This ${this.protein} burger contains ${this.toppings}`)
    }

    warning = () => {
        if (containsGluten === true) {
            containsGluten = "contains gluten";
        } else {
            containsGluten = "is gluten-free";
        }
        console.log(`Warning, this ${this.protein} burger ${containsGluten}`);
    }
};

