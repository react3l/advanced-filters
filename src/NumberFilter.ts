import {Filter, FilterType} from './Filter';
import {translate} from './helpers/internationalization';
import nameof from 'ts-nameof.macro';

export class NumberFilter extends Filter {
  public static types(filter?: NumberFilter): FilterType<NumberFilter>[] {
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

  public equal?: number;

  public notEqual?: number;

  public greater?: number;

  public greaterEqual?: number;

  public less?: number;

  public lessEqual?: number;

  public range?: [number | undefined, number | undefined];
}
