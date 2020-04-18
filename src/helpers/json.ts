import { JSONObject } from 'index';

export class JSONHelper {
  sort(json: JSONObject) {
    const result: JSONObject = {};
    if (typeof json === 'object' && json !== null) {
      Object
        .keys(json)
        .sort()
        .forEach((key: string) => {
          result[key] = json[key];
          if (typeof result[key] === 'object' && result[key] !== null) {
            result[key] = this.sort(result[key] as JSONObject);
          }
        });
    }
    return result;
  }

  unflatten(jsonTable: { [key: string]: string }): JSONObject {
    if (jsonTable) {
      const result: { [key: string]: any } = {};
      Object
        .keys(jsonTable)
        .forEach((key: string) => {
          const namespaces: string[] = key.split('.');
          const lastIndex: number = namespaces.length - 1;
          let current: { [key: string]: any } = result;
          namespaces.forEach((namespace: string, index: number) => {
            if (!current.hasOwnProperty(namespace)) {
              current[namespace] = (index === lastIndex) ? jsonTable[key] : {};
            }
            if (typeof current[namespace] === 'object') {
              current = current[namespace];
            }
          });
        });
      return this.sort(result);
    }
    return jsonTable;
  }

  flatten(json: { [key: string]: any }, parentKey: string = '') {
    if (typeof json === 'object' && json !== null) {
      let result: { [key: string]: string } = {};
      Object
        .keys(json)
        .forEach((key: string) => {
          const combinedKey: string = parentKey ? `${parentKey}.${key}` : key;
          if (typeof json[key] !== 'object' || json[key] === null) {
            result = {
              ...result,
              [combinedKey]: json[key],
            };
          } else {
            result = {
              ...result,
              ...this.flatten(json[key],
                combinedKey,
              ),
            };
          }
        });
      return result;
    }
    return json;
  }
}

export const jsonHelper: JSONHelper = new JSONHelper();
