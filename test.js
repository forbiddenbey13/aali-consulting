var obj = {
  name: "Alice",
  toString: function() {
    return this.name;
  }
};

var name = 'Bob';

function printer(fn) {
  console.log(fn());
}

printer(function() { return obj.name; });