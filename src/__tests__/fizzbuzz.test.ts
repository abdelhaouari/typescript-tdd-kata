// import hello from "../hello";
import FizzBuzz from "../FizzBuzz"

describe('FizzBuzz', () => {
    let n = 8; 
    let arrayFizzed;

    it('write my first test', () => {
        expect(1).toEqual(1)
    });

    it('Devrait retourner "Fizz" quand n est divisible par 3', () => {
      expect(FizzBuzz(3)).toEqual("Fizz");
    });
/*
    it('Devrait retourner "Buzz" quand n est divisible par 5', () => {
         arrayFizzed = FizzBuzz(5);
        expect(arrayFizzed.length).toEqual("Buzz");
    });

    it('Devrait retourner "FizzBuzz" quand n est divisible par 3 et par 5', () => {
         arrayFizzed = FizzBuzz(8);
        expect(arrayFizzed.length).toEqual("FizzBuzz");
    });

    it('Devrait retourner n quand n nest pas divisible par 3 ou par 5', () => {
        arrayFizzed = FizzBuzz(n);
        expect(arrayFizzed.length).toEqual(n);
    });*/
});