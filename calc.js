const suma = (a, b) => {
  return a + b;
};
const resta = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  if (b === 0) {
    console.log("No se puede dividir por 0");
  } else {
    return a / b;
  }
};

/* exports.suma = suma;
exports.resta = resta;
exports.multi = multi;
exports.div = div; */
module.exports= {suma, resta, multi, div }
