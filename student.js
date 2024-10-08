class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);

        if (rollNumber <= 0) {
            throw new Error("Roll number must be positive.");
        }
        this.rollNumber = rollNumber;
    }

    introduce() {
        return `${super.introduce()} My roll number is ${this.rollNumber}.`;
    }

    study(subject) {
        return `${this.name} is studying ${subject}.`;
    }
}

try {
    // valid student
    const student1 = new Student("Eesha", 20, 8);
    console.log(student1.introduce());  

    //another student with an invalid roll number 
    const student2 = new Student("Mansi", 29, -1);  
} catch (error) {
    console.error(error.message); 
}

