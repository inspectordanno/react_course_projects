//Old syntax (ES6)

class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi my name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//New syntax (Babel class properties plugin)

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi my name is ${this.name}.`; //arrow function's this context is the instance
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());