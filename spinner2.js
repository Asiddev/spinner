let spinnerComponents = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];

const writeSpinner = function () {
  //i will act as our incrementor
  spinnerComponents.forEach((component, i) => {
    setTimeout(() => process.stdout.write(component), 500 * i);
  });
};

writeSpinner(spinnerComponents);
