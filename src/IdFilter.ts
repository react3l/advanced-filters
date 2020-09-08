import { Filter } from './Filter';

/**
 * Advanced filter for ID key fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class IdFilter extends Filter {
  public equal?: number;

  public notEqual?: number;

  public in?: number[];

  public notIn?: number[];

  constructor(partial?: Partial<IdFilter>) {
    super();
    if (partial) {
      Object.assign<IdFilter, Partial<IdFilter>>(this, partial);
    }
  }
}
