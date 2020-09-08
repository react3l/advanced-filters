import { Filter } from './Filter';

/**
 * Advanced filter for string fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class StringFilter extends Filter {
  public startWith?: string;

  public notStartWith?: string;

  public endWith?: string;

  public notEndWith?: string;

  public equal?: string;

  public notEqual?: string;

  public contain?: string;

  public notContain?: string;

  constructor(partial?: Partial<StringFilter>) {
    super();
    if (partial) {
      Object.assign<StringFilter, Partial<StringFilter>>(this, partial);
    }
  }
}
