import {Filter, FilterType} from './Filter';
import { translate } from './helpers/internationalization';
import nameof from 'ts-nameof.macro';

export class IdFilter extends Filter {
  public static types(filter?: IdFilter): FilterType<IdFilter>[] {
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
        key: nameof(filter.in),
        label: translate('filters.in'),
      },
      {
        key: nameof(filter.notIn),
        label: translate('filters.notIn'),
      },
    ];
  }

  public equal?: number;

  public notEqual?: number;

  public in?: number[];

  public notIn?: number[];
}
