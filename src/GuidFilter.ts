import { Filter } from './Filter';

/**
 * Advanced filter for GUID key fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class GuidFilter extends Filter {
  public equal?: string;

  public notEqual?: string;

  public in?: string[];

  public notIn?: string[];
}
