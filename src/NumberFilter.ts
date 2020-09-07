import { Filter } from './Filter';

/**
 * Advanced filter for number fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class NumberFilter extends Filter {
  public equal?: number;

  public notEqual?: number;

  public greater?: number;

  public greaterEqual?: number;

  public less?: number;

  public lessEqual?: number;

  public range?: [number | undefined, number | undefined];
}
