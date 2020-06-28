import { translate } from './helpers/internationalization';
import nameof from 'ts-nameof.macro';
import {Filter, FilterType} from './Filter';

export class GuidFilter extends Filter {
  public static types(filter?: GuidFilter): FilterType<GuidFilter>[] {
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

  public equal?: string;

  public notEqual?: string;

  public in?: string[];

  public notIn?: string[];
}
