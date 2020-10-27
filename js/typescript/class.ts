class Employee {
  //private employeeName: string;
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name
  }

  greet() {
    console.log(`good morning ${this.employeeName}`)
  }

}

let emp1 = new Employee("venkat");
emp1.greet(); 


class person extends Employee{
  getInfo() {
    console.log(`${this.employeeName}`)
  }
}