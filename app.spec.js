import { gameOfLive } from './app.js';
import { ramdonCellBoard } from './RamdonCellBoard.js';
describe('Given the function gameOfLive', () => {
  describe('When receive array checked', () => {
    test('Then should be diferent array', () => {
      let array = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = gameOfLive(array);
      expect(expected).not.toBe(array);
    });
    test('Then should be diferent array', () => {
      let array = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ];
      const expected = gameOfLive(array);
      expect(expected).not.toBe(array);
    });
    test('Then should be diferent array', () => {
      let array = [
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
      ];
      const expected = gameOfLive(array);
      expect(expected).not.toBe(array);
    });
    test('Then should be diferent array', () => {
      let array = [
        [0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 1, 0, 1, 0],
      ];
      const expected = gameOfLive(array);
      expect(expected).not.toBe(array);
    });
    describe('When receive array checked', () => {
      test('Then should be diferent array', () => {
        let arrayCheck = [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        let result = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const expected = gameOfLive(arrayCheck);
        expect(expected).toEqual(result);
      });
      test('Then should be diferent array', () => {
        let arrayCheck = [
          [0, 1, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        let result = [
          [0, 0, 0, 0, 0],
          [1, 0, 1, 0, 0],
          [0, 1, 1, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const expected = gameOfLive(arrayCheck);
        expect(expected).toEqual(result);
      });
    });
    describe('When receive array ramdon', () => {
      test('Then should be diferent array', () => {
        let array = ramdonCellBoard(10, 10);
        const expected = gameOfLive(array);
        expect(expected).not.toBe(array);
      });
      test('Then should be diferent array', () => {
        let array = ramdonCellBoard(2, 2);
        const expected = gameOfLive(array);
        expect(expected).not.toBe(array);
      });
      test('Then should be diferent array', () => {
        let array = ramdonCellBoard(3, 3);
        const expected = gameOfLive(array);
        expect(expected).not.toBe(array);
      });
      test('Then should be diferent array', () => {
        let array = ramdonCellBoard(100, 100);
        const expected = gameOfLive(array);
        expect(expected).not.toBe(array);
      });
      test('Then should be diferent array', () => {
        let array = ramdonCellBoard(1000, 1000);
        const expected = gameOfLive(array);
        expect(expected).not.toBe(array);
      });
    });
  });
});
