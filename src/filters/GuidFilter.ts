import { translate } from 'helpers/internationalization';
import nameof from 'ts-nameof.macro';
import { Filter, FilterType } from 'filters/Filter';

export class GuidFilter extends Filter {
  public static types(filter?: GuidFilter): FilterType<GuidFilter>[] {
    return [
      {
        key: nameof(filter.equal),
        label: translate('filters.guidFilter.equal'),
      },
      {
        key: nameof(filter.notEqual),
        label: translate('filters.guidFilter.notEqual'),
      },
      {
        key: nameof(filter.in),
        label: translate('filters.guidFilter.in'),
      },
      {
        key: nameof(filter.notIn),
        label: translate('filters.guidFilter.notIn'),
      },
    ];
  }

  public equal?: string;

  public notEqual?: string;

  public in?: string[];

  public notIn?: string[];
}
