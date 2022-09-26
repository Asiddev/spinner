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
  let time = 0;

  spinnerComponents.forEach((component, i) => {
    setTimeout(() => process.stdout.write(component), 500 * i);
  });
};

writeSpinner(spinnerComponents);
