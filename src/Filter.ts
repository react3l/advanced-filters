export class Filter {
  constructor(partial?: Partial<Filter>) {
    if (partial) {
      Object.assign<Filter, Partial<Filter>>(this, partial);
    }
  }
}
