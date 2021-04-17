const FizzBuzz = (numero1, numero2) => {
  let n = 0;

  for (let i = 0; i <= 100; i++) {
    let multiploDelPrimero = (numero1, n) => (n % numero1 == 0 ? "Fizz" : "-");
    let multiploDelSegundo = (numero2, n) => (n % numero2 == 0 ? "Buzz" : "-");
    console.log(n + " " + multiploDelPrimero(numero1, n) + multiploDelSegundo(numero2, n));
    n++;
  }
};

FizzBuzz(5, 2);
