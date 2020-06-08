import { INPUT_DEBOUNCE_TIME } from '../../config';
import { debounce } from '../debounce';

describe('debounce helper', () => {
  it('debounce works', () => {
    let x: number = 1;

    const increaseX = debounce(() => {
      x++;
    }, INPUT_DEBOUNCE_TIME);

    for (let i: number = 0; i < 10; i++) {
      increaseX();
    }

    expect(x).toEqual(1);

    setTimeout(() => {
      expect(x).toEqual(2);
    }, INPUT_DEBOUNCE_TIME);
  });
});
