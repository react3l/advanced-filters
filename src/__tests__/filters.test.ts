import {StringFilter} from '../StringFilter';

test('filter work', () => {
  const testString: string = 'string filter test';
  const stringFilter: StringFilter = new StringFilter({
    contain: testString,
  });
  expect(stringFilter.contain).toEqual(testString);
  expect(stringFilter instanceof StringFilter).toEqual(true);
});
