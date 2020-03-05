export type KeyTransformer = (key: string | number) => (string | number);

export const defaultKeyTransformFunction = (key: string | number) => {
  return key;
};

export type ValueTransformer = (value?: any) => any;

export const defaultValueTransformFunction = (value?: string | number | boolean): any => {
  return value;
};

export function transformAPIContent(
  data: any,
  transformKey: KeyTransformer = defaultKeyTransformFunction,
  transformValue: ValueTransformer = defaultValueTransformFunction,
): any {
  if (typeof data === 'object' && data !== null) {
    if (data instanceof Array) {
      return data.map((e) => transformAPIContent(e, transformKey, transformValue));
    }
    Object
      .entries(data)
      .forEach(([key, value]) => {
        delete data[key];
        const transformedKey: string | number = transformKey(key);
        if (typeof value === 'object' && value !== null) {
          data[transformedKey] = transformAPIContent(value, transformKey, transformValue);
        } else {
          data[transformedKey] = transformValue(value);
        }
      });
    return data;
  }
  return defaultValueTransformFunction(data);
}
