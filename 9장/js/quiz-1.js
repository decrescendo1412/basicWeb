class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        document.write(`${this.color} ${this.name}가 달린다.`);
    }
}

const pet = new Pet("자두","자두색");
pet.run();