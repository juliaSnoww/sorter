class Sorter {
  constructor() {
    this.box=[];
  }

  add(element) {
      this.box.push(element);
  }

  at(index) {
      return this.box[index]
  }

  get length() {
      return this.box.length;
  }

  toArray() {
    return this.box;
  }

  sort(indices) {
    var andrey = [];
    indices.sort(function(left, right) {return left - right});
    for (let i of indices) {
      andrey.push(this.box[i]);
    }
    andrey.sort(function(left, right) {return left - right});
    for (let i of indices) {
      this.box[i] = andrey.shift();
    }
  }

  setComparator(compareFunction){
      this.comparator = compareFunction;
  }
}

module.exports = Sorter;