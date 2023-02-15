import fizzBuzz from '../FizzzBuzzz'

describe('FizzBuzz', () => {
    it('write my first test', () => {
        expect(1).toEqual(1)
    });

    it('Devrait retourner "Fizz" quand n est divisible par 3', () => {
        expect(fizzBuzz(3)).toContain('Fizz');
    });

    it('Devrait retourner "Buzz" quand n est divisible par 5', () => {
        expect(fizzBuzz(5)).toContain('Buzz')
    });

    it('Devrait retourner "FizzBuzz" quand n est divisible par 3 et 5', () => {
        expect(fizzBuzz(15)).toContain('FizzBuzz')
    });

    it('Devrait retourner n quand n est ni divisible par 3 et ni par 5', () => {
        expect(fizzBuzz(2)).toContain('1')
        expect(fizzBuzz(2)).toContain('2')
    });
});