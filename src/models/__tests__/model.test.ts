import { Model } from '../Model';

describe('models', () => {
  it('Model', () => {
    class Person extends Model {
      name: string;
    }

    const name: string = 'test';

    const person: Person = Model.clone<Person>({ name });

    expect(person.name).toEqual(name);
  });
});
