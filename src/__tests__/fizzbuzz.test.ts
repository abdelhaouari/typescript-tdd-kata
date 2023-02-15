import fizzBuzzKata from '../FizzBuzz';

describe('fizzBuzzKata', () => {
  it('should return the correct output for n = 15', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    fizzBuzzKata(15);
    expect(consoleSpy).toHaveBeenCalledWith("1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz");
  });
  
  it('should return the correct output for n = 5', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    fizzBuzzKata(5);
    expect(consoleSpy).toHaveBeenCalledWith("1", "2", "Fizz", "4", "Buzz");
  });
  
  it('should return the correct output for n = 0', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    fizzBuzzKata(0);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
  });
  
  it('should throw an error for negative n', () => {
    expect(() => fizzBuzzKata(-1)).toThrowError('n must be a positive integer');
  });
});
