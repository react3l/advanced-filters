import {Filter, FilterType} from 'Filter';
import nameof from 'ts-nameof.macro';
import {translate} from 'helpers/internationalization';
import {Moment} from 'moment';

export class DateFilter extends Filter {
  public static types(filter?: DateFilter): FilterType<DateFilter>[] {
    return [
      {
        key: nameof(filter.equal),
        label: translate('filters.equal'),
      },
      {
        key: nameof(filter.notEqual),
        label: translate('filters.notEqual'),
      },
      {
        key: nameof(filter.greater),
        label: translate('filters.greater'),
      },
      {
        key: nameof(filter.greaterEqual),
        label: translate('filters.greaterEqual'),
      },
      {
        key: nameof(filter.less),
        label: translate('filters.less'),
      },
      {
        key: nameof(filter.lessEqual),
        label: translate('filters.lessEqual'),
      },
      {
        key: nameof(filter.range),
        label: translate('filters.range'),
      },
    ];
  }

  public equal?: Moment;

  public notEqual?: Moment;

  public greater?: Moment;

  public greaterEqual?: Moment;

  public less?: Moment;

  public lessEqual?: Moment;

  public range?: [Moment | null, Moment | null];
}
