export type FilterType<T extends Filter> = {
  key: keyof T | string;
  label: string;
};

export class Filter {
  public static types(): FilterType<Filter>[] {
    return [];
  }

  constructor(filter?: Filter) {
    if (filter) {
      Object.assign(this, filter);
    }
  }
}
