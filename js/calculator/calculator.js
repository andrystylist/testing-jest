const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
//commonjs y se exporta on un objeto incluyendo las funciones que debo exportar para ser usadas Es6 ya se puede simplificar cuando el mismo nomnbre y valor
module.exports = {
  add,
  subtract,
  divide,
  multiply
};