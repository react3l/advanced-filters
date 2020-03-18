import {FilterType} from 'interfaces/react3l-core-interfaces';

export class Filter {
  public static types(): Array<FilterType<Filter>> {
    return [];
  }

  constructor(filter?: Filter) {
    if (filter) {
      Object.assign(this, filter);
    }
  }
}
