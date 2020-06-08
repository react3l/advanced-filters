import camelCase from 'lodash/camelCase';
import { transformAPIContent } from '../data';

describe('data helpers', () => {
  it('transformKey works', () => {
    const data: any = {
      snake_case: 'value',
    };

    const transformedData = transformAPIContent(data, (key: string) => camelCase(key));

    expect(transformedData.snakeCase).toEqual('value');
    expect(transformedData.snake_case).toBeUndefined();
  });

  it('transformValue works', () => {
    const data: any = {
      key: 'value',
    };

    const transformedData = transformAPIContent(data, undefined, (value: any) => {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }
      return value;
    });

    expect(transformedData.key).toEqual('VALUE');
  });
});
