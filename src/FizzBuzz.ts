export default function FizzBuzzKata(n: number): String[] {

    let arrayFizzed: String[] = new Array();

    for (let k = 0; k < n; n++) {

        if (((k % 3) == 0) && (k/5 == 0)) {
            arrayFizzed[k] = "FizzBuzz";
        } else if ((k % 5) == 0) {

            arrayFizzed[k] = "Buzz";
        } else if ((k % 3) == 0) {

            arrayFizzed[k] = "Fizz";
        } else {

            arrayFizzed[k] = k.toString();
        }
    }

    return arrayFizzed;
}

const result = FizzBuzzKata(15);
console.log(result);
