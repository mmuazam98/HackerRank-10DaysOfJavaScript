//Declaring a class
class Polygon {
  //Constructor to define object like props within class
  constructor(args) {
    this.values = args;
  }

  perimeter() {
    return (this.values || []).reduce((target, item) => target + item);
  }
}
