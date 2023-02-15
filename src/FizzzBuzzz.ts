export default function fizzBuzz(n: number): string[] {
    let arrFizzBuzz: string[] = new Array();

    for (let i = 1; i <= n; i++) {
        if(i % 3 == 0) {
            arrFizzBuzz[i] = 'Fizz';
        }
        if(i % 5 == 0) {
            arrFizzBuzz[i] = 'Buzz';
        }
        if(i % 3 == 0 && i % 5 == 0) {
            arrFizzBuzz[i] = 'FizzBuzz';
        }
        if(!(i % 3 == 0 || i % 5 ==0)){
            arrFizzBuzz[i] = i.toString();
        }
    }

    return arrFizzBuzz;
}

//const result = fizzBuzz(15);
//console.log(result);