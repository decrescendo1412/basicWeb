class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        document.write(`<h1>${this.color} ${this.name}가 달린다.<h1><hr>`);
    }
}
class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }
    viewInfo() {
        document.write(`<h1>이름:${this.name}, 품종:${this.breed}, 색깔:${this.color}<h1><hr>`);
    }
}

const cat = new Cat("냐옹이", "흰색", "잡종");
cat.viewInfo();
cat.run();