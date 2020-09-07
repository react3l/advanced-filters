import { Moment } from 'moment';
import { Filter } from './Filter';

/**
 * Advanced filter for date fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class DateFilter extends Filter {
  public equal?: Moment;

  public notEqual?: Moment;

  public greater?: Moment;

  public greaterEqual?: Moment;

  public less?: Moment;

  public lessEqual?: Moment;

  public range?: [Moment | null, Moment | null];
}
