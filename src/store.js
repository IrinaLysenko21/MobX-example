import { observable, computed, configure, action, decorate } from "mobx";

configure({ enforceActions: "observed" });

class AppSore {
  constructor() {
    this.counter = 0;
    this.name = "No name";
    this.tasks = [
      {
        id: "1",
        title: "Bind in Constructor",
        description:
          "However, on most apps the performance implications of approach #2 and #3 won’t be noticeable, so the readability and maintenance advantages of approach #2 and #3 may outweigh performance concerns in many apps.",
      },
      {
        id: "2",
        title: "Use Arrow Function in Class Property",
        description:
          "It’s straightforward to refactor from the ES5 createClass style into this style by converting relevant functions into arrow functions. In fact, there’s a completely automated way to handle this using a codemod.",
      },
    ];
    //   this.filter = "";
  }

  get userInfo() {
    return `${this.name} ${this.counter}`;
  }

  counterIncrement() {
    return this.counter++;
  }

  counterDecrement() {
    return this.counter--;
  }

  setName(name) {
    this.name = name;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

decorate(AppSore, {
  counter: observable,
  name: observable,
  tasks: observable,
  userInfo: computed,
  counterIncrement: action,
  counterDecrement: action,
  setName: action,
  addTask: action,
  //   filter: observable,
  // filteredDevelopers: computed,
  //   updateFilter: action,
});

const store = new AppSore();

export default store;
