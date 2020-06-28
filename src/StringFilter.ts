import { Filter, FilterType } from './Filter';
import nameof from 'ts-nameof.macro';
import {translate} from './helpers/internationalization';

export class StringFilter extends Filter {
  public static types(filter?: StringFilter): FilterType<StringFilter>[] {
    return [
      {
        key: nameof(filter.startWith),
        label: translate('filters.startWith'),
      },
      {
        key: nameof(filter.notStartWith),
        label: translate('filters.notStartWith'),
      },
      {
        key: nameof(filter.endWith),
        label: translate('filters.endWith'),
      },
      {
        key: nameof(filter.notEndWith),
        label: translate('filters.notEndWith'),
      },
      {
        key: nameof(filter.contain),
        label: translate('filters.contain'),
      },
      {
        key: nameof(filter.notContain),
        label: translate('filters.notContain'),
      },
      {
        key: nameof(filter.equal),
        label: translate('filters.equal'),
      },
      {
        key: nameof(filter.notEqual),
        label: translate('filters.notEqual'),
      },
    ];
  }

  public startWith?: string;

  public notStartWith?: string;

  public endWith?: string;

  public notEndWith?: string;

  public equal?: string;

  public notEqual?: string;

  public contain?: string;

  public notContain?: string;
}
